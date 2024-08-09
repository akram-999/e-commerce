import React from 'react'
import Navbar from '../components/navbar/navbar'
import Hero from '../components/hero/hero'
import Banner from '../components/banner/banner'
import Products from '../components/products/products'
import Feature from '../components/feature/feature'
import Footer from '../components/footer/footer'

export default function home() {
  return (
    <div>
      <Banner/>
      <Navbar/>
      <Hero/>
      <Feature />
      <Products/>
      <Footer />

    </div>
  )
}
