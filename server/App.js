const express = require('express');
const {MongoClient} = require('mongodb');
const cors = require('cors');
require('dotenv').config()

const mongodb_uri = process.env.MONGODB_URI;
const db = process.env.DB;
const collection = process.env.COLLECTION;

const app = express();
const PORT = 3000;
const client = new MongoClient(mongodb_uri)

app.use(cors())
app.use(express.json())

//Get all of the user data
app.get("/userdata", async (request,response)=> {
    try {
        const database = await client.db(db);
        const coll = await database.collection(collection);
        const data = await coll.find().toArray()

        // console.log(data)

        response.status(200).send(data)
    } catch (error) {
        console.error("Something went wrong: ", error)
    }
})

//Get one user. This can be used to grab their info once they login.
app.get("/userdata/:username", async (request,response)=>{
    try {
        const database = await client.db(db);
        const coll = await database.collection(collection);
        const data = await coll.find().toArray()

        let userName = request.params.username

        const usernameData = data.filter((user) =>{
            return user.username === userName
        })

        // Conditionally send a response based on whether that data is found or not
        if (usernameData.length > 0){
        let json_response = JSON.stringify(usernameData)
        response.status(200).send(json_response)
        }else{
        response.status(404).send("Resource not found")
        };

    } catch (error) {
        console.error("Something went wrong: ", error)
    }
    
})

// Create a new user
app.post("/userdata", async (request, response)=>{
    let newUser = {...request.body};
    const database = await client.db(db);
    const coll = await database.collection(collection);
    await coll.insertOne(newUser)

  
    let data = [newUser]
    console.log('Received data', newUser)
    response.status(201).send(JSON.stringify([...data]))
})

//Update game data when the user adds the games that they like.
//This code uses the username to identify what it wants to change.
app.put("/userdata", async (request, response)=>{
    const database = await client.db(db);
    const coll = await database.collection(collection);
    await coll.updateOne({username: request.body.username},
        {
            $set:{
                game_data: request.body.game_data
            }
        }
    )
    const data = await coll.find().toArray()
    response.status(200).send(data)
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost: ${PORT}`)
})