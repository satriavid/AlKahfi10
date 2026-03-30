import { Page } from '../App';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { PlayCircle, BookOpen } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [lastAyah] = useLocalStorage('lastAyah', 1);
  const [completedAyahs] = useLocalStorage<number[]>('completedAyahs', []);

  const progressPercentage = (completedAyahs.length / 10) * 100;

  return (
    <div className="p-6 space-y-8 max-w-md mx-auto">
      <header className="text-center pt-8 pb-4">
        <h1 className="text-3xl font-bold text-[#2E7D32] mb-2">Hafal Al-Kahfi 10</h1>
        <p className="text-slate-600">Hafalkan 10 ayat pertama Surah Al-Kahfi sebagai pelindung dari fitnah Dajjal.</p>
      </header>

      <Card className="border-[#C8A951]/30 shadow-sm bg-gradient-to-br from-white to-[#fdfbf7]">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-[#2E7D32] flex items-center gap-2">
            <BookOpen size={20} />
            Progress Hafalan
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium text-slate-700">{completedAyahs.length} dari 10 Ayat</span>
              <span className="text-[#C8A951] font-bold">{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} />
            {/* Note: We need to style the progress bar indicator in index.css or via tailwind */}
          </div>
          <p className="text-sm text-slate-500">
            Terakhir dibaca: Ayat {lastAyah}
          </p>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-4">
        <Button 
          onClick={() => onNavigate('learning')}
          className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white h-14 text-lg rounded-xl shadow-md flex items-center gap-2"
        >
          <PlayCircle size={24} />
          Mulai Hafalan
        </Button>
      </div>

      <div className="bg-[#f0f7f1] p-5 rounded-2xl border border-[#2E7D32]/10">
        <h3 className="font-semibold text-[#2E7D32] mb-2 text-sm uppercase tracking-wider">Hadits Motivasi</h3>
        <p className="text-slate-700 italic text-sm leading-relaxed">
          "Barangsiapa menghafal sepuluh ayat pertama dari surah Al-Kahfi, maka ia akan terlindungi dari (fitnah) Dajjal."
        </p>
        <p className="text-right text-xs text-slate-500 mt-2 font-medium">— HR. Muslim</p>
      </div>
    </div>
  );
}
