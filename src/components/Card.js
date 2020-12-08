import React from 'react'

function Card(props) {
  const card = props.card
  return (
    <div>
      {`${card.id} ${card.company} | ${card.languages} | ${card.level} | ${card.role}`}
    </div>
  )
}

export default Card