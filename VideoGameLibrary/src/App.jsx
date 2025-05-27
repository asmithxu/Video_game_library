import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    async function getData() {
    const response = await fetch("https://api.rawg.io/api/games?key=2a81c7e237774deeb08ce07a5fc6cb15&ordering='metacritic'&page_size=30")
    let responseData = await response.json()
    responseData = responseData.results
    console.log(responseData)
    let gameData = await responseData.map((games) => {
        return {
          name: games.name,
          background_image: games.background_image,
          metacritic: games.metacritic,
          released: games.released,
          id: games.id
        }
    })
    console.log(gameData)
  }

  return (
    <div>
      <h1>Video Game Library</h1>
      <div className="games-list">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <img src={game.background_image} alt={game.name} className="game-image" />
            <h2>{game.name}</h2>
            <p>Metacritic: {game.metacritic}</p>
            <p>Released: {game.released}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
      

export default App

