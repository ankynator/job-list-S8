import React from 'react'

import './styles/Card.css'

function Card(props) {
  const card = props.card

  return (
    <div className="Card">
      <img className="Card__image" src={card.logo} alt="Logo company" />
      <div className="Card__companyAndfeatured">
        <h2>{card.company}</h2>
        {card.new && <div>New!</div>}
        {card.featured && <div>Featured</div>}
      </div>
      <h2 className="Card__title">{card.position}</h2>
      <div className="Card__time">
        <p>{card.postedAt}</p>
        <div className="Card__time-dot"></div>
        <p>{card.contract}</p>
        <div className="Card__time-dot"></div>
        <p>{card.location}</p>
      </div>
      <ul className="Card__tags">
        {/* languages */}
        {card.languages && card.languages.map((language, index) => {
          return (
            <li key={index}>
              <button id={language} onClick={props.onAddFilter}>{language}</button>
            </li>
          )
        })}
        {/* level */}
        <li>
          <button id={card.level} onClick={props.onAddFilter}>{card.level}</button>
        </li>
        {/* role */}
        <li>
          <button id={card.role} onClick={props.onAddFilter}>{card.role}</button>
        </li>
        {/* tools */}
        {card.tools && card.tools.map((tool, index) => {
          return (
            <li key={index}>
              <button id={tool} onClick={props.onAddFilter}>{tool}</button>
            </li>
          )
        })}
      </ul>

    </div>
  )
}

export default Card