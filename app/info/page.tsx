'use client'

import { Suspense, useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

type DonationData = {
  nama: string
  email: string
  phone: string
  nominal: string
}

function InfoContent() {
  const searchParams = useSearchParams()
  const [showDonationForm, setShowDonationForm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [donationSuccess, setDonationSuccess] = useState(false)
  const [nominal, setNominal] = useState('')
  const [customNominal, setCustomNominal] = useState('')
  const [formData, setFormData] = useState<DonationData>({
    nama: '',
    email: '',
    phone: '',
    nominal: ''
  })

  useEffect(() => {
    if (searchParams.get('donation') === 'success') {
      setDonationSuccess(true)
      setShowDonationForm(false)
    }
  }, [searchParams])

  const handleNominalSelect = (amount: string) => {
    setNominal(amount)
    setCustomNominal('')
    setFormData(prev => ({ ...prev, nominal: amount }))
  }

  const handleCustomNominal = (value: string) => {
    setCustomNominal(value)
    setNominal('')
    setFormData(prev => ({ ...prev, nominal: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/create-invoice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (result.paymentUrl) {
        window.location.href = result.paymentUrl
      } else {
        alert('Terjadi kesalahan. Silakan coba lagi.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Terjadi kesalahan. Silakan coba lagi.')
    } finally {
      setIsLoading(false)
    }
  }

  if (donationSuccess) {
    return (
      <div className="p-4 space-y-6">
        <div className="bg-white rounded-lg border border-slate-200 p-8 text-center">
          <div className="w-16 h-16 bg-[#f0f7f1] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-2">Donasi Berhasil!</h2>
          <p className="text-slate-600 leading-relaxed">
            Jazaakallah Khairan Katsiran.<br />
            Harapan donasi ini menjadi amal jariyah untuk Anda.
          </p>
          <button
            onClick={() => {
              setDonationSuccess(false)
              setFormData({ nama: '', email: '', phone: '', nominal: '' })
              setNominal('')
              setCustomNominal('')
            }}
            className="mt-6 text-[#2E7D32] font-medium hover:underline"
          >
            Donasi Lagi
          </button>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 p-4 space-y-4">
          <div>
            <h2 className="font-semibold text-slate-700">Al-Kahfi 10</h2>
            <p className="text-sm text-slate-500">Aplikasi pembelajaran Surah Al-Kahfi</p>
          </div>
          
          <div className="border-t border-slate-100 pt-4">
            <h3 className="font-medium text-slate-700 mb-2">Fitur</h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• Membaca dan menghafal Surah Al-Kahfi</li>
              <li>• Audio mursal untuk setiap ayat</li>
              <li>• Pembelajaran mingguan</li>
              <li>• Kumpulan mutiara motivasi</li>
            </ul>
          </div>

          <div className="border-t border-slate-100 pt-4">
            <h3 className="font-medium text-slate-700 mb-2">Informasi</h3>
            <p className="text-sm text-slate-600">
              Surah Al-Kahfi adalah surah ke-18 dalam Al-Quran yang terdiri dari 110 ayat. 
              Membaca surah ini pada hari Jumat mendapat keutamaan yang besar.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-4">
            <p className="text-sm text-slate-500">
              Bagian dari ZadBayt Project<br />
              by satriavi.com
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-4 space-y-6">
      {!showDonationForm ? (
        <>
          <h1 className="text-2xl font-bold text-slate-800">Tentang Aplikasi</h1>
          
          <div className="bg-white rounded-lg border border-slate-200 p-4 space-y-4">
            <div>
              <h2 className="font-semibold text-slate-700">Al-Kahfi 10</h2>
              <p className="text-sm text-slate-500">Aplikasi pembelajaran Surah Al-Kahfi</p>
            </div>
            
            <div className="border-t border-slate-100 pt-4">
              <h3 className="font-medium text-slate-700 mb-2">Fitur</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Membaca dan menghafal Surah Al-Kahfi</li>
                <li>• Audio mursal untuk setiap ayat</li>
                <li>• Pembelajaran mingguan</li>
                <li>• Kumpulan mutiara motivasi</li>
              </ul>
            </div>

            <div className="border-t border-slate-100 pt-4">
              <h3 className="font-medium text-slate-700 mb-2">Informasi</h3>
              <p className="text-sm text-slate-600">
                Surah Al-Kahfi adalah surah ke-18 dalam Al-Quran yang terdiri dari 110 ayat. 
                Membaca surah ini pada hari Jumat mendapat keutamaan yang besar.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-4">
              <button
                onClick={() => setShowDonationForm(true)}
                className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white h-12 rounded-xl font-medium flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                Donasi untuk Pengembangan
              </button>
            </div>

            <div className="border-t border-slate-100 pt-4">
              <p className="text-sm text-slate-500">
                Bagian dari ZadBayt Project<br />
                by satriavi.com
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-800">Donasi</h1>
            <button
              onClick={() => setShowDonationForm(false)}
              className="text-slate-500 hover:text-slate-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-600 mb-4">Pilih nominal donasi:</p>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {['25000', '50000', '100000'].map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleNominalSelect(amount)}
                  className={`py-3 rounded-lg border-2 font-medium transition-colors ${
                    nominal === amount
                      ? 'border-[#2E7D32] bg-[#f0f7f1] text-[#2E7D32]'
                      : 'border-slate-200 text-slate-600 hover:border-[#2E7D32]'
                  }`}
                >
                  Rp {parseInt(amount).toLocaleString('id-ID')}
                </button>
              ))}
            </div>

            <div className="mb-4">
              <label className="text-sm text-slate-600 mb-2 block">Atau masukkan nominal lain:</label>
              <input
                type="number"
                value={customNominal}
                onChange={(e) => handleCustomNominal(e.target.value)}
                placeholder="Masukkan nominal"
                className="w-full p-3 border border-slate-200 rounded-lg text-slate-600"
              />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-slate-600 mb-2 block">Nama *</label>
                <input
                  type="text"
                  required
                  value={formData.nama}
                  onChange={(e) => setFormData(prev => ({ ...prev, nama: e.target.value }))}
                  placeholder="Masukkan nama Anda"
                  className="w-full p-3 border border-slate-200 rounded-lg text-slate-600"
                />
              </div>

              <div>
                <label className="text-sm text-slate-600 mb-2 block">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Masukkan email Anda"
                  className="w-full p-3 border border-slate-200 rounded-lg text-slate-600"
                />
              </div>

              <div>
                <label className="text-sm text-slate-600 mb-2 block">No. Telp (Opsional)</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="Masukkan nomor telepon"
                  className="w-full p-3 border border-slate-200 rounded-lg text-slate-600"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || (!nominal && !customNominal) || !formData.nama || !formData.email}
                className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white h-12 rounded-xl font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                    Donasi Sekarang
                  </>
                )}
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  )
}

export default function InfoPage() {
  return (
    <Suspense fallback={
      <div className="p-4 space-y-6">
        <h1 className="text-2xl font-bold text-slate-800">Tentang Aplikasi</h1>
        <div className="bg-white rounded-lg border border-slate-200 p-4">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-slate-200 rounded w-1/2"></div>
            <div className="h-4 bg-slate-200 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    }>
      <InfoContent />
    </Suspense>
  )
}