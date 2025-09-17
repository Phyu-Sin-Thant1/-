import React from 'react'
import Header from '../components/Header'
import SearchHero from '../components/SearchHero'
import ServiceGrid from '../components/ServiceGrid'
import MarketFeed from '../components/MarketFeed'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-dabang-background">
      <Header />
      <SearchHero />
      <ServiceGrid />
      <MarketFeed />
      <Footer />
    </div>
  )
}

export default HomePage