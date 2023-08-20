const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express()

app.use(cors())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

app.get("/chart/artists", async (req, res) => {
    try {
        const response = await axios
            .get('https://api.deezer.com/chart/0/artists')
        return res.send(response.data)
    } catch (error) {
        res.json({ error: error.message })
    }
})
app.get("/chart/tracks", async (req, res) => {
    try {
        const response = await axios
            .get('https://api.deezer.com/chart/0/tracks')
        return res.send(response.data)
    } catch (error) {
        res.json({ error: error.message })
    }
})
app.get("/chart/albums", async (req, res) => {
    try {
        const response = await axios
            .get('https://api.deezer.com/chart/0/albums')
        return res.send(response.data)
    } catch (error) {
        res.json({ error: error.message })
    }
})
app.listen(3001)