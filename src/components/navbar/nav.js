import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
  const [isClick,setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  }

  return (
    <nav className='p-6'>
      <div className='flex item-center justify-between'>
            <div>
                <img src='https://logowik.com/content/uploads/images/shop-app6999.jpg' className='h-12' alt='img'/>
            </div>
            <div className='hidden md:flex  space-x-11 items-center '>
                <Link to='/' className='text-violet-600 hover:text-violet-300 decoration-transparent'>Home</Link>
                <Link to='/products' className='text-violet-600 hover:text-violet-300 decoration-transparent '>Products</Link>
                <Link to='/contact' className='text-violet-600 hover:text-violet-300 decoration-transparent '>Contact</Link>
            </div>
            <div className='flex space-x-6 items-center '>
                <Link to='/cart' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6  text-black">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                 </Link>
                <Link to='/login' className=' bg-violet-600 hover:bg-violet-300 py-2 px-4 text-white decoration-transparent '>login</Link>
                <button className='md:hidden' onClick={toggleNavbar}>
                  {isClick ? (
                    
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                      ): 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                  }
                </button>
            </div>
            
      </div>
      {isClick && (
              <div className='md:hidden p-3 mt-2 bg-violet-600 rounded'>
                
                  <Link to='/' className='text-white block p-1 decoration-transparent '>Home</Link>
                  <Link to='/products' className='text-white block p-1 decoration-transparent '>Products</Link>
                  <Link to='/contact' className='text-white block p-1 decoration-transparent '>Contact</Link>
                  
              </div>
            )}
    </nav>
  )
}
