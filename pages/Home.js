import React from "react";
import kitten from '../kitten.jpg';


export default function Home() {
    return (
        <div>
        <h1>So... you're getting a kitten.<br></br>What next?</h1>
        <img src={kitten} id="home-kitten" alt="kitten"></img>
        <div className="container"> <h3> Check out our <a href="./NewKitten" className="kitten-link">must haves</a> before getting a new kitten!</h3>
     </div>
    </div>
    )
}