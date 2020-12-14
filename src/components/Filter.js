import React from 'react'

import './styles/Filter.css'

function Filter(props) {

  return (
    <div className="Filter">
      <div>
        {props.language}
      </div>
      <button onClick={props.onRemoveFilter} id={props.language}></button>
    </div>
    // <button onClick={props.onRemoveFilter} id={props.language}>{props.language}</button>
  )
}

export default Filter