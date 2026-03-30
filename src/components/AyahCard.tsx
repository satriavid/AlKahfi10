import { Ayah } from '../data/ayahData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useState } from 'react';
import { BookOpen } from 'lucide-react';

interface AyahCardProps {
  ayah: Ayah;
}

export function AyahCard({ ayah }: AyahCardProps) {
  const [activeWord, setActiveWord] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      {/* Arabic Text */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mb-4">
        <div className="flex justify-between items-center mb-6">
          <span className="bg-[#f0f7f1] text-[#2E7D32] text-xs font-bold px-3 py-1 rounded-full">
            Ayat {ayah.id}
          </span>
        </div>
        
        <p dir="rtl" className="text-4xl leading-[2.5] font-arabic text-slate-900 text-right">
          {ayah.arabic}
        </p>
      </div>

      {/* Tabs for Meaning, Word-by-Word, Tadabbur */}
      <Tabs defaultValue="meaning" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-slate-100 p-1 rounded-xl h-12">
          <TabsTrigger value="meaning" className="rounded-lg text-sm font-medium data-active:bg-white data-active:text-[#2E7D32] data-active:shadow-sm">
            Terjemahan
          </TabsTrigger>
          <TabsTrigger value="words" className="rounded-lg text-sm font-medium data-active:bg-white data-active:text-[#2E7D32] data-active:shadow-sm">
            Per Kata
          </TabsTrigger>
          <TabsTrigger value="tadabbur" className="rounded-lg text-sm font-medium data-active:bg-white data-active:text-[#2E7D32] data-active:shadow-sm">
            Tadabbur
          </TabsTrigger>
        </TabsList>

        <div className="mt-4 bg-white rounded-2xl p-5 shadow-sm border border-slate-100 min-h-[150px]">
          <TabsContent value="meaning" className="mt-0 outline-none">
            <p className="text-slate-700 leading-relaxed text-sm md:text-base">
              {ayah.translation}
            </p>
          </TabsContent>

          <TabsContent value="words" className="mt-0 outline-none">
            <div className="flex flex-wrap gap-3 justify-end" dir="rtl">
              {ayah.words.map((word, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveWord(activeWord === idx ? null : idx)}
                  className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
                    activeWord === idx 
                      ? 'bg-[#f0f7f1] border border-[#2E7D32]/30' 
                      : 'hover:bg-slate-50 border border-transparent'
                  }`}
                >
                  <span className="text-2xl font-arabic text-slate-900 mb-2">{word.arabic}</span>
                  <span className={`text-xs text-center ${activeWord === idx ? 'text-[#2E7D32] font-medium' : 'text-slate-500'}`} dir="ltr">
                    {word.translation}
                  </span>
                </button>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tadabbur" className="mt-0 outline-none">
            <div className="space-y-5">
              <div className="border-l-4 border-[#C8A951] pl-4 py-1">
                <h4 className="font-semibold text-[#2E7D32] text-sm mb-1">Tadabbur Singkat</h4>
                <p className="text-slate-700 leading-relaxed text-sm italic">
                  {ayah.tadabbur}
                </p>
              </div>
              
              <div className="pt-4 border-t border-slate-100">
                <h4 className="font-semibold text-[#2E7D32] text-sm mb-3 flex items-center gap-2">
                  <BookOpen size={16} />
                  Tafsir Ibnu Katsir
                </h4>
                <div className="bg-slate-50 p-4 rounded-xl text-sm text-slate-700 leading-relaxed max-h-60 overflow-y-auto shadow-inner border border-slate-100">
                  {ayah.tafsir}
                </div>
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
