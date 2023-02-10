const app = require("express")();

/*
const express = require("express");
const app = express();

// route (entire thing)
// HTTP method
*/
const express = require("express")()
app.listen(8080)


app.get("/", (req, res) => {
    res.send({ message: "Our first route" });
})

app.get("/test", (req, res) => {
    res.write("Test")
    res.end()

}) 


let bicycleSpins = 0
app.get("/spinthebicycle", (req, res) => {
    bicycleSpins += 1;
    res.send ({ message: `People have spun the bicycle wheel ${bicycleSpins} times`})
})

let dinosaurBeenKicked = 0
app.get("/kickthedinosaur", (req, res) => {
    dinosaurBeenKicked += 1
    res.send ({ message: `The dinosaur has been kicked ${dinosaurBeenKicked} times`})
})

let dinosaurBeenKicked2 = 0
app.get("/kickthedinosaur2", (req, res) => {
    dinosaurBeenKicked2 += 1
    res.send(`
    <h2>The dinosaur has now been kicked ${dinosaurBeenKicked2} times</h2>
    <h3>Ow ow ow</h3>
    <a href="http://localhost:8080/kickdinosaur/:id?size=1200">Link Test</a>

    `)
})

app.get("/about", (req, res) => {
    res.send(`
    <h1>Hello There</h1>
    `)
})

// bat?adjective=spooky
app.get("/bat", (req, res) => {
    // must send response back to client(res)
    // query string
    // adjective = key
    // spooku = value
    console.log(req.query)
    res.send({ message: `The bat is ${req.query.adjective}` })
})

// bottle/large
app.get("/bottle/:bottleSize", (req, res) => {
    console.log(req.params.bottleSize)    
    res.send({ size: req.params.bottleSize })
})

app.post("/package", (req, res) => {
    console.log(req.body)
    res.send({ size: req.body })
})