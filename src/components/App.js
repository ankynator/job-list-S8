import React from 'react'

import ListCards from './ListCards'
import CardFilter from './CardFilter'

import './styles/App.css'

class App extends React.Component {

  state = {
    emptyFilters: true,
    filters: [],
    data: []
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    try {
      const response = await fetch('data.json')
      const data = await response.json()
      // console.log(data)
      this.setState({ data: data })
    } catch (error) {
      console.log(error)
    }
  }

  addFilters = (e) => {
    const filtersTemp = this.state.filters

    const toExists = filtersTemp.find((element) => {
      return element === e.target.id
    })

    if (!toExists) {
      filtersTemp.push(e.target.id)
    }

    this.setState({
      emptyFilters: false,
      filters: filtersTemp
    })
  }

  removeFilter = (e) => {
    const pos = this.state.filters.indexOf(e.target.id)
    const filtersTemp = this.state.filters
    filtersTemp.splice(pos, 1)


    this.setState({
      filters: filtersTemp
    })

    if (this.state.filters.length === 0) {
      this.setState({
        emptyFilters: true
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <header className="Header"></header>
        {!this.state.emptyFilters &&
          <CardFilter
            filters={this.state.filters}
            removeFilter={this.removeFilter}
          />
        }

        <main className="Main">
          <div className="Cards__container">
            <ListCards
              cards={this.state.data}
              addFilter={this.addFilters}
            />
          </div>
        </main>
      </React.Fragment>
    )
  }

}

export default App;
