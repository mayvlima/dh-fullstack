const pizzas = require ('../database/pizzas.json');

function listar(req, res) {    
    return res.send(pizzas);    
}

function buscar(req, res){
    let busca = req.params.busca;
    const resultado = pizzas.filter (pizza => {
            return pizza.nome.includes(busca);
        });
        return res.send(resultado);
    }


module.exports = {listar, buscar};
