// let a = [5,6,7]

// const quadrado = x => x**2

// console.log(a.map(quadrado))
// console.log(a)


// //Exemplos de filter
// let pessoas = [
//     {nome:"Natália", idade:21},
//     {nome:"Sérgio", idade:40},
//     {nome:"Luiz Alexandre", idade:25}
// ]

// let maisDe25 = pessoas.filter( function (pessoa) {
//     console.log(this)
//         return pessoa.idade > this;
//     }, 25)

// console.log(maisDe25)

let fabricante ={
    nome_fabricante: "Unilever",
    cnpj: "12.123.123/0001-12"
}


let produto = {
    nome_produto: "Vanish 500 ml",
    preco: 5.0,
    lote: "jdisaj",
    ...fabricante
}

//Como usar o spred Operator com array:
let a = [1,4,6,"sapo"];
let b = [7, ...a, "galinha"];

console.log(b)

const soma = (a,b) => a + b;
console.log(soma(5,6)); 

//somando vários de uma vez com spred operator
const someVarios = (...x) => {
    return x.reduce((acumulado, atual)=> acumulado + atual);
}

console.log(someVarios(1,5,7,9))


