var nomeUsuario = prompt("Qual o seu nome? ");
var idadeUsuario = prompt("Quantos anos você tem? ");
var linguaguemUsuario = prompt("Qual linguagem de programação você está estudando?");

console.log("Olá " + nomeUsuario + ", você tem " + idadeUsuario + " anos e já está aprendendo " + linguaguemUsuario + "!");

var pergunta = prompt("Você gosta de estudar " + linguaguemUsuario + "? Responda com o número 1 para SIM ou 2 para NÃO.");

if (pergunta) {
  console.log("Muito bom! Continue estudando e você terá muito sucesso.")
} else {
  console.log("Ahh que pena... Já tentou aprender outras linguagens?")
}