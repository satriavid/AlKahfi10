'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()
  const [lastAyah] = useState(1)
  const [completedAyahs] = useState<number[]>([])

  const progressPercentage = (completedAyahs.length / 10) * 100

  const navigateTo = (page: string) => {
    router.push(`/?page=${page}`)
  }

  return (
    <div className="p-6 space-y-8 max-w-md mx-auto">
      <header className="text-center pt-8 pb-4">
        <h1 className="text-3xl font-bold text-[#2E7D32] mb-2">Hafal Al-Kahfi 10</h1>
        <p className="text-slate-600">Hafalkan 10 ayat pertama Surah Al-Kahfi sebagai pelindung dari fitnah Dajjal.</p>
      </header>

      <div className="bg-white rounded-xl border border-[#C8A951]/30 shadow-sm p-4">
        <div className="mb-2 flex justify-between text-sm">
          <span className="font-medium text-slate-700">{completedAyahs.length} dari 10 Ayat</span>
          <span className="text-[#C8A951] font-bold">{Math.round(progressPercentage)}%</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div 
            className="bg-[#C8A951] h-2 rounded-full transition-all"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <p className="text-sm text-slate-500 mt-3">
          Terakhir dibaca: Ayat {lastAyah}
        </p>
      </div>

      <button 
        onClick={() => navigateTo('learning')}
        className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white h-14 text-lg rounded-xl shadow-md flex items-center justify-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
        Mulai Hafalan
      </button>

      <div className="bg-[#f0f7f1] p-5 rounded-2xl border border-[#2E7D32]/10">
        <h3 className="font-semibold text-[#2E7D32] mb-2 text-sm uppercase tracking-wider">Hadits Motivasi</h3>
        <p className="text-slate-700 italic text-sm leading-relaxed">
          "Barangsiapa menghafal sepuluh ayat pertama dari surah Al-Kahfi, maka ia akan terlindungi dari (fitnah) Dajjal."
        </p>
        <p className="text-right text-xs text-slate-500 mt-2 font-medium">— HR. Muslim</p>
      </div>
    </div>
  )
}