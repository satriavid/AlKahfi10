'use client'

import { useState, useEffect, useRef } from 'react'

interface AudioPlayerProps {
  audioUrls: {
    mishary: string
    sudais: string
  }
  onEnded?: () => void
}

export function AudioPlayer({ audioUrls, onEnded }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [reciter, setReciter] = useState<'mishary' | 'sudais'>('mishary')
  const [speed, setSpeed] = useState(1)
  const [isLooping, setIsLooping] = useState(false)
  
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    setIsPlaying(false)
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      audioRef.current.src = audioUrls[reciter]
      audioRef.current.load()
    }
  }, [audioUrls, reciter])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = speed
    }
  }, [speed])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = isLooping
    }
  }, [isLooping])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(e => console.error("Audio play failed:", e))
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleEnded = () => {
    if (!isLooping) {
      setIsPlaying(false)
      if (onEnded) onEnded()
    }
  }

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
      <audio 
        ref={audioRef} 
        onEnded={handleEnded}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />
      
      <div className="flex items-center justify-between">
        <button 
          onClick={togglePlay}
          className="h-14 w-14 rounded-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white flex items-center justify-center shadow-md"
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          )}
        </button>

        <div className="flex gap-2">
          <button
            onClick={() => setIsLooping(!isLooping)}
            className={`h-10 px-3 rounded-lg border ${isLooping ? 'bg-[#f0f7f1] text-[#2E7D32] border-[#2E7D32]/30' : 'border-slate-200 text-slate-500'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isLooping ? 'animate-spin' : ''}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
          </button>

          <select
            value={speed}
            onChange={(e) => setSpeed(parseFloat(e.target.value))}
            className="h-10 px-2 border border-slate-200 rounded-lg text-slate-600"
          >
            <option value="0.5">0.5x</option>
            <option value="0.75">0.75x</option>
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="1.5">1.5x</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-2 pt-3 mt-3 border-t border-slate-100">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
        <select
          value={reciter}
          onChange={(e) => setReciter(e.target.value as 'mishary' | 'sudais')}
          className="flex-1 h-9 bg-slate-50 border-none text-slate-600 text-sm rounded px-2"
        >
          <option value="mishary">Mishary Rashid Alafasy</option>
          <option value="sudais">Abdurrahman As-Sudais</option>
        </select>
      </div>
    </div>
  )
}