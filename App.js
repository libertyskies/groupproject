import logo from './cateyes.webp';
import img1 from './cat1.jpg';
import img from './cat2.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pet Match</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         What pet should you get?
        </p>
        <img src={img1} className="cat-pic" id="left-cat" alt="cat" />
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
