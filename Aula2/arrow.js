//  const somar = (n1,n2) => {
//     console.log("Recebi o número "+ n1)
//     console.log("Recebi o número "+ n2)
//   const resultado = n1+n2  
//     console.log("A soma desses valores é " + (n1+n2))
//  }
//  somar(1,2)



// let somar = (a,b) => a+b

// console.log(somar(1,2))

let horaAtual = () => {
    let data = new Date();
    return data.getHours() + ":" + data.getMinutes();
}

console.log(horaAtual())