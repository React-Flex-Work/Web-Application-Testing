import React from 'react';

export const addBall = currentBalls => {
    if (currentBalls >= 3) {
        return 0;
    } else {
        return currentBalls + 1;
    }
};

export const addStrike = currentStrikes => {
    if (currentStrikes >= 2) {
        return 0;
    } else {
        return currentStrikes + 1;
    }
};

export const addFoul = currentStrikes => {
    if (currentStrikes >= 2) {
        return currentStrikes;
    } else {
        return currentStrikes + 1;
    }
}

export const addHit = currentValue => {
    return currentValue;
}

export default function Dashboard() {

    return (
        <>
            <button onClick={() => setBall(addBall(ball))}>Ball</button>
            <button onClick={() => setStrike(addStrike(strike))}>Strike</button>
            <button onClick={() => setStrike(addFoul(strike))}>Foul</button>
            <button onClick={() => (addHit(strike), setBall(addHit(ball)))}>Hit</button>
        </>
    );
}