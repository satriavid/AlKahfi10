import { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCw, Volume2 } from 'lucide-react';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface AudioPlayerProps {
  audioUrls: {
    mishary: string;
    sudais: string;
  };
  onEnded?: () => void;
}

export function AudioPlayer({ audioUrls, onEnded }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [reciter, setReciter] = useState<'mishary' | 'sudais'>('mishary');
  const [speed, setSpeed] = useState(1);
  const [isLooping, setIsLooping] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Reset playing state when audio url changes (ayah changes)
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.src = audioUrls[reciter];
      audioRef.current.load();
    }
  }, [audioUrls, reciter]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  }, [speed]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = isLooping;
    }
  }, [isLooping]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error("Audio play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleEnded = () => {
    if (!isLooping) {
      setIsPlaying(false);
      if (onEnded) onEnded();
    }
  };

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col gap-4">
      <audio 
        ref={audioRef} 
        onEnded={handleEnded}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />
      
      <div className="flex items-center justify-between">
        <Button 
          onClick={togglePlay}
          className="h-14 w-14 rounded-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white flex items-center justify-center shadow-md"
        >
          {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" className="ml-1" />}
        </Button>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsLooping(!isLooping)}
            className={`h-10 px-3 border-slate-200 ${isLooping ? 'bg-[#f0f7f1] text-[#2E7D32] border-[#2E7D32]/30' : 'text-slate-500'}`}
          >
            <RotateCw size={18} className={isLooping ? 'animate-spin-slow' : ''} />
          </Button>

          <Select value={speed.toString()} onValueChange={(v) => setSpeed(parseFloat(v))}>
            <SelectTrigger className="w-[80px] h-10 border-slate-200 text-slate-600">
              <SelectValue placeholder="Speed" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0.5">0.5x</SelectItem>
              <SelectItem value="1">1x</SelectItem>
              <SelectItem value="1.25">1.25x</SelectItem>
              <SelectItem value="1.5">1.5x</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
        <Volume2 size={16} className="text-slate-400" />
        <Select value={reciter} onValueChange={(v: 'mishary' | 'sudais') => setReciter(v)}>
          <SelectTrigger className="flex-1 h-9 border-none bg-slate-50 text-slate-600 text-sm">
            <SelectValue placeholder="Pilih Qari" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mishary">Mishary Rashid Alafasy</SelectItem>
            <SelectItem value="sudais">Abdurrahman As-Sudais</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
