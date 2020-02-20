// let a = [2, 3, 4, 8, 0];

// //a.map
// a = a.map(x => x + 5);
// console.log(a); //vai retornar o a original, pois o map não altera o array, tenho que declara o resultado em uma nova varivaeç

// //a.filter
// a = [2, 3, 4, 8, 0];
// console.log(a.filter(x => x > 5));

// //filter com map
// let resultado1 = a.filter(x => x > 5).map(y => y ** 2);
// let resultado2 = a.map(y => y ** 2).filter(x => x > 5);
// console.log(resultado1);
// console.log(resultado2);

// //forEach
// a.forEach(x => console.log(`Esse é o número ${x}`))
// //a crase permite que você coloque variaveis dentro da string

// //Teplate string 
// let pessoa = {
//     nome:"Pedro",
//     idade:25,
//     interesses:["js","node","mysql"]
// }
// console.log(`Olá, meu nome é ${pessoa.nome}. Tenho ${pessoa.idade} anos. Meus interesses são ${pessoa.interesses}`)

// //reduce para calcular a soma das populações
// let cidades = [{
//     nome: "São Paulo",
//     pop: 12180000
// },
// {
//     nome:"Campinas",
//     pop: 1000000
// },
// {
//     nome:"Salvador",
//     pop:3000000
// },
// {
//     nome:"Guaxupé",
//     pop:60000
// }];

// console.log(
// cidades.reduce(
//     (acumulado, cidade) =>  {
//         return acumulado + cidade.pop;
//     }, 0)
// );


// //Desafio: Dado um array de cidade como acima, retornar a soma das populações
// //das cidades que possuem mais de 5000000 de habitantes
// let popCidadesGrades = arrayCidades.reduce((popTotal, cidades) =>{
//     if (cidades.pop > 5000000){
//         popTotal + cidades.pop;
//     }
//     return popTotal
// }, 0);
// console.log(popCidadesGrandes)


let series = [{
    nome:"Friends",
    ano: 2000,
    id: 1
},
{
    nome:"Jane",
    ano: 2019,
    id:2

}]


console.log(series[0])