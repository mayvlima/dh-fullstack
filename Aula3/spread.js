let frutas = ["maça","banana","uva"];

let frutasDois = ["laranja", "abacate","goiaba"];

let listaCompleta = [...frutas, ...frutasDois]



let pessoa = {
    nome:"mayara",
    idade:"22",

}

let infoPessoal = {
    ...pessoa,
    tel: "967248518",
    rg: "419403668", 
    
}

function letras(...paramns){
    console.log(paramns)
}

letras("a", "b","c")

