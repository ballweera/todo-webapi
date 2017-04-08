const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

let todos = [
    { id: 1, title: 'Learn NodeJS', completed: false },
    { id: 2, title: 'Create Express App', completed: true }
]

app.get('/todos', (req, res) => {
    res.json(todos)
})

app.post('/todos', (req, res) => {
    let newTodo = req.body

    newTodo.id = todos.length + 1
    todos.push(newTodo)

    res.status(201).json(newTodo)
})

app.get('/', (req, res) => {
    res.json({ message: 'Hello Express App 222' })
})

app.listen(PORT, () => {
    console.info(`Server started at port ${PORT}`)
})