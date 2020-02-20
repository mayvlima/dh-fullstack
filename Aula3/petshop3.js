const nomePetshop = "** PETSHOP DA MAY**"
console.log(nomePetshop);

let json = `[{"nome":"Repete Pet","raca":"Passaro","dataNascimento":"2018-12-10T23:23:10Z","tipo":"Papagaio","peso":3.5,"sexo":"Macho","dono":{"nome":"vinicius","idade":25},"vacinado":false,"servicos":["Tosa"]},{"nome":"Menino","raca":"Vira-Lata","dataNascimento": "2016-01-14T16:30:22Z","tipo":"cachorro","sexo":"Fêmea","peso":3.5,"dono":{"nome":"João","idade":25},"vacinado":true,"servicos":["Tosa"]}] `;


// Padrão de string de data para o JSON: AAAA-MM-DDTHH:mm:SS.SSSZ"
// Z: para especificar que a data está no GMT;
// ao invés do Z, podemos especificar o fuso 
// ex: 2016-01-14T16:30:22-03:00

const lerPets = umJson => {
 let pets = JSON.parse(umJson); 
 pets.map(pet => pet.dataNascimento = new Date(pet.dataNascimento))
 return pets
}   

let pets = lerPets(json)
 
const buscaPeloNome = (nome, array) => array.filter(pet => pet.nome.indexOf(nome) != -1);
            //return pet.nome.include(nome)
    


console.log(buscaPeloNome("eni", pets))




// const castrarPet = function(pet){
//     if (!pet.castrado){
//         pet.castrado == true
//         return " Erro, esse pet já foi castrado!"
//     }else{
//         pet.servicos.push("Castrado")
//         return " Pet castrado!"
//     }
// }

// const darBanho 


// const vacinarPet = function(pet){
//     if (!pet.vacinado){
//         pet.vacinado == true
//         pet.servicos.push("Vacina")
//         return " foi vacinado com sucesso!"
//     }else{
//         return " já está vacinado!"
//     }
// }



// const darEntradaPets = (listaPets, leituraLista, vacinarPet) => {

//    let pets = leituraLista(listaPets);

//    const msgFinal = (pets, resultado) => {
//    console.log("O pet " + pets.nome + resultado)

// }

//    for (let i=0; i<pets.length; i++){
//    let resultado = vacinarPet(pets[i])
//    msgFinal(pets[i], resultado)
//     }

    

 
// }

// darEntradaPets(json, lerPets, vacinarPet)