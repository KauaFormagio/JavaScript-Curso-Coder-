//----------Pratica 01 ------------//

//Declaração Variáveis
var num01 = prompt('Insira um número de 1 a 5:').replace(',', '.');
num01 = parseFloat(num01);

//Verificação se o número esta entre 1 e 5
if (num01 >= 1 && num01 <=5 ){
    alert(num01);
}else{
    alert('Número Inserido é menor que 1 ou maior que 5');
}

//----------Pratica 02 ------------//

//Declaração Variáveis
var num02 = prompt('Insira um número de 1 a 100:').replace(',', '.');
num02 = parseFloat(num02);

//Verificação se o número esta entre 1 e 100
if (num02 >= 1 && num02 <= 100){
    alert(num02+' Inserido');
}else{
    alert('Número inserido não esta entre 1 e 100');
}
//Verificação do Intervalo
if (num02 >= 1 && num02 <= 10){
    alert('Intervalo entre 1 e 10');
}else if(num02 > 10 && num02 <= 20){
    alert('Intervalo entre 10 e 20');
}else if(num02 > 20 && num02 <= 30){
    alert('Intervalo entre 20 e 30');
}else if(num02 > 30 && num02 <= 40){
    alert('Intervalo entre 30 e 40');
}else if(num02 > 40 && num02 <= 50){
    alert('Intervalo entre 40 e 50');
}else if(num02 > 50 && num02 <= 60){
    alert('Intervalo entre 50 e 60');
}else if(num02 > 60 && num02 <= 70){
    alert('Intervalo entre 60 e 70');
}else if(num02 > 70 && num02 <= 80){
    alert('Intervalo entre 70 e 80');
}else if(num02 > 80 && num02 <= 90){
    alert('Intervalo entre 80 e 90');
}else if(num02 > 90 && num02 <= 100){
    alert('Intervalo entre 90 e 100');
}

//----------Pratica 03 ------------//

//Declaração Variáveis
var letra = prompt('Insira uma letra:');

//Verificação da letra
if (letra == ''){
    alert('Letra não inserida')
}else{
    if ((letra == 'a')||(letra == 'e')||(letra == 'i')||(letra == 'o')||(letra == 'u')||(letra == 'A')||(letra == 'E')||(letra == 'I')||(letra == 'O')||(letra == 'U')){
        alert('Vogal: '+letra+' inserida');
    }else{
        alert('Palavra: '+letra+' inserida');
    }
}