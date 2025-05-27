import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
   useEffect(() => {
    getData()
   },[]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

