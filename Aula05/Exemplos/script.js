//------------------------------------------------//

// Propiedades do Escopo

//Cada escopo é um espaço fechado que nos permite criar blocos de trabalho bem
//diferenciados e independentes, sem que nos preocupemos com uma possível
//repetição de nomes de variáveis, pois sabemos que são entendidas como 
//diferentes de acordo com o local de sua declaração.

//------------------------------------------------//

//Exemplos de Escopo 1
function hello(name) {
    // Isto aqui é um escopo
}

var resultado01 = 0

function somar(primeiroNumero, segundoNumero) {
    resultado01 = primeiroNumero + segundoNumero;
}
somar(5, 6);

//É possível acessar a variável resultado01, pois é global
console.log(resultado01);

function somar(primeiroNumero, segundoNumero) {
    var resultado02 = primeiroNumero + segundoNumero;
}
//Não é possível acessar a variável resultado02 fora do bloco
console.log(resultado02);

//------------------------------------------------//

//Diferenças entre Variáveis

var nome = "Maria" // variável global

function saudacao() {
    var nome = "João" // variável local
    console.log(nome) // -> "João"
}

//Acessa nome local
saudacao()

//Acessa nome global
console.log(nome)   // -> "Maria"

//------------------------------------------------//

//Exemplo Escopo 2

function somar(num1, num2) {
    var resultado = num1 + num2
    return resultado
}

function subtrair(num1, num2) {
    var resultado = num1 - num2
    return resultado
}

//------------------------------------------------//

//Variáveis let e const 

//let - pode mudar o valor diversas vezes
let idade = 5
idade = 34

//const - não pode mudar o seu valor
const sobrenome = "Maria"
// não é possível modificá-la
sobrenome = "Silva"

//------------------------------------------------//

//usando var
if (true) {
    var variavel1 = 'teste';
}
console.log(variavel1);// <-- Funciona

//usando let
if (true) {
    let variavel2 = 'teste';
    console.log(variavel2);// <-- Funciona
}
console.log(variavel2);// <-- NÃO funciona

//------------------------------------------------//

//Propriedades do Hosting

/*O hoisting é um comportamento presente no JavaScript que faz com que 
declarações de variáveis e funções sejam "elevadas" para o topo do escopo 
em que são definidas. 

Isso significa que, independentemente de onde uma declaração de variável 
ou função apareça no código, ela será tratada como se estivesse no topo 
do escopo.
*/

//Exemplo 1 - Não eleva (hoist)
var x = 1;
console.log(x + " " + y); // '1 undefined'
var y = 2; 
//Isso não funcionará, pois o JavaScript apenas eleva declarações

//Example 2 - Hoists
var num1 = 3; 
num2 = 4; 
console.log(num1 + " " + num2); //'3 4'
var num2; //Declara num2 para hoisting

//Example 3 - Hoists
a = 'Cran'; 
b = 'berry'; 
console.log(a + "" + b); // 'Cranberry'
var a, b; //Declara ambos a & b para hoisting

//------------------------------------------------//

//Variáveil This

//Utilizada em uma função simples this recebe o valor global
var nome = "Lucas"

function obterNome() {
    var nome = "Jonas"
    console.log(this.nome) //Lucas
}

obterNome()
console.log(this.nome) //Lucas

//Utilizada em uma função construtora this recebe valores do bloco e 
//retorna ao seu valor original ao sair do bloco da função
var nome = "Lucas"

function obterNome() {
    this.nome = "Jonas"
    console.log(this.nome) //Jonas
}
new obterNome()
console.log(this.nome) //Lucas

//------------------------------------------------//