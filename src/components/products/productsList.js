import React, { useState } from 'react'
import {Products} from './data'
import { Link } from 'react-router-dom'
import './products.css'

export default function ProductsList() {
  const [product,setProduct] = useState(Products)
  const filterProducts = (catPro) =>{
      const update = Products.filter((curPro)=>{
        return curPro.category === catPro
      })
      setProduct(update)
  }
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 dad">
        {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2> */}
        <div className='leftt'> 
          <h3 className=' cat'>Categories</h3>
          <ul className='ul2'>
            <li className='li'><button className='btt' type='button' onClick={()=>setProduct(Products)}>All Products</button></li>
            <li className='li'><button className='btt' type='button' onClick={()=>filterProducts("chemise")}>chemise</button></li>
            <li className='li'><button className='btt' type='button' onClick={()=>filterProducts("Shoes")}>Shoes</button></li>
            <li className='li'><button className='btt' type='button' onClick={()=>filterProducts("Jeans")}>Jeans</button></li>
            <li className='li'><button className='btt' type='button' onClick={()=>filterProducts("shirt")}>shirt</button></li>
          </ul>

        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 rightt">
          {product.map((productt) => (
            <div key={productt.id} className="group relative ">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none  lg:h-80 div">
                <ul className='ul '>
                    <li><Link to="/cart" className='link'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                      </svg>
                      </Link>
                    </li>
                    <li><Link to="/favourite" className='link'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                      </Link>
                    </li>
                    <li><Link to="/product/:id" className='link'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                      </Link>
                    </li>
                </ul>
                <img
                  alt={productt.imageAlt}
                  src={productt.imageSrc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={productt.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {productt.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{productt.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{productt.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
