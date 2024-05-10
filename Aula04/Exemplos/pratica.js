//----------Pratica 01 ------------//

//Declaração da função
function numPar(){
    var num01 = parseInt(prompt('Insira um número'));
    if (num01 % 2 == 0){
        alert('O número: '+num01+' é par');
    }else{
        alert('O número: '+num01+' é ímpar');
    }
}

//Chamada da função 
numPar();
numPar();
numPar();

//----------Pratica 02 ------------//

//Declaração da função
function subtracao(primeiroNumero, segundoNumero){
    if (primeiroNumero > segundoNumero){
        return primeiroNumero - segundoNumero;
    }else{
        return segundoNumero - primeiroNumero;
    }
}

//Declaração das Variáveis
var num01 = prompt('Insira o primeiro número:').replace(',','.');
num01 = parseFloat(num01);
var num02 = prompt('Insira o segundo número').replace(',','.');
num02 = parseFloat(num02);

//Chamada da função
var resultado = parseFloat(subtracao(num01,num02));
console.log(resultado.toFixed(2));

//----------Pratica 03 ------------//

//Declaração da função
var somaCalculadora = (a,b) => a + b
var subtracaoCalculadora = (a,b) => a - b
var produtoCalculadora = (a,b) => a * b
var divisaoCalculadora = (a,b) => a / b

//Declaração Variáveis
var num01 = prompt('Insira o primeiro número:').replace(',','.');
num01 = parseFloat(num01);
var num02 = prompt('Insira o segundo número').replace(',','.');
num02 = parseFloat(num02);

var operacao = prompt('Insira sua operação matemática ([+],[-],[*],[/]):')

//Verificação da operação e chamada da função
if (operacao == '+'){
    alert(somaCalculadora(num01,num02))
}else if(operacao == '-'){
    alert(subtracaoCalculadora(num01,num02))
}else if (operacao == '*'){
    alert(produtoCalculadora(num01,num02))
}else if (operacao == '/'){
    alert(divisaoCalculadora(num01,num02))
}else{
    alert('Operação não encontrada');
}