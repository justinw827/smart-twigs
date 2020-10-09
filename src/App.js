import React, { useState } from 'react';
import './App.css';
import RegisterForm from './components/RegisterForm'
import Scoreboard from './components/Scoreboard'
import ExistingUsersForm from './components/ExistingUsersForm';

// is leaderboard data persistent?

function App() {
  // TODO get users from backend
  const [players, setPlayers] = useState(["", ""])
  const [existingPlayers, setExistingPlayers] = useState(["Justin", "Oscar", "Bob", "Mary"])
  const [loginStatus, setLoginStatus] = useState(false)
  const [server, setServer] = useState("0")

  const handleLoginStatus = (statusIn) => {
    setLoginStatus(statusIn)
  }

  const handleSetPlayers = (playersList) => {
    setPlayers(playersList)
  }

  const handleSelector = (event) => {
    setServer(event.target.value)
  }

  return (
    <div className="App">
      {loginStatus ? 
        <Scoreboard server={server} playersList={players} />
        :
        <>
          <RegisterForm 
            handleLoginStatus={(status) => handleLoginStatus(status)}
            handleSetPlayers={(playersList) => handleSetPlayers(playersList)}
          />
          <ExistingUsersForm 
            existingPlayers={existingPlayers} 
            handleSetPlayers={(playersList) => handleSetPlayers(playersList)}
            handleLoginStatus={(status) => handleLoginStatus(status)}
          />
          <div>
            <h2>Pick server</h2>
            <select onChange={handleSelector}>
              <option value="0">Player 1</option>
              <option value="1">Player 2</option>
            </select>
          </div>
        </>
      }
    </div>
  );
}

export default App;

// TODO make it so one player can enter a new name and the other can use an existing name