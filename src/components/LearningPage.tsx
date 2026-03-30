import { useState, useEffect } from 'react';
import { ayahData } from '../data/ayahData';
import { AyahCard } from './AyahCard';
import { AudioPlayer } from './AudioPlayer';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';

export function LearningPage() {
  const [lastAyah, setLastAyah] = useLocalStorage('lastAyah', 1);
  const [completedAyahs, setCompletedAyahs] = useLocalStorage<number[]>('completedAyahs', []);
  
  const [currentAyahId, setCurrentAyahId] = useState(lastAyah);

  // Update lastAyah when currentAyahId changes
  useEffect(() => {
    setLastAyah(currentAyahId);
  }, [currentAyahId, setLastAyah]);

  const currentAyah = ayahData.find(a => a.id === currentAyahId) || ayahData[0];

  const handleNext = () => {
    if (currentAyahId < 10) {
      setCurrentAyahId(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentAyahId > 1) {
      setCurrentAyahId(prev => prev - 1);
    }
  };

  const toggleComplete = () => {
    if (completedAyahs.includes(currentAyahId)) {
      setCompletedAyahs(completedAyahs.filter(id => id !== currentAyahId));
    } else {
      setCompletedAyahs([...completedAyahs, currentAyahId]);
    }
  };

  const isCompleted = completedAyahs.includes(currentAyahId);

  return (
    <div className="flex flex-col h-full bg-slate-50">
      {/* Top Header / Ayah Selector */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 px-4 py-3 shadow-sm">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handlePrev} 
            disabled={currentAyahId === 1}
            className="text-slate-500 hover:text-[#2E7D32]"
          >
            <ChevronLeft size={24} />
          </Button>
          
          <div className="flex gap-1 overflow-x-auto hide-scrollbar px-2 py-1">
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

          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleNext} 
            disabled={currentAyahId === 10}
            className="text-slate-500 hover:text-[#2E7D32]"
          >
            <ChevronRight size={24} />
          </Button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-4 pb-24">
        <div className="max-w-md mx-auto space-y-6">
          
          <AyahCard ayah={currentAyah} />
          
          <AudioPlayer 
            audioUrls={currentAyah.audioUrls} 
            onEnded={() => {
              // Optional: Auto-play next or mark as complete
            }}
          />

          <Button
            onClick={toggleComplete}
            variant="outline"
            className={`w-full h-12 rounded-xl border-2 flex items-center justify-center gap-2 transition-colors ${
              isCompleted 
                ? 'bg-[#f0f7f1] border-[#2E7D32] text-[#2E7D32]' 
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <CheckCircle2 size={20} className={isCompleted ? 'text-[#2E7D32]' : 'text-slate-400'} />
            {isCompleted ? 'Sudah Dihafal' : 'Tandai Sudah Dihafal'}
          </Button>

        </div>
      </div>
    </div>
  );
}
