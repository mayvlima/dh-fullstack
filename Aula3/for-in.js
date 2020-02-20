let carro = {
    nome:"fox",
    ano:"2011"
    
}

for(let prop in carro){
    console.log(carro[prop])
}

 let series = ["Friends", "Game of thrones", "Breaking Bad"]

 for (let umaSerie of series){
     console.log(umaSerie + "!")
 }
 
 //ForIn é para objetos
 let pessoa = {
     nome: "Nátalia Lira",
     idade: 21,
     endereco: "Rua das flores, 2020"
    }

    for (campo in pessoa){
        console.log(`${campo}: ${pessoa[campo]}`)
    }

    //Verificar se a pessoa tem o CPF usando o for in
    //Caso não tenha, cadastrar um CPF
    if(pessoa.cpf == undefined){
        pessoa.cpf = "230.739.248-23"
    }

   //For of
   let array = ["Mayara", "Pedro", "Dário", "Laura"]

   for (nome of array){
       console.log(nome);
   }