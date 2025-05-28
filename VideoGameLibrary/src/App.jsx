import { useState, useEffect } from 'react'
import './App.css'
import Header from './header.jsx'
import Footer from './footer.jsx'
import LoginBox from './LoginBox.jsx'

function App() {
  const [gameData, setgameData] = useState([])

    async function getData() {
    const response = await fetch("https://api.rawg.io/api/games?key=2a81c7e237774deeb08ce07a5fc6cb15&ordering='metacritic'&page_size=32")
    let responseData = await response.json()
    responseData = responseData.results
    let gameData = responseData.map((game) => ({
          name: game.name,
          background_image: game.background_image,
          metacritic: game.metacritic,
          released: game.released,
          id: game.id
        }))

        setgameData(gameData)
   }

  useEffect(() => {
    // Code to run on each render
    getData()
}, [])

  
  return (
    <div>
      // display the login box, header, and footer
      <LoginBox />
      <Header />
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
      <Footer />
    </div>
  )
}


      

export default App

