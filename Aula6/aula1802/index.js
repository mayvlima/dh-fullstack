const http = require('http')
const url = require('url')

const petshop = require('./petshop')


// http.createServer((req, res)=>{
//     console.log("Estou dentro de um servidor")
// }).listen(3030, 'localhost')



const server = http.createServer((req, res)=>{
        let urlCompleta = url.parse(req.url, true)
        let rotas = urlCompleta.pathname
        let dados = urlCompleta.query

        if (rotas == "/"){
            res.write("Seja bem vindo a pagina inicial!\n")  
            res.end("Você acessou um servidor!")
        }
        
        if(rotas == '/contato'){
            res.write("Voce acessou a pagina de contato")
            res.end()
        }
        if(rotas == '/listadepets'){
            let conteudo = petshop.listarPets();
            res.write(conteudo)
            res.end()
        }
        if(rotas == '/cadastrarPet'){
            let novoPet = petshop.addPet(dados.nomePet)
            res.write(novoPet)
            res.end()

        }

                
    })

server.listen(3030, 'localhost', ()=>{
    console.log("Servidor rodando na porta 3030")
})