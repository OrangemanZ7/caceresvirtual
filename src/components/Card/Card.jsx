import React from 'react'

import './Card.css'

const Card = (props) => {
  const {
    imagem,
    nome,
    preco,
    cor,
    icon1,
    texto1,
    icon2,
    texto2,
    icon3,
    texto3,
  } = props
  return (
    <div className='card'>
      <img
        src={require(`../../assets/${imagem}`)}
        alt='logo'
        style={{ width: '100%' }}
      />
      <div className='conte'>
        <div>
          <h3>
            <i className={icon1} /> {texto1}
          </h3>
          <h3>
            <i className={icon2} /> {texto2}
          </h3>
          <h3>
            <i className={icon3} /> {texto3}
          </h3>
        </div>
        <hr />

        <div className='title' style={{ color: `${cor}` }}>
          <b>{nome}</b>
        </div>
        <div className='price' style={{ color: `${cor}` }}>
          {' '}
          R$ {preco}/mês
        </div>
      </div>
    </div>
  )
}

export default Card
