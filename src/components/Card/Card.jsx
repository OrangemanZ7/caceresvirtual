import React from 'react'

import './Card.css'

const Card = (props) => {
  const { imagem, nome, preco, cor } = props
  return (
    <div className='card'>
      <img
        src={require(`../../assets/${imagem}`)}
        alt='logo'
        style={{ width: '100%' }}
      />
      <div className='conte'>
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
