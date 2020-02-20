// let dobro = numero => numero*2;
// let triplo = numero => numero*3

// let aplicar = (numero, funcao) => funcao(numero)


// function dobro(numero){
//     return numero*2
// }

// function triplo(numero){
//     return numero*3
// }

// function aplicar(numero, funcao){
//     return funcao(numero)
// }
// console.log(aplicar(2,dobro))


// function somar(numeroA,numeroB){
//     return numeroA*numeroB
// }

// function subtrair(numeroA,numeroB){
//     return numeroA-numeroB
// }

// function multiplicar(numeroA,numeroB){
//     return numeroA*numeroB
// }

// function dividir(numeroA,numeroB){
//     return numeroA/numeroB
// }

// function calculadora(numeroA,numeroB, funcao){
//     return funcao(numeroA,numeroB)
// }
// console.log(calculadora(5,2,subtrair))


// function adicionarHttp(url){
//     let sites = [];
//     for (let i=0; i<url.length;i++){
//         sites.push("http://" + url[i])
//           }
//           return (sites)
//     }


// function processar(url,funcao){
          
//     return funcao(url)
    
// }
     
 function adicionarHttp(url){
     return "http://" + url
     }
   

 function processar(listaUrl, funcao){
     for (let i=0; i<listaUrl.length;i++){
         listaUrl[i] = funcao(listaUrl[i])
     }
     return listaUrl

    
    //  let array = [];
    //     for (let i=0; i<sites.length;i++){
    //         array[i] = sites[i]
    //     }
        
    
 }
    


console.log(processar("www.yahoo.com",adicionarHttp))

