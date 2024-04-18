// //exemplo 01
// let xicara1 = {
//     cor: "branca",
//     forma: "redonda",
//     peso: 5,
//     capacidade: 10
// }

// console.log(xicara1);

// //exemplo 02
// let xicara2 = {
//     cor: "branca",
//     forma: "redonda",
//     peso: 5,
//     capacidade: 10
// }

// console.log(xicara2.cor);
// console.log(xicara2.peso);
// console.log(xicara2["forma"]);
// console.log(xicara2["capacidade"]);

// //exemplo 03
// let xicara3 = {
//     cor: "branca",
//     forma: "redonda",
//     peso: 5,
//     capacidade: 10
// }

// xicara3.peso = 7;
// xicara3["cor"] = "rosa";

// console.log(xicara3);

// //exemplo 04
// function xicara4(cor,forma,peso,capacidade){
//     this.cor = cor;
//     this.forma = forma;
//     this.peso = peso;
//     this.capacidade = capacidade;
// }

// const xicara41 = new xicara4("branca","redonda",5,10);
// console.log(xicara41);

// //exemplo 05
// function pessoa(nome,idade,rua){
//     this.nome = nome;
//     this.idade = idade;
//     this.rua = rua;
//     this.falar = function(){
//         console.log("Olá, sou "+this.nome)
//     }
// }

// const pessoa1 = new pessoa("Kauã",25,"Eliseu Viscont");
// pessoa1.falar();

// //exemplo 06

// //uma função é um bloco de código escrito para
// //realizar algum conjunto específico de tarefas
// function somar(a,b){
//     let soma = a + b;
//     return soma;
// }
// console.log(somar(1,2));

// //um método é uma propriedade de um objeto
// //que contém uma definição de função
// let pessoa = {
//     nome:"Mariana",
//     idade: 25,
//     informacoes: function(){
//         return this.nome + " tem " + this.idade + " anos"
//     }
// }
// console.log(pessoa.informacoes());

// //exemplo 07
// let texto = "Olá, Coder";

// //Propriedade: comprimento do texto.
// console.log(texto.length);
// //Método: Converter minúscula.
// console.log(texto.toLowerCase());
// //Método: Converter maiúscula.
// console.log(texto.toUpperCase());

// //exemplo 08
// const pessoa = {
//     nome:"Mariana",
//     idade: 25
// };

// //retorna true
// console.log("nome" in pessoa);
// //retorna false
// console.log("origem" in pessoa);

// //exemplo 09
// const pessoa = {
//     nome:"Mariana",
//     idade: 25    
// };

// //percorre todas propriedades
// for (const propriedade in pessoa) {
//     console.log(pessoa[propriedade]);
// }

// //exemplo 10
// class Carro {
//     constructor(marca,ano,cor){
//         this.marca = marca;
//         this.ano = ano;
//         this.cor = cor;
//     }
//     apresentar(){
//         let idade = 2023 - this.ano;
//         console.log("O "+this.marca+" é "+this.cor+" e tem "+idade+" anos")
//     }
// }

// const meuCarro = new Carro("Ford",2014,"vermelho");
// meuCarro.apresentar();
