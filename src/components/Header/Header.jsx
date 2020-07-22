import React from 'react'

import { ReactComponent as Logo } from '../../assets/logo.svg'

import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <Logo className='logo' />
      <h1>Cáceres Virtual</h1>
    </div>
  )
}

export default Header
