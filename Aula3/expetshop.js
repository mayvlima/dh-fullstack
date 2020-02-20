const nomePetshop = "** PETSHOP DA MAY**"
console.log(nomePetshop);

let json = `[{"nome":"Repete Pet","raca":"Passaro","dataNascimento":"2018-12-10T23:23:10Z","tipo":"Papagaio","peso":3.5,"sexo":"Macho","dono":{"nome":"vinicius","idade":25},"vacinado":false,"servicos":["Tosa","Banho","Castrado","Banho"]},{"nome":"Menino","raca":"Vira-Lata","dataNascimento": "2016-01-14T16:30:22Z","tipo":"cachorro","sexo":"Fêmea","peso":3.5,"dono":{"nome":"João","idade":25},"vacinado":true,"servicos":["Tosa","Banho","Banho","Banho"]}] `;

const lerPets = umJason => {
    let pets = JSON.parse(umJason)
    pets.map(function (pet){
        pet.dataNascimento = new Date(pet.dataNascimento)
    })
    return pets
}

let pets = lerPets(json)

//Uma funcão que procura um trecho de texto dentro da json
const buscarPeloNome = (trecho, pets) => {
    let pets = entradaPets(pets)
    let petsEncontrados = array.filter(function (pet){
    return pet.nome.indexOf(trecho) != -1
    })
    return petsEncontrados;
}



//Uma função que irá analizar se o pet é castrado, ser não for castrar e dar uma mensagem de confimação, e adicionar na array serviços. se já tiver dar uma mensagem de erro.
// percorre a array pets.servicos e verificar se tem o dado desejado

const castrarPet = (arrayPets) => arrayPets.map(function (pet){
    if (pet.servicos.indexOf("Castrado") == -1){
        pet.servicos.push("castrado")
        console.log("O pet " + pet.nome +" acaba de ser castrado!")    
    }else{
        console.log("O pet "+ pet.nome+(" já é castrado!"))
    }
})


//Uma função que darei o nome do pet e ele irá adicionar na aba serviços e adicionar a string "banho"
const darBanhoPet = (nomePet,arrayPets) => arrayPets.map(function (pet){
    if (pet.nome.indexOf(nomePet) != -1 ){
        pet.servicos.push("Banho")
        console.log("O Pet " + pet.nome +" acaba de tomar uma banho!")
    }else{
        console.log("Esse Pet não está no nosso sistema!")
    }
})

// //Uma função que retorna a quantidade de banhos que cada pet ja tomou
const qtosBanhos = (arrayPets) => arrayPets.map(function (pet){
    let total = 0
    pet.servicos.map(function (tipoServico){
        if (tipoServico == "Banho"){
            total = total + 1
        }
    })
    console.log("O pet "+ pet.nome + " tomou " + total + " banhos")
})
 
qtosBanhos(pets)