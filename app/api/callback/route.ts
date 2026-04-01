import { NextRequest, NextResponse } from 'next/server'
import { Pool } from 'pg'

const pool = new Pool({
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: 5432,
  ssl: { rejectUnauthorized: false },
})

export async function POST(request: NextRequest) {
  const client = await pool.connect()
  try {
    const body = await request.formData()
    
    const merchantCode = body.get('merchantCode') as string
    const amount = body.get('amount') as string
    const merchantOrderId = body.get('merchantOrderId') as string
    const resultCode = body.get('resultCode') as string
    
    console.log('Callback received:', { merchantCode, merchantOrderId, resultCode })

    if (resultCode === '00') {
      await client.query(
        `UPDATE donations SET status = 'success', updated_at = NOW() WHERE merchant_order_id = $1`,
        [merchantOrderId]
      )
      console.log(`Donation ${merchantOrderId} marked as success`)
    } else {
      await client.query(
        `UPDATE donations SET status = 'failed', updated_at = NOW() WHERE merchant_order_id = $1`,
        [merchantOrderId]
      )
      console.log(`Donation ${merchantOrderId} marked as failed`)
    }

    return NextResponse.json({ message: 'OK' }, { status: 200 })
  } catch (error) {
    console.error('Error processing callback:', error)
    return NextResponse.json({ message: 'Error' }, { status: 500 })
  } finally {
    client.release()
  }
}