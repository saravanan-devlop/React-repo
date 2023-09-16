import React from 'react';
import { Menu } from '../menu/menu';
export function Cards()

{
return(
    <>
    <Menu/>
    <div class='card-bg'>
        <h1>Congratulations</h1>
        <div class='card-div'>
            <div>
            <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'/></div>
            <h3>Kiran V</h3>
            <p>Vishnu Institute of computer Education and Technology, Bhimavaram</p>
            <div>
            <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'/></div>
        </div>
    </div>
    </>
);
}