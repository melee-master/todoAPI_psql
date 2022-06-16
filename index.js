const express = require('express');
const app = express();
const pool = require('./db');

app.use(express.json());

//get all todos
app.get('/todos', async(req, res)=> {
    try{
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    }catch(err){
        console.error(err);
    }
})
//get a todo
app.get('/todos/:id', async(req, res)=>{
    const {id} = req.params;
    try{
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = ($1)", [id]);
        res.json(todo.rows[0]);
    }catch(err){
        console.error(err);
    }
})
//create a todo

 app.post('/todos', async (req, res)=> {
    try{
        const {description} = req.body
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES ($1) RETURNING *", [description]);
        res.json(newTodo.rows[0])
    }catch(err){
        console.error(err);
    }
 })
//update a todo

//delete a todo



app.listen(3000, ()=>{
    console.log("Server satrted at htttp://localhost:3000/")
})