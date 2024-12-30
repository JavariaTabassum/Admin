import React from 'react'
import HeroSection from './HeroSection'
import NewArrivals from './NewArrivals'
import TopSelling from './TopSelling'
import BrowseByStyle from './BrowseByStyle'
import Testimonials from './Testimonials'

function Home() {
  return (
    <>
      <HeroSection />
      <NewArrivals />
      <TopSelling />
      <BrowseByStyle />
      <Testimonials />
    </>
  )
}

export default Home
