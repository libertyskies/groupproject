import { useState } from 'react';
import { kittenList } from '../data.js';

export default function Gallery() {
    const [index, setIndex] = useState(0);

    function handleNextClick() {
        if (hasNext) {
            setIndex(index + 1);
        }
        else {
            setIndex(1);
        }
    }

    function handlePrevClick() {
        if (hasPrev) {
            setIndex(index - 1);
        }
        else {
            setIndex((kittenList.length) - 1)
        }
    }


    let kitten = kittenList[index];
    let hasPrev = index > 0;
    let hasNext = index < kittenList.length - 1;


    return (
        <>
            <h6>({index + 1} of {kittenList.length})</h6>
            <h2>{kitten.name}</h2>
            <p>{kitten.description}</p>
            <img src={kitten.url} />
            <div className="gallery-btn"><button onClick={handlePrevClick}>Previous</button>
                <button className="gallery-btn" onClick={handleNextClick}>Next</button></div>
        </>
    );
}