import React, { useState } from 'react';

import PlayerScore from "./PlayerScore"

const Scoreboard = (props) => {
    const [winner, setWinner] = useState("")
    const [playerOneScore, setPlayerOneScore] = useState(0)
    const [playerTwoScore, setPlayerTwoScore] = useState(0)
    const [server, setServer] = useState(props.server)

    // TODO find out how hooks are messing with score count
    const checkWinner = (score, name) => {
        console.log(playerOneScore + " " + playerTwoScore);
        console.log(Math.abs(playerOneScore - playerTwoScore));
        if (score >= 10 && Math.abs(playerOneScore - playerTwoScore) > 1) {
            setWinner(name)
            // Add win to leaderboard
        }

        if ((playerOneScore + playerTwoScore) % 2 === 0 && playerOneScore + playerTwoScore > 0) {
            if (server === "0") {
                setServer("1")
            } else {
                setServer("0")
            }
        }
    }

    const handlePlayerOneScore = (scoreIn) => {
        setPlayerOneScore(scoreIn)
        const name = props.playersList[0]
        checkWinner(scoreIn, name)
    }

    const handlePlayerTwoScore = (scoreIn) => {
        setPlayerTwoScore(scoreIn)
        const name = props.playersList[1]
        checkWinner(scoreIn, name)
    }

    return (
        <>
            <h1>Scoreboard</h1>
            <h2>Serving: {props.playersList[parseInt(server)]}</h2>
            {winner === "" ? 
                <div style={{display: "flex", justifyContent: "space-evenly"}}>
                    <PlayerScore name={props.playersList[0]} score={playerOneScore} handleScore={handlePlayerOneScore} />
                    <PlayerScore name={props.playersList[1]} score={playerTwoScore} handleScore={handlePlayerTwoScore} />
                </div>
                :
                <div>
                    <h2>Game over. {winner} wins {playerOneScore}-{playerTwoScore}! </h2>
                </div>
            }
        </>
    )
    
}

export default Scoreboard