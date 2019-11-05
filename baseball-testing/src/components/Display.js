import React from 'react';

function Display({ ball, strike }) {
    return (
        <div>
            <h1>Current Batter</h1>
            <p>Ball Count: {ball}</p>
            <p>Strike Count: {strike}</p>
        </div>
    )
}

export default Display;