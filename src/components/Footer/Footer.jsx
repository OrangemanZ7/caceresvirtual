import React from 'react'

import './Footer.css'

const Footer = () => {
  return (
    <footer className='w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off'>
      <a href='#home' className='w3-button w3-light-grey'>
        <i className='fa fa-arrow-up w3-margin-right'></i>Para o Topo
      </a>
      <div className='w3-xlarge w3-section'>
        <a href='https://fb.me/caceresvirtual'>
          <i className='fa fa-facebook-official fa-2x w3-hover-opacity'></i>{' '}
        </a>
        <a href='https://wa.me/5565996117368'>
          <i className='fa fa-instagram fa-2x w3-hover-opacity'></i>{' '}
        </a>
        <a href='https://wa.me/5565996117368'>
          <i className='fa fa-whatsapp fa-2x w3-hover-opacity'></i>
        </a>{' '}
        <a href='https://wa.me/5565996117368'>
          <i className='fa fa-twitter fa-2x w3-hover-opacity'></i>{' '}
        </a>
        <a href='https://wa.me/5565996117368'>
          <i className='fa fa-linkedin fa-2x w3-hover-opacity'></i>
        </a>
      </div>
      <h4>caceresvirtual&reg; 2020</h4>
    </footer>
  )
}

export default Footer
