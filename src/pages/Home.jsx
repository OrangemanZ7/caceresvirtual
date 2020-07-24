import React, { Fragment } from 'react'

import './Home.css'

//function onClick(element) {
//  document.getElementById('img01').src = element.src
//  document.getElementById('modal01').style.display = 'block'
//  var captionText = document.getElementById('caption')
//  captionText.innerHTML = element.alt
//}

const Home = () => {
  return (
    <Fragment>
      <div className='bgimg-1 w3-display-container w3-opacity-min' id='home'>
        <div className='w3-display-middle'>
          <span className='w3-xxlarge w3-text-white w3-wide'>
            CÁCERES VIRTUAL
          </span>
        </div>
      </div>

      <div className='w3-content w3-container w3-padding-64'>
        <p className='w3-center'>
          <em />
          Texto apresentação da finalidade do site
          <em />
        </p>
        <br />

        <div className='w3-row-padding w3-center w3-section'>
          <button
            className='w3-button w3-padding-large w3-light-grey'
            style={{ marginTop: '64px' }}
            onClick={(e) => {
              window.location.href = '#contact'
            }}
          >
            CONTATO
          </button>
        </div>
      </div>

      <div
        className='bgimg-2 w3-display-container w3-opacity-min'
        id='portfolio'
      >
        <div className='w3-display-middle w3-center'>
          <span className='w3-xxlarge w3-text-white w3-wide'>
            LOJAS VIRTUAIS
          </span>
        </div>
      </div>

      <div className='w3-content w3-container w3-padding-64'>
        <p className='w3-center'>
          <em />
          Em destaque
          <em />
        </p>
        <br />

        <div className='w3-row-padding w3-center'>
          <div className='w3-col m3'>
            <img
              src='/img/caceres-1.jpeg'
              style={{ width: '100%' }}
              className='w3-hover-opacity'
              alt='The mist over the mountains'
            />
          </div>

          <div className='w3-col m3'>
            <img
              src='/img/caceres-2.jpeg'
              style={{ width: '100%' }}
              className='w3-hover-opacity'
              alt='Coffee beans'
            />
          </div>

          <div className='w3-col m3'>
            <img
              src='/img/caceres-3.jpeg'
              style={{ width: '100%' }}
              className='w3-hover-opacity'
              alt='Bear closeup'
            />
          </div>

          <div className='w3-col m3'>
            <img
              src='/img/caceres-1.jpeg'
              style={{ width: '100%' }}
              className='w3-hover-opacity'
              alt='Quiet ocean'
            />
          </div>
        </div>

        <div className='w3-row-padding w3-center w3-section'>
          <button
            className='w3-button w3-padding-large w3-light-grey'
            style={{ marginTop: '64px' }}
          >
            VER MAIS
          </button>
        </div>
      </div>

      <div className='bgimg-3 w3-display-container w3-opacity-min' id='contact'>
        <div className='w3-display-middle'>
          <span className='w3-xxlarge w3-text-white w3-wide'>FALE CONOSCO</span>
        </div>
      </div>

      <div className='w3-content w3-container w3-padding-64'>
        <p className='w3-center'>
          <em>Entre em contato</em>
        </p>

        <div className='w3-row w3-padding-32 w3-section '>
          <div className='w3-col m4 w3-container'>
            <img
              src='/img/caceres-3.jpeg'
              className='w3-image w3-round w3-hide-small'
              style={{ width: 'auto', height: '270px' }}
              alt=''
            />
          </div>

          <div className='w3-col m8 w3-panel'>
            <div className='w3-large w3-margin-bottom'>
              <i className='fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right'></i>{' '}
              Cáceres, MT
              <br />
              <i className='fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right'></i>{' '}
              Celular: (65) 99611-7368
              <br />
              <i className='fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right'></i>{' '}
              Email: suporte@caceresvirtual.com.br
              <br />
            </div>

            <p>
              Passe por aqui para um <i className='fa fa-coffee'></i>, ou deixe
              um recado:
            </p>

            <form action='/action_page.php' target='_blank'>
              <div
                className='w3-row-padding'
                style={{ margin: '0 -16px 8px -16px' }}
              >
                <div className='w3-half'>
                  <input
                    className='w3-input w3-border'
                    type='text'
                    placeholder='Nome'
                    required
                    name='Name'
                  />
                </div>

                <div className='w3-half'>
                  <input
                    className='w3-input w3-border'
                    type='text'
                    placeholder='Email'
                    required
                    name='Email'
                  />
                </div>
              </div>

              <input
                className='w3-input w3-border'
                type='text'
                placeholder='Mensagem'
                required
                name='Message'
              />

              <button
                className='w3-button w3-black w3-right w3-section'
                type='submit'
              >
                <i className='fa fa-paper-plane'></i> ENVIAR MENSAGEM
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Home
