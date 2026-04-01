'use client'

import { Suspense, useState, useEffect, use } from 'react'
import { useSearchParams } from 'next/navigation'
import { ayahData } from '@/data/ayahData'
import { AyahCard } from '@/components/AyahCard'
import { AudioPlayer } from '@/components/AudioPlayer'

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  })

  const setValue = (value: T) => {
    setStoredValue(value)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(value))
    }
  }

  return [storedValue, setValue]
}

function LearningContent() {
  const searchParams = useSearchParams()
  const [lastAyah, setLastAyah] = useLocalStorage('lastAyah', 1)
  const [completedAyahs, setCompletedAyahs] = useLocalStorage<number[]>('completedAyahs', [])
  
  const ayahParam = searchParams.get('ayah')
  const initialAyah = ayahParam ? parseInt(ayahParam) : lastAyah
  const [currentAyahId, setCurrentAyahId] = useState(initialAyah)

  useEffect(() => {
    setLastAyah(currentAyahId)
  }, [currentAyahId, setLastAyah])

  const currentAyah = ayahData.find(a => a.id === currentAyahId) || ayahData[0]

  const handleNext = () => {
    if (currentAyahId < 10) {
      setCurrentAyahId(prev => prev + 1)
    }
  }

  const handlePrev = () => {
    if (currentAyahId > 1) {
      setCurrentAyahId(prev => prev - 1)
    }
  }

  const toggleComplete = () => {
    if (completedAyahs.includes(currentAyahId)) {
      setCompletedAyahs(completedAyahs.filter(id => id !== currentAyahId))
    } else {
      setCompletedAyahs([...completedAyahs, currentAyahId])
    }
  }

  const isCompleted = completedAyahs.includes(currentAyahId)

  return (
    <div className="flex flex-col h-full bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 px-4 py-3 shadow-sm">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <button 
            onClick={handlePrev} 
            disabled={currentAyahId === 1}
            className={`p-2 ${currentAyahId === 1 ? 'text-slate-300' : 'text-slate-500 hover:text-[#2E7D32]'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          
          <div className="flex gap-1 overflow-x-auto px-2 py-1">
            {ayahData.map((ayah) => (
              <button
                key={ayah.id}
                onClick={() => setCurrentAyahId(ayah.id)}
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                  currentAyahId === ayah.id
                    ? 'bg-[#2E7D32] text-white shadow-md scale-110'
                    : completedAyahs.includes(ayah.id)
                    ? 'bg-[#f0f7f1] text-[#2E7D32] border border-[#2E7D32]/30'
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
              >
                {ayah.id}
              </button>
            ))}
          </div>

          <button 
            onClick={handleNext} 
            disabled={currentAyahId === 10}
            className={`p-2 ${currentAyahId === 10 ? 'text-slate-300' : 'text-slate-500 hover:text-[#2E7D32]'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        <div className="max-w-md mx-auto space-y-6">
          <AyahCard ayah={currentAyah} />
          
          <AudioPlayer 
            audioUrls={currentAyah.audioUrls} 
          />

          <div className="flex gap-3">
            <button
              onClick={toggleComplete}
              className={`flex-1 h-12 rounded-xl border-2 flex items-center justify-center gap-2 transition-colors ${
                isCompleted 
                  ? 'bg-[#f0f7f1] border-[#2E7D32] text-[#2E7D32]' 
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isCompleted ? 'text-[#2E7D32]' : 'text-slate-400'}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              {isCompleted ? 'Sudah Dihafal' : 'Tandai Sudah Hafal'}
            </button>
            <button
              onClick={handleNext}
              disabled={currentAyahId === 10}
              className="flex-1 h-12 rounded-xl bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-medium flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Lanjut
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LearningPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#2E7D32]"></div>
      </div>
    }>
      <LearningContent />
    </Suspense>
  )
}