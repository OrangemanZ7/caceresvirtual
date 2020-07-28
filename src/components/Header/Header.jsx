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
          className='w3-bar-item w3-button w3-hover-grey w3-hide-large w3-right w3-text-black'
          href='/'
          title='Toggle Navigation Menu'
          onClick={(e) => toggleFunction(e)}
        >
          <i className='fa fa-bars'></i>
        </a>
        <a href='#home' className='w3-bar-item w3-button w3-text-black'>
          <i className='fa fa-home'></i>
        </a>
        <a
          href='#portfolio'
          className='w3-bar-item w3-button w3-hide-small w3-text-black'
        >
          <i className='fa fa-th'></i> LOJAS
        </a>
        <a
          href='#planos'
          className='w3-bar-item w3-button w3-hide-small w3-text-black'
        >
          <i className='fa fa-usd'></i> PLANOS
        </a>
        <a
          href='#contact'
          className='w3-bar-item w3-button w3-hide-small w3-text-black'
        >
          <i className='fa fa-envelope'></i> CONTATO
        </a>
      </div>
      <div
        id='navDemo'
        className='w3-bar-block w3-grey w3-hide w3-hide-large w3-hide-medium w3-center'
        style={{ opacity: '0.9', fontWeight: 'bolder' }}
      >
        <a
          href='#portfolio'
          className='w3-bar-item w3-button'
          onClick={(e) => {
            window.location.href = '#portfolio'
            toggleFunction(e)
          }}
        >
          <br />
          LOJAS VIRTUAIS
        </a>
        <hr />
        <a
          href='#planos'
          className='w3-bar-item w3-button'
          onClick={(e) => {
            window.location.href = '#planos'
            toggleFunction(e)
          }}
        >
          PLANOS
        </a>
        <hr />
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
        <br />
      </div>
    </div>
  )
}
export default Header
