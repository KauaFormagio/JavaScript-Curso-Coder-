//----------Pratica 01 ------------//

//Declaração da variável
let numero01 = parseInt(prompt('Digite um número entre 1 e 10:'))

//Declaração da repetição
if(numero01>=1 && numero01<=10){
    for (let i = 1; i <= 10; i++){
        if(i<numero01){
            console.log(i)
        }else{
            break
        }
    }
}else{
    alert('Número digitado incorreto')
}

//----------Pratica 02 ------------//

//Declaração da variável
let numero02 = parseInt(prompt('Digite um número:'))
let fatorial = 1;
let contador = 1;

alert('Número digitado: '+numero02)

//Declaração da repetição
while (numero02!=0){
     fatorial = fatorial * contador
     contador ++
     numero02 --
}

alert('Seu fatorial é: '+fatorial)

//----------Pratica 03 ------------//

//Declaração da variável
let numero03 = parseInt(prompt('Digite um número de 0 a 100:'))
let valor = 0;

//Verificação do número
if (numero03 >= 0 && numero03 <= 10) {
    valor = 1
}else if(numero03 >= 10 && numero03 <= 20) {
    valor = 1
}else if(numero03 >= 20 && numero03 <= 30) {
    valor = 2
}else if(numero03 >= 30 && numero03 <= 40) {
    valor = 3
}else if(numero03 >= 40 && numero03 <= 50) {
    valor = 4
}else if(numero03 >= 50 && numero03 <= 60) {
    valor = 5
}else if(numero03 >= 60 && numero03 <= 70) {
    valor = 6
}else if(numero03 >= 70 && numero03 <= 80) {
    valor = 7
}else if(numero03 >= 80 && numero03 <= 90) {
    valor = 8
}else if(numero03 >= 90 && numero03 <= 100) {
    valor = 9
}

//Declaração do switch case
switch (valor) {
    case 1:
        alert('familia do 10')
        break;
    case 2:
        alert('familia do 20')
        break;
    case 3:
        alert('familia do 30')
        break;
    case 4:
        alert('familia do 40')
        break;
    case 5:
        alert('familia do 50')
        break;
    case 6:
        alert('familia do 60')
        break;
    case 7:
        alert('familia do 70')
        break;
    case 8:
        alert('familia do 80')
        break;
    case 9:
        alert('familia do 90')
        break;
    default:
        alert('Sem familia')
        break;
}