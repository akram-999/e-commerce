import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import ProductsList from '../components/products/productsList'

export default function products() {
  return (
    <div>
      <Navbar/>
      <ProductsList/>
      <Footer />
    </div>
  )
}
