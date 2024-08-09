import React from 'react'
import Navbar from '../components/navbar/navbar'
import Hero from '../components/hero/hero'
import Banner from '../components/banner/banner'
import Products from '../components/products/products'
import Feature from '../components/feature/feature'

export default function home() {
  return (
    <div>
      <Banner/>
      <Navbar/>
      <Hero/>
      <Products/>
      <Feature />

    </div>
  )
}
