import React, { useState } from 'react';
import earth from './earth.svg';
import smile from './smile.svg';
import sport from './sport.svg';
import science from './science.svg';
import dna from './dna.svg';
import microbe from './microbe.svg';
import brain from './brain-and-head.svg';
import './App.css';


// let index=0;

function App() {

  const [count, setCount] = useState(10);
  // let count = 10;
  function myOnClickCount(e) {
    // count++;
    console.log('we just clicked count', count);
    setCount(count + 1);

  }


  return (
    <div className="App">

      <div className="row clearfix">
        <div className="span_4 column"
        id="Compass">
          <img src={science} className="App-logo" alt="logo" />
        </div>
        <div className="span_4 column"
        id="Earth">
          <img src={earth} className="App-logo" alt="logo" />
        </div>
        <div className="span_4 column"
        id="Smile">
          <img src={smile} className="App-logo-reverse" alt="logo" />
        </div>
        <div className="span_4 column"
        id="Ball">
          <img src={sport} className="App-logo" alt="logo" />
        </div>
        <div onClick={myOnClickCount}className="span_4 column"
        id="DNA">
          <img src={dna} className="App-logo" alt="logo" />
        </div>
        <div onClick={myOnClickCount}className="span_4 column"
        id="Virus">
          <img src={microbe} className="App-logo" alt="logo" />
        </div>
        <div onClick={myOnClickCount}className="span_4 column"
        id="Brain">
          <img src={brain} className="App-logo-reverse" alt="logo" />
        </div>
      </div>

      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>


  );
}

export default App;
