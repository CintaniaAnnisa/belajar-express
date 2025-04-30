const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.json())
app.use(express.static('public'))

let todos = [
    { id: 1, task: "Belajar HTML", done: true},
    { id: 2, task: "Belajar CSS", done: true},
    { id: 3, task: "Belajar Javascript", done: true},
    { id: 4, task: "Belajar Node.Js", done: true},
    { id: 5, task: "Belajar Experss.js mantap", done: true},
];

app.get('/todos', (req, res)=>{
    res.json(todos)
})

app.post('/todos', (req,res)=>{
    const newTodo = req.body
    newTodo.id = Date.now()
    newTodo.done = false
    todos.push(newTodo)
    res.status(201).json({message: 'To-do berhasil ditambahkan', todo: newTodo})
})

app.delete('/todos/:id', (req, res)=>{
    const todoId = Number(req.params.id);
    todos = todos.filter(todo => todo.id !== todoId)
    res.json({ message: 'To-do dihapus' })
})

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`)
})

// app.get("/", (req, res) => {
//     res.send("Hello from the server!");
// });

// app.get("/cars", (req, res) => {
//     res.send("This is from cars page");
// });

// app.get("/profile", (req, res) => {
//     res.send("This is from profile page");
// });

// app.listen(PORT, () => {
//     console.log(`Server berjalan di http://localhost:${PORT}`);
// });

