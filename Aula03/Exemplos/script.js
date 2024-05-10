//------------------------------------------------//

//Estrutura comumente utilizada para controle de fluxo
if (true) {
    // bloco de código a ser executado
    console.log("verá esta mensagem");
}

//------------------------------------------------//

//Exemplos Condicionais 01
var umNumero = 5
// Comparando se umNumero é igual a 5
if (umNumero == 5) {
    console.log("verá esta mensagem");
}

// Comparando se umNumero é igual a 6
if (umNumero == 6) {
    console.log("não verá esta mensagem");
}

//------------------------------------------------//

//Exemplos Condicionais 02
var umaCor = "Vermelho"
// Comparamos se umaCor é igual "Vermelho"
if (umaCor == "Vermelho") {
    console.log("a cor é Vermelho");
} else {
    //Quando umaCor NÃO é "Vermelho"
    console.log("a cor NÃO é Vermelho");
}

//------------------------------------------------//

//Exemplos Condicionais 03
var nomeUsuario = prompt("Inserir nome de usuário");
if (nomeUsuario == "") {
    alert("O nome de usuário não foi inserido");
}
else {
    alert("Nome de usuário inserido: " + nomeUsuario);
}

//------------------------------------------------//

//Exemplos Condicionais aninhadas
var combustivel = "Gasolina";

if (combustivel == "GNV") {
    alert("O carro é movido à Gás");
}
else if (combustivel == "Gasolina") {
    alert("O carro é movido à Gasolina");
}
else if (combustivel == "Álcool") {
    alert("O carro é movido à Álcool");
}
else {
    alert("O carro não funciona");
}

//------------------------------------------------//

//Condições Boleanas
var idade = 10;
var possui10anos = (idade == 10); // seu valor será true

if (possui10anos) {
    alert("Essa pessoa possui 10 anos de idade");
}

//------------------------------------------------//

//Operadores Relacionais (Diferente !=)
var preco = 50.5;
if (preco != 0) {
    alert("O produto não é gratuito");
}

//Comparação com maior (> , >=)
if (preco > 100) {
    alert("O preço é maior que 100");
}
else if (preco >= 70) {
    alert("O preço é maior ou igual a 70");
}
else {
    alert("O preço é menor que 70");
}

//Comparação com menor (< , <=)
if (preco < 10) {
    alert("O preço é menor que 10");
}
else if (preco <= 20) {
    alert("O preço é menor ou igual a 20");
}
else {
    alert("O preço é maior que 20");
}

//------------------------------------------------//

//Operadores Lógico AND (&&)
var nome = prompt("Inserir nome");
var sobrenome = prompt("Inserir sobrenome");

if ((nome != "") && (sobrenome != "")) {
    alert("Nome: " + nome + "\nSobrenome: " + sobrenome);
} else {
    alert("Erro ao inserir nome e sobrenome");
}

//Operadores Lógico OR (||)
var nome = prompt("Inserir nome");

if ((nome == "ANA") || (nome == "ana") || (nome == "Ana")) {
    alert("O nome inserido é Ana");
} else {
    alert("O nome inserido NÃO é Ana");
}

//Operadores Lógico NOT (!)
var nome = prompt("Inserir nome");
var eVazio = nome == "";

if (!eVazio) {
    alert("Nome: " + nome);
} else {
    alert("Nome é vazio");
}

//------------------------------------------------//

//Combinações dos operadores
//Lógico e Relacional
var idade = prompt("Inserir idade");

if (idade < 18) {
    alert("É jovem");
}
else if ((idade >= 18) && (idade < 60)) {
    alert("É adulto");
}
else {
    alert("É idoso");
}

//AND e OR
var nome = prompt("Inserir nome");

if ((nome != "") && ((nome == "EMA") || (nome == "ema") || (nome == "Ema"))) {
    alert("Olá, Ema");
} else {
    alert("Erro: Inserir nome válido");
}

//------------------------------------------------//