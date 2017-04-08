const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({ message: 'Hello Express App' })
})

app.listen(3000, () => {
    console.info('Server started at port 3000')
})