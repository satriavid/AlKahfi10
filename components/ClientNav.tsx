'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

type Page = 'home' | 'learning' | 'motivation' | 'info'

export function ClientNav() {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState<Page>('home')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const page = params.get('page') as Page
    const donation = params.get('donation')
    
    if (donation === 'success') {
      setCurrentPage('info')
    } else if (page && ['home', 'learning', 'motivation', 'info'].includes(page)) {
      setCurrentPage(page)
    } else {
      setCurrentPage('home')
    }
  }, [])

  useEffect(() => {
    const handleNavigation = () => {
      const params = new URLSearchParams(window.location.search)
      const page = params.get('page') as Page
      const donation = params.get('donation')
      
      if (donation === 'success') {
        setCurrentPage('info')
      } else if (page && ['home', 'learning', 'motivation', 'info'].includes(page)) {
        setCurrentPage(page)
      } else {
        setCurrentPage('home')
      }
    }

    window.addEventListener('popstate', handleNavigation)
    return () => window.removeEventListener('popstate', handleNavigation)
  }, [])

  const handleNavigate = (page: Page) => {
    setCurrentPage(page)
    const url = page === 'home' ? '/' : `/?page=${page}`
    router.push(url)
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex justify-around items-center h-16 px-4 z-50">
      <button
        onClick={() => handleNavigate('home')}
        className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
          currentPage === 'home' ? 'text-[#2E7D32]' : 'text-slate-500'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        <span className="text-xs font-medium">Beranda</span>
      </button>
      <button
        onClick={() => handleNavigate('learning')}
        className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
          currentPage === 'learning' ? 'text-[#2E7D32]' : 'text-slate-500'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
        <span className="text-xs font-medium">Belajar</span>
      </button>
      <button
        onClick={() => handleNavigate('motivation')}
        className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
          currentPage === 'motivation' ? 'text-[#2E7D32]' : 'text-slate-500'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        <span className="text-xs font-medium">Motivasi</span>
      </button>
      <button
        onClick={() => handleNavigate('info')}
        className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
          currentPage === 'info' ? 'text-[#2E7D32]' : 'text-slate-500'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        <span className="text-xs font-medium">Info</span>
      </button>
    </nav>
  )
}