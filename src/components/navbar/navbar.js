import './navbar.css';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react'

export default function navbar() {
  return (
    <div className='container'>
      <div className='left'>
        <img src='https://logowik.com/content/uploads/images/shop-app6999.jpg' alt='img'/>
      </div>
      <div className='center'>
        <ul>
          <li><Link to='/' className='link' >Home</Link></li>
          <li><Link to='/products' className='link'>Products</Link></li>
          <li><Link to='/contact' className='link'>Contact</Link></li>
        </ul>
      </div>
      <div className='right'>
        <ul>
            <li><Link to='/favourite' className='link'><FavoriteIcon className='icon' /></Link></li>
            <li><Link to='/cart' className='link'>
              <Badge badgeContent={4} className='badge' color="secondary" >
                <LocalMallIcon className='icon' />
              </Badge>
            </Link></li>
            <li><Link to='/login' className='link1'>login</Link></li>
            <li><Link to='/register' className='link2'>Register</Link></li>
            
        </ul>
      </div>
    </div>
  )
}
