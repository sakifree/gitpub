require("dotenv").config()
const express = require("express")
const app = express()
const drinks = require("./models/drinks")
const food = require("./models/food")
const morgan = require("morgan")

app.use(morgan("dev"))

app.get("/", (req, res) => {
    res.send(`
        Welcome to the Gitpub App! </br> 
        <a href="http://localhost:${PORT}/drinks">Drinks</a>
        <a href="http://localhost:${PORT}/food">Food</a>
    `)
})

app.get("/drinks", (req, res) => {
    res.render(
        "drinks_index.ejs",
        {
            allDrinks: drinks,
        }
    )
})

app.get("/food", (req, res) => {
    res.render(
        "food_index.ejs",
        {
            allFood: food,
        }
    )
})


app.get("/drinks/:id", (req, res) => {
    res.render(
        "drinks_show.ejs",
        {
            drink: drinks[req.params.id],
        }
    )
})

app.get("/food/:id", (req, res) => {
    res.render(
        "food_show.ejs",
        {
            food: food[req.params.id],
        }
    )
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Listening on planet ${PORT}`)
})