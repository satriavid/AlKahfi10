'use client'

import { useState } from 'react'
import { ayahData } from '@/data/ayahData'

interface AyahCardProps {
  ayah: typeof ayahData[0]
}

type Tab = 'translation' | 'word' | 'tadabbur'

export function AyahCard({ ayah }: AyahCardProps) {
  const [activeTab, setActiveTab] = useState<Tab>('translation')

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-6 bg-gradient-to-br from-white to-[#fdfbf7]">
        <div className="text-right mb-4">
          <span className="text-xs text-[#2E7D32] font-medium bg-[#f0f7f1] px-2 py-1 rounded">
            Ayat {ayah.id}
          </span>
        </div>
        
        <p className="text-3xl md:text-4xl font-arabic text-slate-800 text-right mb-6" style={{ lineHeight: '2', letterSpacing: '0.05em' }}>
          {ayah.arabic}
        </p>

        <div className="flex items-center justify-center bg-slate-100 p-1 rounded-xl h-12 mb-4">
          <button
            onClick={() => setActiveTab('translation')}
            className={`relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 border border-transparent px-1.5 py-0.5 whitespace-nowrap transition-all rounded-lg text-sm font-medium ${
              activeTab === 'translation'
                ? 'bg-white text-[#2E7D32] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Terjemahan
          </button>
          <button
            onClick={() => setActiveTab('word')}
            className={`relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 border border-transparent px-1.5 py-0.5 whitespace-nowrap transition-all rounded-lg text-sm font-medium ${
              activeTab === 'word'
                ? 'bg-white text-[#2E7D32] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Per Kata
          </button>
          <button
            onClick={() => setActiveTab('tadabbur')}
            className={`relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 border border-transparent px-1.5 py-0.5 whitespace-nowrap transition-all rounded-lg text-sm font-medium ${
              activeTab === 'tadabbur'
                ? 'bg-white text-[#2E7D32] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Tadabbur
          </button>
        </div>

        {activeTab === 'translation' && (
          <div className="border-t pt-3 border-slate-100">
            <p className="text-slate-600 text-sm leading-relaxed">
              {ayah.translation}
            </p>
          </div>
        )}

        {activeTab === 'word' && (
          <div className="border-t pt-3 border-slate-100">
            <div className="flex flex-wrap gap-x-4 gap-y-3 justify-start text-right" dir="rtl">
              {ayah.words.map((word, index) => (
                <div key={index} className="flex flex-col items-center min-w-[60px]">
                  <span className="font-arabic text-xl text-slate-800">{word.arabic}</span>
                  <span className="text-xs text-slate-500">{word.translation}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'tadabbur' && (
          <div className="mt-4 bg-white rounded-2xl p-5 shadow-sm border border-slate-100 min-h-[150px]">
            <div className="space-y-5">
              <div className="border-l-4 border-[#C8A951] pl-4 py-1">
                <h4 className="font-semibold text-[#2E7D32] text-sm mb-1">Tadabbur Singkat</h4>
                <p className="text-slate-700 leading-relaxed text-sm italic">
                  {ayah.tadabbur}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <h4 className="font-semibold text-[#2E7D32] text-sm mb-3 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>
                  Tafsir Ibnu Katsir
                </h4>
                <div className="bg-slate-50 p-4 rounded-xl text-sm text-slate-700 leading-relaxed max-h-60 overflow-y-auto shadow-inner border border-slate-100">
                  {ayah.tafsir}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}