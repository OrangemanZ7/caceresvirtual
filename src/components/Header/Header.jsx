import React from 'react'

//import { ReactComponent as Logo } from '../../assets/logo.svg'

import './Header.css'

const toggleFunction = (e) => {
  e.preventDefault()
  var x = document.getElementById('navDemo')
  if (x.className.indexOf('w3-show') === -1) {
    x.className += ' w3-show'
  } else {
    x.className = x.className.replace(' w3-show', '')
  }
}

const Header = () => {
  return (
    <div className='w3-top'>
      <div className='w3-bar' id='myNavbar'>
        <a
          className='w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right'
          href='/'
          title='Toggle Navigation Menu'
          onClick={(e) => toggleFunction(e)}
        >
          <i className='fa fa-bars'></i>
        </a>
        <a href='#home' className='w3-bar-item w3-button'>
          <i className='fa fa-home'></i>
        </a>
        <a href='#portfolio' className='w3-bar-item w3-button w3-hide-small'>
          <i className='fa fa-th'></i> PORTFOLIO
        </a>
        <a href='#contact' className='w3-bar-item w3-button w3-hide-small'>
          <i className='fa fa-envelope'></i> CONTATO
        </a>
      </div>
      <div
        id='navDemo'
        className='w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium'
      >
        <a
          href='#portfolio'
          className='w3-bar-item w3-button'
          onClick={(e) => {
            window.location.href = '#portfolio'
            toggleFunction(e)
          }}
        >
          PORTFOLIO
        </a>
        <a
          href='#contact'
          className='w3-bar-item w3-button'
          onClick={(e) => {
            window.location.href = '#contact'
            toggleFunction(e)
          }}
        >
          CONTATO
        </a>
      </div>
    </div>
  )
}
export default Header
