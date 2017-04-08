const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/todos', (req, res) => {
    let newTodo = req.body
    let todos = []

    newTodo.id = 1
    todos.push(newTodo)

    res.status(201).json({ message: 'Todo is created', data: newTodo })
})

app.get('/', (req, res) => {
    res.json({ message: 'Hello Express App 222' })
})

app.listen(3000, () => {
    console.info('Server started at port 3000')
})