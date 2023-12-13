import logo from './kittenpic.jpg';
import React from 'react';
import footer from './footer.jpg';
import './styles.css';
import { Nav } from './components/Nav';
import Breeds from './pages/Breeds';
import FAQ from './pages/FAQ';
import Home from './pages/Home';
import NewKitten from './pages/NewKitten';

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Home;
      break;
    case "/NewKitten":
      Component = NewKitten;
      break;
    case "/Breeds":
      Component = Breeds;
      break;
    case "/FAQ":
      Component = FAQ;
      break;
      default:
      Component = Home;
      break;
  }
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="header-pic" id="header-cat" alt="kitten"/>
        <div className="nav">
      <Nav /></div>
  <div className="component">
    <Component />
  </div> 
        <img src={footer} className="cat-footer" id="footer" alt="kitten" />
        
        </header>

    </div>
  );
}

export default App;
