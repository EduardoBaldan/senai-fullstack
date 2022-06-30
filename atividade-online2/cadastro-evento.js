//Programa para cadastro de participantes no evento

//variaveis do sistema
let idadeDoParticipante = 18
let dataDoEvento = 05/01/2022
let totalDeParticipantes = 5
let participantes = ["a","b","c","d","e"]
const palestrantes = ["A1","B2","C3"]

//solicitar data de nascimento do participante
console.log("Digite sua data de nascimento:")

if (idadeDoParticipante >= 18) {
    console.log("Cadastro permitido, registre o evento")
} else if (idadeDoParticipante <=17)  {
   console.log("Cadastro não realizado!")
   return false 
} 

//validar a data do evento
//if ((new Date() < dataDoEvento)) {
  //  console.log("Cadastro não realizado! Data inválida.")
//} else {
  //  console.log("Verificando quantidade de inscritos, aguarde...")
//}

if ((new Date() < dataDoEvento)) {
    console.log("Cadastro não realizado! Data inválida.")
} else {
    console.log("Verificando quantidade de inscritos, aguarde...")
}

    //verificar quantidade de inscritos no evento
if (totalDeParticipantes > 100) {
    console.log("Cadastro não realizado! Nº de Participantes excedido.")
} else {
    console.log("Cadastro realizado com sucesso! Veja a lista de participantes:")
}    

// listar Palestrantes e participantes do evento
console.log("Palestrantes:")
console.log(palestrantes)
console.log("Participantes")
console.log(participantes)