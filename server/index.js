const express = require('express');
const getProducts = require('./controllers/getProducts')

const app = express();

const SERVER_PORT = 4000;

app.use(express.json())


app.get('/api/products', getProducts.getProducts)
app.get('/api/products/:id', getProducts.getProductById)

app.listen(SERVER_PORT, () => console.log(`listening on port: ${SERVER_PORT}`));

