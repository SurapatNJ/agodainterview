import React from 'react'
import Counter from './components/Counter'
import RandomUserApi from './components/RandomUserApi'
// import './style.css'

const App = () => {
  return (
    <div className="App">
      <h1>HELLO</h1>     
      {/* <Counter initialCount = {1} /> */}
      <RandomUserApi/>
    </div>
  )
}

export default App