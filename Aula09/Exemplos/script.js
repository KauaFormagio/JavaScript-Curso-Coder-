//------------------------------------------------//

//                    Arrays                      //

//------------------------------------------------//

// Declaração de array vazio
const arrayA = [];

// Declaração de array com números
const arrayB = [1, 2];

// Declaração de array com strings
const arrayC = ["C1", "C2", "C3"];

// Declaração de array com booleanos
const arrayD = [true, false, true, false];

// Declaração de array misto
const arrayE = [1, false, "C4"];

//------------------------------------------------//

//Acesso a Array
const numeros = [1, 2, 3, 4, 5];
console.log(numeros[0]) // 1; 
console.log(numeros[3]) // 4; 

let resultado = numeros[1] + numeros[2]
console.log(resultado) // 5;

//------------------------------------------------//

//Percorrer Array
const numerosB = [1, 2, 3, 4, 5];

for (let index = 0; index < 5; index++) {
    console.log(numerosB[index]);
}

//------------------------------------------------//

//             Métodos e Propriedades             //

//------------------------------------------------//

//Length - identifica quantos elementos tem a array

const meuArray = ["rosa", "verde", "azul"];
console.log(meuArray.length); //imprime 3

for (let i = 0; i < meuArray.length; i++) {
    console.log(meuArray[i]);
}

//Push - acrescenta itens no final da array
//unshift - acrescenta itens no inicio da array

meuArray.push("amarelo");
console.log(meuArray.length); // imprime 4
console.log(meuArray); // imprime ["rosa","verde","azul","amarelo"]

meuArray.unshift("vermelho");
console.log(meuArray.length); // imprime 5
console.log(meuArray); // imprime ["vermelho","rosa","verde","azul","amarelo"]

//------------------------------------------------//

//Pop - Elimina o ultimo item da array
//shift - Elimina o primeiro item da array

const nomesA = ["Luis", "Ana", "Julia", "João"];
console.log(nomesA);

nomesA.pop();
console.log(nomesA); // ["Luis", "Ana", "Julia"]

nomesA.shift();
console.log(nomesA); // ["Ana", "Julia"]

//Splice - Elimina uma determinada quantidade de itens
//Funciona com dois parâmetros, onde o primeiro
//define a posição a qual sera iniciada a eliminação 
//e o ultimo define a quantidade apartir desta posição

const nomesB = ["Rita", "Mara", "Luiz", "Ana", "Léo", "João", "Marco"];
nomesB.splice(2, 4) // Elimina 4 itens apartir da posição 2 (incluindo a posição 2)

console.log(nomesB) // ["Rita", "Mara", "Marco"]

//------------------------------------------------//

//Join - podemos gerar uma string com todos os elementos 
//do array, separados pelo valor que utilizarmos como 
//parâmetro

const nomesC = ["Luis", "Ana", "Julia", "João"]

console.log(nomesC.join(",")) // Luis, Ana, Julia

console.log(nomesC.join("*")) // Luis*Ana*Julia

//Concat - juntar duas Arrays

const caes = ["Pupy", "Ronnied"]
const gatos = ["Mishi", "Garfieldd", "Zuri"]

const animais = caes.concat(gatos)
console.log(animais) 
// ["Pupy", "Ronnied", "Mishi", "Garfieldd", "Zuri"]

//Spice - Cria uma nova array com um n° de itens de outra array
//Funciona com dois parâmetros, onde o primeiro
//define a posição a qual sera iniciada e o ultimo define
//a quantidade apartir desta posição
//O array original não é modificado.

const nomesD = ["Rita", "Pedro", "Miguel", "Ana", "Vanessa"];

const masculinos = nomesD.slice(1, 3); // ["Pedro","Miguel"]

//------------------------------------------------//

//Includes - Permite saber se um valor esta ou não em uma array

const nomesE = ["Rita", "Pedro", "Miguel", "Ana", "Vanessa"];

console.log(nomesE.includes("Rita")); // true
console.log(nomesE.includes("Miguel")); // true
console.log(nomesE.includes("Julieta")); // false

//IndexOf - Permite saber o índice de um elemento em um array. 

const nomesF = ["Rita", "Pedro", "Miguel", "Ana", "Vanessa"];

console.log(nomesF.indexOf("Rita")); // 0
console.log(nomesF.indexOf("Ana")); // 3
console.log(nomesF.indexOf("Julieta")); // -1

//------------------------------------------------//

//Reverse - Inverte a array

const nomesG = ["Rita", "Pedro", "Miguel", "Ana", "Vanessa"];

nomesG.reverse();
console.log(nomesG); // ["Vanessa", "Ana","Miguel", "Pedro","Rita"]

//------------------------------------------------//

// Exemplo 01

//Declaração de array e variável para determinar quantidade
const listaNomes = [];
let quantidade = 5;

//Uso de do...while para carregar nomes no array por prompt()
do {
    let entrada = prompt("Inserir nome");
    listaNomes.push(entrada.toUpperCase());
    console.log(listaNomes.length);
} while (listaNomes.length != quantidade)

//Concatenação com um novo array de dois elementos
const novaLista = listaNomes.concat(["ANA", "EMA"]);

//Saída com salto de linha após cada item usando join
console.log(novaLista.join("\n"));

//------------------------------------------------//

//Exemplo 02

const nomes = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanessa']
console.log(nomes)

// Recebo como parâmetro o elemento a ser eliminado
const eliminar = (nome) => {
    // Busco seu índice no array
    let index = nomes.indexOf(nome)

    // Se ele existir, ou seja, for diferente de -1, será eliminado com splice
    if (index != -1) {
        nomes.splice(index, 1)
        console.log(nomes)
    }
    else {
        console.log("O nome " + nome + " não foi encontrado!")
    }
}

let nomeEliminar = prompt("Qual nome deseja eliminar?")
eliminar(nomeEliminar);

//------------------------------------------------//