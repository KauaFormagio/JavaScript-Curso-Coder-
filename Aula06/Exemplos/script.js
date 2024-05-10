//------------------------------------------------//

//               Ciclos e Iterações               //

//------------------------------------------------//

//Laço de repetição - For (Exemplos)
for (let i = 0; i < 10; i++) {
    console.log(i);
}
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Solicitamos um valor ao usuário
let numero = parseInt(prompt("Inserir Número"));

// A cada repetição, calculamos o número inserido vezes o número da repetição (i)
for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(numero + " X " + i + " = " + resultado);
}

//------------------------------------------------//

//Sentença Break
for (let i = 1; i <= 5; i++) {
    //Se a variável i for igual à 3, o for será interrompido. 
    if (i == 3) {
        break;
    }
    console.log(i);
}

//Sentença Continue
for (let i = 1; i <= 5; i++) {
    //Se a variável i for 3, não se interpreta essa repetição.
    if (i == 3) {
        continue;
    }
    console.log(i);
}

//------------------------------------------------//

//Laço de repetição - While (Exemplos)
let repetir01 = true;
while (repetir01) {
    console.log("Ao infinito e...Além!");
}

let entrada = prompt("Inserir um dado");
//Repetimos com while até que o usuário digite "sair"

while (entrada != "sair") {
    alert("O usuário inseriu " + entrada);
    //Solicitamos novamente um dado
    //Na próxima iteração, será verificado se não é "sair"
    entrada = prompt("Inserir outro dado");
}

//------------------------------------------------//

//Laço de repetição - Do...While (Exemplos)
let repetir02 = false;
do {
    console.log("Só uma vez!");
} while (repetir02)

let numero02 = 0;
do {
    //Repetimos com do...while enquanto o usuário não inserir um número
    numero02 = prompt("Inserir um número");
    console.log(numero02);
    //O loop será interrompido quando não digital um número   
} while (parseInt(numero02));

//------------------------------------------------//

//Sintaxe de Switch...Case (Exemplos)
switch (numero) {
    case 5:
        break;

    case 8:
        break;

    case 20:
        break;

    default:
        break;
}

let entrad = prompt("Inserir um nome");
//Repetimos até que "sair" seja inserido.
while (entrad != "sair") {
    switch (entrad) {
        case "ANA":
            alert("OLÁ, ANA");
            break;
        case "JOÃO":
            alert("OLÁ, JOÃO");
            break;
        default:
            alert("QUEM É VOCÊ ? ")
            break;
    }
    entrad = prompt("Inserir um nome");
}