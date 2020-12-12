import React from 'react'

function Filter(props) {

  return (
    <div className="Filter">
      <div>
        {props.language}
      </div>
      <button onClick={props.onRemoveFilter} id={props.language}>X</button>
    </div>
    // <button onClick={props.onRemoveFilter} id={props.language}>{props.language}</button>
  )
}

export default Filter