import React from 'react'

import Card from './Card'

import './styles/ListCards.css'

function ListCards(props) {

  const cards = props.cards
  const filters = props.filters

  const resultCards = cards.filter((card) => {
    const tags = card.languages.concat(card.level, card.role, card.tools)
    return compare(tags, filters)
  })

  return (
    <ul className="ListCard">
      {resultCards.map((card) => {
        return (
          <li key={card.id}>
            <Card card={card} onAddFilter={props.addFilter} />
          </li>
        )
      })
      }
    </ul>
  )

}

function compare(arr1, arr2) {
  let count = 0

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] === arr1[i]) {
        count++
      }
    }
  }

  if (count !== arr2.length) {
    return false
  } else {
    return true
  }
}

export default ListCards