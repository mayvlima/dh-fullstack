// let alunos = ["João", "Pedro", "Jorge", "Francisco"]

// let indiceJoao = alunos.indexOf("João")

// let indiceFrancisco = alunos.indexOf("Francisco")

// console.log(indiceJoao)
// console.log(indiceFrancisco)

// let arrayFrase = [
//     "Não",
//     "fracassei,",
//     "simplesmente",
//     "encontrei",
//     "dez",
//     "mil",
//     "soluções",
//     "equivocadas"
// ]

// let fraseNova = arrayFrase.join(" ")

// console.log(fraseNova)

// let estudantes = [
//     {
//       nome: "Álvaro",
//       media: 9,
//       curso: "Android"
//     },
//     {
//       nome: "Daniel",
//       media: 6,
//       curso: "Full Stack"
//     },
//     {
//       nome: "Alexis",
//       media: 3,
//       curso: "iOS"
//     }
//   ];

//   let alunoFormado = estudantes.pop()

//   console.log(estudantes)
//   console.log(alunoFormado)


// let estudantes = [
//     {
//       nome: 'Álvaro',
//       media : 9,
//       curso : 'Android',
//     },
//     {
//       nome: 'Daniel',
//       media : 6,
//       curso : 'Full Stack',
//     }
//   ]

//   estudantes.push({nome:"João", media:5,curso:"iOS"})
//   estudantes.push({nome:"Miguel", media:2, curso:"Android"})

//   console.log(estudantes)

// let estudantes = [
//     {
//        nome: 'Álvaro',
//        media : 9,
//        curso : 'Android',
//      },
//       {
//         nome: 'Daniel',
//         media : 6,
//         curso : 'Full Stack',
//       },
//       {
//         nome: 'Alexis',
//         media : 3,
//         curso : 'iOS',
//       },
//     ]

//    let alunoDesistente =  estudantes.shift()

//    console.log(estudantes)
//    console.log(alunoDesistente)

// let estudantes = [
//     {
//       nome: 'Alvaro',
//       media : 9,
//       curso : 'Android',
//     },
//     {
//       nome: 'Daniel',
//       media : 6,
//       curso : 'Full Stack',
//     },
//     {
//       nome: 'Alexis',
//       media : 3,
//       curso : 'iOS',
//     }
//   ]

// estudantes.unshift({
//     nome:"Mariana",
//     media:9,
//     curso:"Full Stack"
// })

// estudantes.unshift({
//     nome: "Francisco",

// media: 2,

// curso: "Android"
// })

// console.log(estudantes)


// let numeros = [12, 34, 22, 46, 18, 29, 44, 43, 39];

// let maiores = numeros.filter(function(valor){
//     return valor > 18;
// })

// console.log(maiores)

let bart = {
    mae: "Marge",
    pai: "Homer",
    hobbie: "Skate",
    corCamiseta: "Laranja"
}

for (let prop in bart){
    console.log(prop +": "+ bart[prop])
}

let frase = "Essa semana vou no colearning";

for(let palavra of frase){
    console.log(palavra)
}

let destinosIncriveis = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

let [marruecos, bariloche, barcelona,china, grecia] = destinosIncriveis;

console.log(bariloche)
console.log(china)
