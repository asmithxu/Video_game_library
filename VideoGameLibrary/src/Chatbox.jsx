import React from "react"

function Chatbox(props) {
    
    async function askAssistant(){
    let my_prompt = props.savedGames;
    my_prompt = my_prompt.map((game) => game.name)
    my_prompt = `${my_prompt}`
    
    const body = {"message": my_prompt}
    const client = "https://video-game-library-chatapi.onrender.com/ask" // use the endpoint from your render server 
    
    const response = await fetch( client, { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(body)})
    const conversation =  await response.json()
    console.log(conversation)

    const parentNode = document.getElementById("chat-box")

    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
    }

    conversation.forEach(message => {
        let x = document.createElement('p');
        x.innerHTML = `${message.role}: ${message.content}`
        parentNode.appendChild(x);
    })
}
    return (
        <div>
            <h1>Get Game Recommendation</h1>
            <div id="chat-box" style={{backgroundColor: 'lightblue', height: '250px', width: '500px', overflowY: 'scroll'}}>
            </div>
            <button onClick={askAssistant}> Get Recommendation </button>   
        </div>
    );
}
 export default Chatbox;