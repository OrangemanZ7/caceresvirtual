import React, { Fragment } from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Home from '../../pages/Home'

import './Body.css'

const Body = () => {
  return (
    <Fragment>
      <Header />
      <Home />
      <Footer />
    </Fragment>
  )
}

export default Body
