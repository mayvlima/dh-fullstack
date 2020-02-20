const nomePetshop = "** PETSHOP DA MAY**"
console.log(nomePetshop);

let json = `[{"nome":"Repete Pet","raca":"Passsaro","dataNascimento":"10/12/2018","tipo":"Papagaio","peso":3.5,"sexo":"Macho","dono":{"nome":"vinicius","idade":25},"vacinado":false,"servicos":["Banho","Tosa"]},{"nome":"Menino","raca":"Vira-Lata","dataNascimento":"14/01/2016","tipo":"cachorro","sexo":"Fêmea","peso":3.5,"dono":{"nome":"João","idade":25},"vacinado":true,"servicos":["Banho","Tosa"]}] `;

const lerPets = umJson => {
        const pets = JSON.parse(umJson)
        for (let i=0; i<pets.length; i++){
            // console.log("-------------")
            // console.log("Nome: " + pets[i].nome) 
            // console.log("Tipo: " + pets[i].tipo)
        }
      return pets  
}




const vacinarPet = function(pet){
    if (!pet.vacinado){
        pet.vacinado == true
        return " foi vacinado com sucesso!"
    }else{
        return " já está vacinado!"
    }
}


const darEntradaPets = (listaPets, leituraLista, vacinarPet) => {

   let pets = leituraLista(listaPets);

   const msgFinal = (pets, resultado) => {
   console.log("O pet " + pets.nome + resultado)

}

   for (let i=0; i<pets.length; i++){
   let resultado = vacinarPet(pets[i])
   msgFinal(pets[i], resultado)
    }

    

 
}

darEntradaPets(json, lerPets, vacinarPet)