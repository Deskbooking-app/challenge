import React from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * TODO
 * 1) Create a "Search" component
 * 2) Add a "debounce" for the search component
 * 3) (optionally, otherwise simply display JSON as text) Display the results on a list
 * 4) Assure that the list belongs to most recent query
 * 5) Indicate progress/ loading
 * 6) * Can we make progress/ loading indicator function more generic?
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
