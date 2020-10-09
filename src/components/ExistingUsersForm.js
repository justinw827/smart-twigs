import React, { useState } from 'react';

const ExistingUsersForm = (props) => {
    const [player1, setPlayer1] = useState("")
    const [player2, setPlayer2] = useState("")
    const [error, setError] = useState(false)

    const renderPlayerSelections = () => {
        return (
            props.existingPlayers.map(player => <option value={player}>{player}</option>)
        )
    }

    const validateNames = () => {
        if (player1 !== player2 && player1.length > 0 && player2.length > 0) {
            return true
        }

        return false
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        validateNames()
        const valid = validateNames()
        if (valid) {
            setError(false)
        } else {
            setError(true)
        }

        if (!error && valid) { // Fix having to double click submit in some cases
            props.handleSetPlayers([player1, player2])
            props.handleLoginStatus(true)
        }
    }

    const handleSelectorOne = (event) => {
        setPlayer1(event.target.value)
    }

    const handleSelectorTwo = (event) => {
        setPlayer2(event.target.value)
    }

    const formStyles = {
        display: "flex",
        justifyContent: "center"
    }

    return (
        <div>
            <h1>Use an existing user</h1>
            <div style={formStyles}>
                <div>
                    <h3>Player 1</h3>
                    <select onChange={handleSelectorOne}>
                        <option >Please Select</option>
                        {renderPlayerSelections()}
                    </select>
                </div>
                <div style={{ marginLeft: "30px" }}>
                    <h3>Player 2</h3>
                    <select onChange={handleSelectorTwo}>
                        <option >Please Select</option>
                        {renderPlayerSelections()}
                    </select>
                </div>
            </div>
            <button style={{marginTop: "15px"}} onClick={handleSubmit}>Submit</button>
            {error ? <p style={{ color: "red" }}>Names cannot match and cannot be empty</p> : null}
        </div>
    )
}

export default ExistingUsersForm
