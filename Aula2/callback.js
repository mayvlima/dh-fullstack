const somar = (numeroA,numeroB) => numeroA + numeroB;

const calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB)

console.log(calculadora(10, 20, somar))