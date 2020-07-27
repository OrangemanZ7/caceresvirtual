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
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <a href='#portfolio'>
              <i className='fa fa-arrow-circle-o-down fa-2x'></i>
            </a>
          </span>
        </div>
      </div>

      <div className='w3-content w3-container w3-padding-64'>
        <p className='w3-center'>
          <h1>
            Tenha o seu negócio ou serviço divulgado na internet, para cada caso
            temos uma solução para o seu negócio.
          </h1>
        </p>
        <br />
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
        <div className='w3-row w3-center'>
          <div className='w3-col m6 w3-padding'>
            <Card
              imagem='comida.jpeg'
              icon1=''
              texto1=''
              icon2=''
              texto2=''
              icon3=''
              texto3=''
              nome='Alimentação'
              preco=''
              cor='grey'
            />
          </div>

          <div className='w3-col m6 w3-padding'>
            <Card
              imagem='roupas.jpeg'
              icon1=''
              texto1=''
              icon2=''
              texto2=''
              icon3=''
              texto3=''
              nome='Vestuário'
              preco=''
              cor='gray'
            />
          </div>
        </div>
        <div className='w3-row w3-center'>
          <div className='w3-col m6 w3-padding'>
            <Card
              imagem='servicos.jpeg'
              icon1=''
              texto1=''
              icon2=''
              texto2=''
              icon3=''
              texto3=''
              nome='Serviços'
              preco=''
              cor='gray'
            />
          </div>

          <div className='w3-col m6 w3-padding'>
            <Card
              imagem='supermercado.jpeg'
              icon1=''
              texto1=''
              icon2=''
              texto2=''
              icon3=''
              texto3=''
              nome='Supermercados'
              preco=''
              cor='gray'
            />
          </div>
        </div>
      </div>

      <div className='bgimg-4 w3-display-container w3-opacity-min' id='planos'>
        <div className='w3-display-middle w3-center'>
          <span className='w3-xxlarge w3-text-white w3-wide'>PLANOS</span>
        </div>
      </div>

      <div className='w3-content w3-container w3-padding-64'>
        <div className='w3-row-padding w3-center'>
          <div className='w3-col m4 w3-padding'>
            <Card
              imagem='planos-s.jpeg'
              icon1='fa fa-check'
              texto1='Página apresentação'
              icon2='fa fa-check'
              texto2='Exposição produtos'
              icon3='fa fa-check'
              texto3='Redes sociais'
              nome='START'
              preco='19,90'
              cor='blue'
            />
          </div>

          <div className='w3-col m4 w3-padding'>
            <Card
              imagem='planos-m.jpeg'
              icon1='fa fa-check'
              texto1='Plano START'
              icon2='fa fa-plus'
              texto2='Diretório produtos'
              icon3='fa fa-plus'
              texto3='Encomenda online'
              nome='MÉDIO'
              preco='49,90'
              cor='orange'
            />
          </div>

          <div className='w3-col m4 w3-padding'>
            <Card
              imagem='planos-g.jpeg'
              icon1='fa fa-check'
              texto1='Plano MÉDIO'
              icon2='fa fa-plus'
              texto2='Pagamento online'
              icon3='fa fa-plus'
              texto3='URL e E-mail'
              nome='GIGA'
              preco='89,90'
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
        <div className='w3-row w3-section '>
          <div className='w3-col m4 w3-container'>
            <img
              src='/img/caceres-1.jpg'
              className='w3-image w3-round w3-hide-small'
              style={{ width: '75%', height: 'auto', marginTop: '16px' }}
              alt=''
            />
          </div>

          <div className='w3-col m8 w3-panel'>
            <div className='w3-large w3-margin-bottom'>
              <a href='https://www.google.com/maps/@-16.0643843,-57.6757311,21z'>
                <i className='fa fa-map-marker fa-fw  w3-hover-text-black w3-xlarge w3-margin-right'></i>
              </a>
              Cáceres, MT
              <br />
              <br />
              <a href='tel:65996117368'>
                <i className='fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right'></i>
                (65) 99611-7368
              </a>
              <br />
              <br />
              <a href='mailto:suporte@caceresvirtual.com.br'>
                <i className='fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right'></i>
                suporte@caceresvirtual.com.br
              </a>
              <br />
            </div>

            <p>
              Passe por aqui para um <i className='fa fa-coffee'></i>, ou deixe
              um recado...
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Home
