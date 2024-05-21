const express = require('express')

const app = express()

const PORT = 4000

app.get("/evelyn", (req, res) => {
    res.send("Hello Evelyn!, this is my get route")
})

app.post("/evelyn", (req, res) => {
    res.send("Hello Evelyn!, this is my post route")
})

app.put("/evelyn", (req, res) => {
    res.send("Hello Evelyn!, this is my put route")
})

app.listen(PORT, () => {
    console.log('My app is working fine')
})