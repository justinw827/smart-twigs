import React, { useState, useEffect } from 'react';

import PlayerScore from "./PlayerScore"

const Scoreboard = (props) => {
    const [winner, setWinner] = useState("")
    const [playerOneScore, setPlayerOneScore] = useState(0)
    const [playerTwoScore, setPlayerTwoScore] = useState(0)
    const [server, setServer] = useState(props.server)

    const checkWinner = () => {
        const topScore = Math.max(playerOneScore, playerTwoScore)
        if (topScore >= 10 && Math.abs(playerOneScore - playerTwoScore) > 1) {
            if (playerOneScore > playerTwoScore) {
                setWinner(props.playersList[0])
            } else {
                setWinner(props.playersList[1])
            }
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
    }

    const handlePlayerTwoScore = (scoreIn) => {
        setPlayerTwoScore(scoreIn)
        const name = props.playersList[1]
    }

    useEffect(() => {
        checkWinner()
    }, [playerOneScore, playerTwoScore])

    return (
        <>
            <h1>Scoreboard</h1>
            {winner === "" ? 
                <div>
                    <h2>Serving: {props.playersList[parseInt(server)]}</h2>
                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                      <PlayerScore name={props.playersList[0]} score={playerOneScore} handleScore={handlePlayerOneScore} />
                      <PlayerScore name={props.playersList[1]} score={playerTwoScore} handleScore={handlePlayerTwoScore} />
                    </div>
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