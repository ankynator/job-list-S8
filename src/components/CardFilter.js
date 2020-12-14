import React from 'react'

import Filter from './Filter'

import './styles/CardFilter.css'

class CardFilter extends React.Component {

  render() {
    return (
      <div className="CardFilter__container">
        <div className="CardFilter">
          <ul>
            {this.props.filters.map((filter, index) => {
              return (
                <li key={index}>
                  <Filter language={filter} onRemoveFilter={this.props.removeFilter} />
                </li>
              )
            })

            }
          </ul>
          <button className="CardFilter__clear">Clear</button>
        </div>
      </div>
    )
  }
}

export default CardFilter