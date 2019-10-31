import React from 'react';
import { addBall, addStrike } from './Dashboard';

function Display() {
    return (
        <div>
            <h1>Current Batter</h1>
            <p>Ball Count: </p>
            <p>{addBall}</p>
            <p>Strike Count: </p>
            <p>{addStrike}</p>
        </div>
    )
}

export default Display;