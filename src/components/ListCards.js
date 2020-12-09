import React from 'react'

import Card from './Card'

import './styles/ListCards.css'

function ListCards(props) {

  const cards = props.cards

  return (
    <ul className="ListCard">
      {cards.map((card) => {
        return (
          <li key={card.id}>
            <Card card={card} />
          </li>
        )
      })

      }
    </ul>
  )

}

export default ListCards