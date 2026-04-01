'use client'

import { useState, useEffect } from 'react'
import HomePage from './home/page'
import LearningPage from './learning/page'
import MotivationPage from './motivation/page'
import InfoPage from './info/page'
import { ClientNav } from '@/components/ClientNav'

function PageContent() {
  const [page, setPage] = useState<string>('home')
  const [donationSuccess, setDonationSuccess] = useState(false)
  const [key, setKey] = useState(0)

  useEffect(() => {
    const handleNavigation = () => {
      const params = new URLSearchParams(window.location.search)
      const pageParam = params.get('page')
      const donation = params.get('donation')
      
      if (donation === 'success') {
        setDonationSuccess(true)
        setPage('info')
      } else if (pageParam) {
        setPage(pageParam)
      } else {
        setPage('home')
      }
    }

    handleNavigation()

    window.addEventListener('popstate', handleNavigation)
    
    const originalPushState = window.history.pushState
    window.history.pushState = function(...args) {
      originalPushState.apply(window.history, args)
      handleNavigation()
    }

    return () => {
      window.removeEventListener('popstate', handleNavigation)
      window.history.pushState = originalPushState
    }
  }, [key])

  if (donationSuccess) {
    return <InfoPage />
  }

  switch (page) {
    case 'learning':
      return <LearningPage />
    case 'motivation':
      return <MotivationPage />
    case 'info':
      return <InfoPage />
    default:
      return <HomePage />
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pb-16">
      <PageContent />
      <ClientNav />
    </div>
  )
}