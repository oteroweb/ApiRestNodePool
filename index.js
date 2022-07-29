const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const todoRoutes = require('./routes/todo');

app.use('/todo', todoRoutes);
app.listen(3001);
