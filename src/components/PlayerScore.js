import React, { useState } from 'react';

const PlayerScore = (props) => {

    const handleAdd = () => {

        const newScore = props.score + 1
        props.handleScore(newScore)
    }

    const handleSubtract = () => {
        let newScore = props.score
        if (props.score - 1 >= 0) {
            newScore = props.score - 1
        }
        props.handleScore(newScore)
    }

    return (
        <div>
            <h2>{props.name}</h2>
            <h3>{props.score}</h3>
            <div>
                <button onClick={handleAdd}>+</button>
                <button onClick={handleSubtract}>-</button>
            </div>
        </div>
    )

}

export default PlayerScore