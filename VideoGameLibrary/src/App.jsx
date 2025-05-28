import { useState, useEffect } from 'react'
import './App.css'


function App() {
  const [gameData, setgameData] = useState([])

    async function getData() {
    const response = await fetch("https://api.rawg.io/api/games?key=2a81c7e237774deeb08ce07a5fc6cb15&ordering='metacritic'&page_size=30")
    let responseData = await response.json()
    responseData = responseData.results
    let gameData = responseData.map((games) => ({
          name: games.name,
          background_image: games.background_image,
          metacritic: games.metacritic,
          released: games.released,
          id: games.id
        }))

        setgameData(gameData)

  }

  useEffect(() => {
    // Code to run on each render
    getData()
}, [])

return (
    <div>
      <h1> Video Game Library </h1>
      <div className="games-list">
        {gameData.map((game) => ( 
          <div key={game.id} className="game-card">
            <img src={game.background_image} alt={game.name} className="game-image" />
            <h2>{game.name}</h2>
            <p>Metacritic: {game.metacritic}</p>
            <p>Released: {game.released}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

      export default App

