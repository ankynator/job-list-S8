import React from 'react'

import Card from './Card'

function ListCards(props) {

  const cards = props.cards

  return (
    <ul>
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