import React from 'react'

import './styles/App.css'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="Header"></header>
        <main className="Main">
          <div className="Filter">
            <div className="Filter__attributes"></div>
          </div>
          <div className="Cards__container">
            <ul className="Cards">

            </ul>
          </div>
        </main>
      </React.Fragment>
    )
  }

}

export default App;
