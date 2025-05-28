import { useState, useEffect } from 'react'
import './App.css'
import Header from './header.jsx'
import Footer from './footer.jsx'

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

  useEffect(() => {
    // Code to run on each render
    getData()
}, []);


  
  return (
    <div>
      
    </div>
  );
}

      

export default App

