import logo from './cateyes.webp';
import img1 from './cat1.jpg';
import React from 'react';
import img from './cat2.jpg';
import './App.css';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>New Kitten Checklist</h1>
       <div>
        <List></List>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Congratulations on a new kitten!
        </p>
        <img src={img1} className="cat-pic" id="left-cat" alt="cat" />
        <div class="container">
          <div class="item"><a>Home</a></div>
          <div class="item"><a>Cat Match</a></div>
          <div class="item"><a>FAQ</a></div>
        </div>
        <br></br>
        <img src={img} className="cat-pic" id="right-cat" alt="cat" />
        <a
          className="rspca"
          href="https://www.rspca.org.uk/adviceandwelfare/pets/cats"
          target="_blank"
          rel="noopener noreferrer"
        >
         How to look after a cat
        </a>
      </header>
    </div>
  );
}

export default App;
