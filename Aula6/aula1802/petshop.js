let listaDePets = ["bob","dino"]

function listarPets(){
    let conteudo = ""
    listaDePets.forEach((pet, index) =>{        
        // contudo += "Nome do pet: " + pet + "\n"
        conteudo += `
        -----------
        Nome do pet: ${pet}
        `
    })
    return conteudo
}

function addPet(nomePet){
    listaDePets.push(nomePet)
    
    return "Pet cadastrado com sucesso!"
}


module.exports = {listarPets, addPet}
