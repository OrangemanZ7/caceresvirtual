import React, { Fragment } from 'react'

import Card from '../components/Card/Card'

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
        <div className='w3-display-middle  w3-center'>
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
        <div className='w3-center'>
          <div className='w3-col m6'>
            <img
              src='/img/caceres-1.jpg'
              style={{ width: '60%', height: 'auto', padding: '4px' }}
              className='w3-hover-opacity'
              alt='The mist over the mountains'
            />
          </div>

          <div className='w3-col m6'>
            <img
              src='/img/caceres-2.jpg'
              style={{ width: '60%', height: 'auto', padding: '4px' }}
              className='w3-hover-opacity'
              alt='Coffee beans'
            />
          </div>
        </div>
        <br />
        <div className='w3-center'>
          <div className='w3-col m6'>
            <img
              src='/img/caceres-3.jpg'
              style={{ width: '60%', height: 'auto', padding: '4px' }}
              className='w3-hover-opacity'
              alt='Bear closeup'
            />
          </div>

          <div className='w3-col m6'>
            <img
              src='/img/caceres-4.jpg'
              style={{ width: '60%', height: 'auto', padding: '4px' }}
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

      <div className='bgimg-4 w3-display-container w3-opacity-min' id='planos'>
        <div className='w3-display-middle w3-center'>
          <span className='w3-xxlarge w3-text-white w3-wide'>PLANOS</span>
        </div>
      </div>

      <div className='w3-content w3-container w3-padding-64'>
        <div className='w3-row-padding w3-center'>
          <div className='w3-col m4'>
            <Card
              imagem='planos-s.jpeg'
              icon1='fa fa-check'
              texto1='Página apresentação'
              icon2='fa fa-check'
              texto2='Exposição produtos'
              icon3='fa fa-check'
              texto3='Redes sociais'
              nome='START'
              preco='29,90'
              cor='blue'
            />
          </div>

          <div className='w3-col m4'>
            <Card
              imagem='planos-m.jpeg'
              icon1='fa fa-check'
              texto1='Plano START'
              icon2='fa fa-plus'
              texto2='Diretório produtos'
              icon3='fa fa-plus'
              texto3='Encomenda online'
              nome='MÉDIO'
              preco='59,90'
              cor='orange'
            />
          </div>

          <div className='w3-col m4'>
            <Card
              imagem='planos-g.jpeg'
              icon1='fa fa-check'
              texto1='Plano MÉDIO'
              icon2='fa fa-plus'
              texto2='Pagamento online'
              icon3='fa fa-plus'
              texto3='URL e E-mail'
              nome='GIGA'
              preco='99,90'
              cor='red'
            />
          </div>
        </div>
        <p className='w3-center' style={{ marginTop: '64px' }}>
          <em />
          Para outras opções entre em contato
          <em />
        </p>
      </div>

      <div className='bgimg-3 w3-display-container w3-opacity-min' id='contact'>
        <div className='w3-display-middle  w3-center'>
          <span className='w3-xxlarge w3-text-white w3-wide'>FALE CONOSCO</span>
        </div>
      </div>

      <div className='w3-content w3-container w3-padding'>
        <div className='w3-row w3-padding w3-section '>
          <div className='w3-col m4 w3-container'>
            <img
              src='/img/caceres-3.jpg'
              className='w3-image w3-round w3-hide-small'
              style={{ width: '100%', height: 'auto', marginTop: '16px' }}
              alt=''
            />
          </div>

          <div className='w3-col m8 w3-panel'>
            <div className='w3-large w3-margin-bottom'>
              <a href='https://www.google.com/maps/@-16.0643843,-57.6757311,21z'>
                <i className='fa fa-map-marker fa-fw  w3-hover-text-black w3-xlarge w3-margin-right'></i>{' '}
              </a>
              Cáceres, MT
              <br />
              <a href='tel:65996117368'>
                <i className='fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right'></i>{' '}
                (65) 99611-7368
              </a>
              <br />
              <a href='mailto:suporte@caceresvirtual.com.br'>
                <i className='fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right'></i>{' '}
                suporte@caceresvirtual
              </a>
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
