import React from 'react';
import Counter from './components/Counter';

// Import Styles
import './app.css';

const App = () => {

  return (
    <div className='app'>
      <h1 className='main-title'>Counter App</h1>

      <div className="counter-wraper">
        <Counter />
      </div>
    </div>
  )
}

export default App
