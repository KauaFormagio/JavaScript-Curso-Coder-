//------------------------------------------------//

//Declaração de Funções
function saudacao() {
    console.log("Olá, estudantes!");
}

//Chamada da função
saudacao();

//------------------------------------------------//

//Argumentos declarado entre '()' na função
function unirPalavras(palavra1, palavra2) {
    console.log(palavra1 + " " + palavra2);
}

//Parâmetros declarado na chamada da função entre '()'
unirPalavras("Olá", "Coder"); // -> “Olá Coder”
unirPalavras("Cursando", "JS"); // -> “Cursando JS”

//Declaração de variável para armazenar o resultado da soma
var resultado = 0;

//Função que soma dois números e atribui o resultado
function somar(primeiroNumero, segundoNumero) {
    resultado = primeiroNumero + segundoNumero
}

//Função que mostra o resultado no console
function mostrar(mensagem) {
    console.log(mensagem)
}

//Chamamos primeiro para somar e depois para mostrar
somar(6, 3);
mostrar(resultado);

//------------------------------------------------//

//Exemplo de argumentos e parâmetros - Calculadora
function calculadora(primeiroNumero, segundoNumero, operacao) {
    if (operacao == "+") {
        return primeiroNumero + segundoNumero;
    }
    else if (operacao == "-") {
        return primeiroNumero - segundoNumero;
    }
    else if (operacao == "*") {
        return primeiroNumero * segundoNumero;
    }
    else if (operacao == "/") {
        return primeiroNumero / segundoNumero;
    }
    else {
        return 0;
    }
}
console.log(calculadora(10, 5, "*"));

//------------------------------------------------//

//Função Anônimas
var soma1 = function (a, b) { return a + b }
var subtrair1 = function (a, b) { return a - b }

console.log(soma1(15, 20))
console.log(subtrair1(15, 5))

//Função Arrow
var soma2 = (a, b) => { return a + b }
//Se for uma função de uma só linha com um retorno, não é necessário escrever o corpo. 
var subtrair2 = (a, b) => a - b;

console.log(soma2(15, 20))
console.log(subtrair2(20, 5))

//------------------------------------------------//

//Exemplo de Função Arrow - Calculadora
var somarArrow = (a, b) => a + b
var subtrairArrow = (a, b) => a - b
var calcularICMSArrow = x => x * 0.21

var precoProduto = 500
var desconto = 50

//Calculo o PrecoProduto + ICMS - Desconto
var icms = calcularICMSArrow(precoProduto)
var soma = somarArrow(precoProduto, icms)
var novoPreco = subtrairArrow(soma, desconto)
console.log(novoPreco)
