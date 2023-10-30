import React from 'react'
import AdSection from '../components/AdSection'
import Categories from '../components/Categories'
import FeaturedProducts from '../components/FeaturedProducts'
import WhyUs from '../components/WhyUs'

const HomePage = () => {
  return (
    <>
      {/* Ad Section */}
      <AdSection />
      {/* Categories */}
      <Categories />
      {/* Featured Products */}
      <FeaturedProducts />  
      {/* why us */}
      <WhyUs />
    </>
  )
}

export default HomePage