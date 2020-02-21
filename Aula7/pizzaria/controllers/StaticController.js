
function home(req, res) {
    return res.send("Bem vindo a pizzaria SC05!!!!");
}

function sobre(req, res) {
    return res.send("84 anos fazemos as melhores pizzas de São Paulo");
}

module.exports = {home, sobre};