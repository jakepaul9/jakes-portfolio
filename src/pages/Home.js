import React from 'react'
import bground from '../assets/images/me.png'
import { Link } from 'react-router-dom'

import './Home.css'
import './Page.css'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='bground'>
        <img alt='me' src={bground} />
      </div>
      <div className='home-nav'>
        <Link to='/about'>me</Link>
        <Link to='/code'>code </Link>
        <Link to='/design'>design </Link>
        <Link to='/music'>music </Link>
      </div>
    </div>
  )
}

export default Home
