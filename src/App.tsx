import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { LearningPage } from './components/LearningPage';
import { MotivationPage } from './components/MotivationPage';
import { BookOpen, Home, Star } from 'lucide-react';

export type Page = 'home' | 'learning' | 'motivation';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'learning':
        return <LearningPage />;
      case 'motivation':
        return <MotivationPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans pb-16">
      <main className="flex-1 overflow-y-auto">
        {renderPage()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex justify-around items-center h-16 px-4 z-50">
        <button
          onClick={() => setCurrentPage('home')}
          className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
            currentPage === 'home' ? 'text-[#2E7D32]' : 'text-slate-500'
          }`}
        >
          <Home size={24} />
          <span className="text-xs font-medium">Beranda</span>
        </button>
        <button
          onClick={() => setCurrentPage('learning')}
          className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
            currentPage === 'learning' ? 'text-[#2E7D32]' : 'text-slate-500'
          }`}
        >
          <BookOpen size={24} />
          <span className="text-xs font-medium">Belajar</span>
        </button>
        <button
          onClick={() => setCurrentPage('motivation')}
          className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
            currentPage === 'motivation' ? 'text-[#2E7D32]' : 'text-slate-500'
          }`}
        >
          <Star size={24} />
          <span className="text-xs font-medium">Motivasi</span>
        </button>
      </nav>
    </div>
  );
}
