import React from 'react'

import ListCards from './ListCards'

import './styles/App.css'

class App extends React.Component {

  state = {
    data: []
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {

    try {
      const response = await fetch('data.json')
      const data = await response.json()
      console.log(data)
      this.setState({ data: data })
    } catch (error) {
      console.log(error)
    }

  }

  render() {
    return (
      <React.Fragment>
        <header className="Header"></header>
        <main className="Main">
          <div className="Filter">
            <div className="Filter__attributes"></div>
          </div>
          <div className="Cards__container">
            <ListCards cards={this.state.data} />
          </div>
        </main>
      </React.Fragment>
    )
  }

}

export default App;
