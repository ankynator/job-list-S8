import React from 'react'

import './styles/Card.css'

function Card(props) {
  const card = props.card

  return (
    <div className="Card">
      <img src={card.logo} alt="Logo company" />
      <div className="Card__company&featured">
        <h2>{card.company}</h2>
        {card.new && <p>New!</p>}
        {card.featured && <p>Featured</p>}
      </div>
      <h1 className="Card__position">{card.position}</h1>
      <ul className="Card__tags">
        {card.languages && card.languages.map((language, index) => {
          return (
            <li key={index}>
              <button id={language} onClick={props.onAddFilter}>{language}</button>
            </li>
          )
        })}
      </ul>

    </div>
  )
}

export default Card