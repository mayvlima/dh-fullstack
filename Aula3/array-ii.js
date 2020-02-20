let pessoa = ["Vinicius", 1.80, "Vinicius"];
console.log(pessoa);

//push
pessoa.push(22);
console.log(pessoa);

//pop
let excluido = pessoa.pop();
console.log(excluido);

//unshift
pessoa.unshift(22);
console.log(pessoa);

//shift
pessoa.shift();
console.log(pessoa);

//indexOf
console.log(pessoa.indexOf("Vinicius"));

//lastIndexOf
console.log(pessoa.lastIndexOf("Vinicius"));

//join
console.log(pessoa.join(" - "))