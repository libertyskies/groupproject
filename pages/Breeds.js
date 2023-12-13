import React from 'react';
import '../Quiz.css';
import '../Gallery.css';
import Quiz from '../components/Quiz';
import Gallery from '../components/kittentype';
import '../styles.css';

export default function Breeds() {
    return (
     <div>
    <h1>Cat Breeds</h1>
    
        <div className='App'>
          <div className='Gallery'>
            <h2>Find the right breed for you</h2>
            <Gallery></Gallery>
          </div>
          <div className='Quiz'>
            <h2>Are you ready for your new kitten?</h2>
            <p> See how you score in our quiz!</p>
            <Quiz></Quiz>
          </div>
        </div>
        </div>
      );
    
}