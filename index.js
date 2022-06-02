const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const userRoutes = require('./routes/users');
const ordersRoutes = require('./routes/orders');
const productsRoutes = require('./routes/products');

app.use('/users', userRoutes);
app.use('/orders', ordersRoutes);
app.use('/products', productsRoutes);
app.listen(3000);
