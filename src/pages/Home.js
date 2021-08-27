import React from 'react'
import { Container } from '@material-ui/core'
import bground from '../assets/images/me copy 2.png'
// import { BiPaint } from 'react-icons/bi'
// import { RiBracesFill } from 'react-icons/ri'
// import { BsMusicNoteBeamed } from 'react-icons/bs'
// import { FaRegLightbulb } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import './Home.css'
import './Page.css'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='bground'>
        <img src={bground} />
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
