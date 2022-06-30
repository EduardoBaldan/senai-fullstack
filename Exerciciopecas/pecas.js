// Váriaveis, são um espaço na memória para guardar algum valor
let pesoPeca = 100

// pesoPeca - Camel Case
// peso_peca - Snake case
// PesoPeca - Pascal Case

if(pesoPeca > 100) {
    console.log("peso maior que 100g, logo, podemos cadastrar a peça!!!")
} else {
    console.log("Peso insuficiente, não é possivel cadastrar.")
}

let numeroPecas;

numeroPecas = 10;
//number

if(numeroPecas < 10) {
    console.log("Ainda há espaço na caixa, podemos cadastrar a peça")
} else {
    console.log("Não há espaço disponivel na caixa")
}


let nomePeca = "Di"

//ASCII TABLE

console.log("O comprimento do nome da peça é:", nomePeca.length)

if(nomePeca.length < 3) {
    console.log("Nome de peça muito curto, não é possivel cadastrar")
} else {
    console.log("Nome de peça adequado, podemos cadastrar")
}