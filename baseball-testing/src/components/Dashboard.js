import React, { useState } from 'react';
import Display from './Display';


export default function Dashboard() {
    const [ball, setBall] = useState(0);
    const [strike, setStrike] = useState(0);

    const handleBalls = () => {
        if (ball + 1 === 4) {
            setBall(0)
            setStrike(0)
        } else {
            setBall(ball + 1)
        }
    }

    const handleStrikes = () => {
        if (strike + 1 === 3) {
            setBall(0)
            setStrike(0)
        } else {
            setStrike(strike + 1)
        }
    }

    const handleHit = () => {
        setBall(0)
        setStrike(0)
    }

    const handleFoul = () => {
        if (strike <= 1) {
            setStrike(strike + 1)
        }
    }
    return (
        <>
            <Display ball={ball} strike={strike} />
            <button onClick={handleBalls}>Ball</button>
            <button onClick={handleStrikes}>Strike</button>
            <button onClick={handleHit}>Hit</button>
            <button onClick={handleFoul}>Foul</button>
        </>
    );
}