const express = require("express");
const app = express();

app.use(express.json())

const birds = [
    {id: 1 , name: "Bird1", location: "Somewhere1"},
    {id: 2, name: "Bird2", location: "Somewhere2"},
    {id: 3, name: "Bird3", location: "Somewhere3"},
    {id: 4, name: "Bird4", location: "Somewhere4"},
    {id: 5, name: "Bird5", location: "Somewhere5"},
    {id: 6, name: "Bird6", location: "Somewhere6"},
    {id: 7, name: "Bird7", location: "Somewhere7"},
    {id: 8, name: "Bird8", location: "Somewhere8"}
]

let currentId = 8;

app.get("/", (req, res) => {
    res.send("testing")
})

// get-all
app.get("/birds", (req, res) => {
    res.send(birds)
})

// get
app.get("/birds/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const bird = birds.find((bird) => bird.id === id)
    res.send(bird)
})

// get by name
app.get("/birds/findByName/:name", (req, res) => {
    const name = req.params.name
    const bird = birds.find((bird) => bird.name === name)
    res.send(bird)
})

// post 
app.post("/birds", (req, res) => {
    console.log('posting now')
    const newBird = {
        id: ++currentId, 
        name: req.body.name, 
        location: req.body.location
    };
    birds.push(newBird)
    res.send(newBird)
})

// patch
app.patch("/birds/:id", (req, res) => {
    const birdId = parseInt(req.params.id)
    const birdIndex = birds.findIndex((bird) => bird.id === birdId);
    if(birdIndex === -1) {
        res.status(404).send(`No birds found with the id ${birdId}...`)
    } else {
        const newBird = update(birdIndex, req.body)
        res.send(newBird)
    }
})

function update(oldBirdIndex, newBird){
    if(newBird.name != null){
        birds[oldBirdIndex].name = newBird.name;
    }
    if(newBird.location != null){
        birds[oldBirdIndex].location = newBird.location;
    }
    console.log('bird finished')
    return birds[oldBirdIndex]
}

// delete
app.delete("/birds/:id", (req, res) => {
    const birdId = parseInt(req.params.id);
    const birdIndex = birds.findIndex((bird) => bird.id === birdId);
    if(birdIndex === -1) {
        res.status(404).send(`No birds found with the id ${birdId}...`)
    } else {
        birds.splice(birdIndex, 1)
        res.send(`Bird with the ID: (${birdId}) has been deleted...`)
    }
})


app.listen(8080, () => {
    console.log("Server is running on port", 8080)
})