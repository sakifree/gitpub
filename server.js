require("dotenv").config()
const express = require("express")
const app = express()
const drinks = require("./models/drinks")
const morgan = require("morgan")

app.use(morgan("dev"))

app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})

app.get("/drinks", (req, res) => {
    res.render("drinks_index.ejs")
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Listening on planet ${PORT}`)
})