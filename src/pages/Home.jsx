import React from 'react'

import './Home.css'

import Header from '../components/Header/Header'
import Body from '../components/Body/Body'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Header />

      <Body />

      <Footer />
    </div>
  )
}

export default Home
