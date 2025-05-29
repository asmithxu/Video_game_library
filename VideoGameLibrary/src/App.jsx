import { useState, useEffect } from 'react'
import './App.css'
import Header from './header.jsx'
import Footer from './footer.jsx'
import LoginBox from './LoginBox.jsx'

function App() {
  const [gameData, setgameData] = useState([])

    async function getData() {
    const response = await fetch("https://api.rawg.io/api/games?key=2a81c7e237774deeb08ce07a5fc6cb15&ordering=metacritic&page_size=30")
=======
    const response = await fetch("https://api.rawg.io/api/games?key=2a81c7e237774deeb08ce07a5fc6cb15&ordering='metacritic'&page_size=32")
>>>>>>> Frontend
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
<<<<<<< HEAD

  }
=======
   }
    
   async function getUser(){
    let user ='mario'
    let url = 'https://video-game-libraryapi.onrender.com/userdata/'
    let userURL = url + user
    const response = await fetch(userURL)
    let userdata = await response.json()
    console.log(userData[0])
   }
>>>>>>> Frontend

  useEffect(() => {
    // Code to run on each render
    getData()
<<<<<<< HEAD
}, [])

return (
    <div>
      <h1> Video Game Library </h1>
      <div className="games-list">
=======
    getUserData()
}, [])

  
  return (
    <div>
      // display the login box, header, and footer
      <LoginBox />
      <Header />
       <div className="games-list">
>>>>>>> Frontend
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

<<<<<<< HEAD
      export default App
=======
async function putRequest(){
  fetch('https://video-game-libraryapi.onrender.com/userdata/',)
  method: 'PUT',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({
username: 'sailor_moon',
game_data: 'Sometimes enjoys games',
}),
})
.then(response => {
if (!response.ok) {
throw new Error(HTTP error! status: ${response.status});
}
return response.json();
})
.then(data => {
console.log('Success:', data);
})
.catch(error => {
console.error('Error:', error);
});
}
     putRequest() 

export default App
>>>>>>> Frontend

