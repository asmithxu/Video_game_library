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
        {games.map((games) => (
          <div key={games.id} className="game-card">
            <img src={games.background_image} alt={games.name} className="game-image" />
            <h2>{games.name}</h2>
            <p>Metacritic: {games.metacritic}</p>
            <p>Released: {games.released}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
      

export default App

