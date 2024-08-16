import React from 'react'
import Navbar from '../components/navbar/navbar'
import ProductDetail from '../components/products/productDetail'
import Footer from '../components/footer/footer'

export default function product() {
  return (
    <div>
       <Navbar/>
       <ProductDetail/>
       <Footer />
    </div>
  )
}
