const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json());
app.use(cors())

let videos = require('./data.json')

app.get('/', function(req, res) {
    res.send(videos)
})

app.listen(3000, () => {
    console.log('Server started on port 3000')
})