import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { Pool } from 'pg'

const pool = new Pool({
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: 5432,
  ssl: { rejectUnauthorized: false },
})

async function initTable() {
  const client = await pool.connect()
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS donations (
        id SERIAL PRIMARY KEY,
        merchant_order_id VARCHAR(50) UNIQUE,
        reference VARCHAR(50),
        nama VARCHAR(100) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20),
        nominal INTEGER NOT NULL,
        status VARCHAR(20) DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `)
    console.log('Table donations ready')
  } catch (error) {
    console.error('Error creating table:', error)
  } finally {
    client.release()
  }
}

export async function POST(request: NextRequest) {
  const client = await pool.connect()
  try {
    await initTable()

    const body = await request.json()
    const { nama, email, phone, nominal } = body

    if (!nama || !email || !nominal) {
      return NextResponse.json(
        { statusCode: '01', statusMessage: 'Missing required fields' },
        { status: 400 }
      )
    }

    const merchantCode = process.env.DUITKU_MERCHANT_CODE
    const apiKey = process.env.DUITKU_API_KEY
    const baseUrl = process.env.DUITKU_BASE_URL
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

    if (!merchantCode || !apiKey || !baseUrl) {
      return NextResponse.json(
        { statusCode: '01', statusMessage: 'Missing environment config' },
        { status: 500 }
      )
    }

    const timestamp = Date.now().toString()
    const merchantOrderId = 'DON-' + Date.now().toString()

    const signature = crypto.createHash('sha256').update(merchantCode + timestamp + apiKey).digest('hex')

    const payload = {
      paymentAmount: parseInt(nominal),
      merchantOrderId,
      productDetails: 'Donasi ZadBayt - Al-Kahfi 10',
      email,
      phoneNumber: phone || '',
      customerVaName: nama,
      callbackUrl: `${appUrl}/api/callback`,
      returnUrl: `${appUrl}/?page=info&donation=success&orderId=${merchantOrderId}`,
      expiryPeriod: 60,
    }

    const response = await fetch(`${baseUrl}/api/merchant/createInvoice`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-duitku-signature': signature,
        'x-duitku-timestamp': timestamp,
        'x-duitku-merchantcode': merchantCode,
      },
      body: JSON.stringify(payload),
    })

    const result = await response.json()

    if (result.statusCode === '00') {
      await client.query(
        `INSERT INTO donations (merchant_order_id, reference, nama, email, phone, nominal, status)
         VALUES ($1, $2, $3, $4, $5, $6, 'pending')`,
        [merchantOrderId, result.reference || '', nama, email, phone || '', parseInt(nominal)]
      )
      console.log('Donation saved to database:', merchantOrderId)
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error('Error creating invoice:', error)
    return NextResponse.json(
      { statusCode: '99', statusMessage: String(error) },
      { status: 500 }
    )
  } finally {
    client.release()
  }
}