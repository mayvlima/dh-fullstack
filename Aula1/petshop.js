

const nomePetshop = "** PETSHOP DA MAY**"
console.log(nomePetshop);


let pets = [{
    nome:"Bob", 
    raca:"Vira-lata",
    dataNascimento: "10/12/2018",
    tipo:"Cachorro",
    peso:3.5,
    sexo:"M",
    dono:{nome:"Mayara", idade:25}, 
    vacinado:false,
    servicos:["Banho", "Tosa"]
},
{
    nome:"Dino", 
    raca:"Vira-lata",
    dataNascimento:"14/01/2006",
    tipo:"Gato",
    peso:3.5,
    sexo:"F",
    dono:{nome:"Mayara", idade:25}, 
    vacinado:true,
    servicos:["Banho", "Tosa"]
}
]

// function listarPets(){
//     // for (let i=0; i<pets.length; i++){
//     //     console.log("-------------")
//     //    console.log("Nome: " + pets[i].nome)
//     //    console.log("Tipo: " + pets[i].tipo)
//     //     // if (pets[i].sexo == "M"){
//     //     //     console.log("Sexo: Macho")
//     //     // }else{
//     //     //     console.log("Sexo: Fêmea")
//     //     // }
//     //     pets[i].sexo == "F"? console.log("Sexo: Fêmea") : console.log("Sexo: Macho")        
//     // }
//     let i=0;
//     while (i<pets.length){
//     console.log("-------------")
//     console.log("Nome: " + pets[i].nome)
//     console.log("Tipo: " + pets[i].tipo)
//     pets[i].sexo == "F"? console.log("Sexo: Fêmea") : console.log("Sexo: Macho")
//     i++
// }
const vacinarPet = function(pet){
    if (!pet.vacinado){
        pet.vacinado == true
        console.log("O Pet foi vacinado com sucesso!")
    }else{
        console.log("Esse Pet já está vacinado!")
    }
}
vacinarPet(pets[0]);


