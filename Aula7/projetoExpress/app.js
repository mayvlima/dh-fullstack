const express = require('express');
const rotasProdutos = require('./rotas/rotasProduto')
let app = express();

// let series = [{
//     nome:"Friends",
//     ano: 2000,
//     id: 1
// },
// {
//     nome:"Jane",
//     ano: 2019,
//     id:2

// }]

app.get('/', (req, res) => res.send("Olá Mundo!"))
// app.get('/serie/:id', (req, res) => {
//         let {id} = req.params;
//         for (let serie of series) {
//             if (serie.id == id){
//                 res.send(serie)
//             }
//        }
//           })

    
 
app.get('/contatos', (req, res) => res.send({nome:"Mayara", idade:"25"}))
// app.get('/produtos/:id?', (req, res) => {
// //     let {id} = req.params;
// //     res.send("Eu tenho um produto com o id: "+ id)
// // })
app.use('/produtos', rotasProdutos);

//Criando um servidor
app.listen(3000, () => console.log("Servidor rodando na porta 3000"))

