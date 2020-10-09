import React, { useState } from 'react';

const RegisterForm = (props) => {
    const [player1, setPlayer1] = useState("")
    const [player2, setPlayer2] = useState("")
    const [error, setError] = useState(false)

    const validateNames = () => {
        if (player1 !== player2 && player1.length > 0 && player2.length > 0) {
            return true
        }

        return false
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const valid = validateNames()
        if (valid) {
            setError(false)
        } else {
            setError(true)
        }
        
        if (!error && valid) { // Fix having to double click submit after error appears to proceed
            props.handleSetPlayers([player1, player2])
            props.handleLoginStatus(true)
        }

        // TODO add new users to existing users list
    }

    const formStyles = {
        display: "flex", 
        justifyContent: "center"
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <h1>Register</h1>
            <div style={formStyles}>
                <div>
                    <h3>Player 1</h3>
                    <input
                        id="player1-input"
                        placeholder="Player 1"
                        value={player1}
                        type="text"
                        onChange={event => setPlayer1(event.target.value)}
                    />
                </div>
                <div>
                    <h3>Player 2</h3>
                    <input
                        id="player2-input"
                        placeholder="Player 2"
                        value={player2}
                        type="text"
                        onChange={event => setPlayer2(event.target.value)}
                    />
                </div>
            </div>
            <button>Submit</button>
            {error ? <p style={{color: "red"}}>Names cannot match and cannot be empty</p> : null}
        </form>
    )
}

export default RegisterForm
