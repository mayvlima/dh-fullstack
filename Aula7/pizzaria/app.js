//Incluir o express
const express = require('express');

//Incluindo roteadores
const staticRouter = require('./routes/staticRoutes');
const pizzasRouter = require('./routes/pizzasRoutes')

//Criando o app
const app = express();

//Utilizando o roteador static
app.use('/', staticRouter);
app.use('/pizzas', pizzasRouter)


//Iniciando o servidor web
app.listen(3000, ()=>console.log("Iniciando o servidor!"));


