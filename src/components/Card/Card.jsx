import React from 'react'

import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
      <img
        src={require(`../../assets/${props.imagem}`)}
        alt='logo'
        style={{ width: '100%' }}
      />
      <div className='conte'>
        <div className='title'>
          <b>{props.name}</b>
        </div>
        <div className='price'>R$ {props.preco}</div>
      </div>
    </div>
  )
}

export default Card
