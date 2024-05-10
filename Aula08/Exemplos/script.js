//------------------------------------------------//

//               Métodos e Classe                 //

//------------------------------------------------//

//(Exemplos)
let xicara1 = {
    cor: "branca",
    forma: "redonda",
    peso: 5,
    capacidade: 10
}

console.log(xicara1);

let xicara2 = {
    cor: "branca",
    forma: "redonda",
    peso: 5,
    capacidade: 10
}

console.log(xicara2.cor);
console.log(xicara2.peso);
console.log(xicara2["forma"]);
console.log(xicara2["capacidade"]);

let xicara3 = {
    cor: "branca",
    forma: "redonda",
    peso: 5,
    capacidade: 10
}

xicara3.peso = 7;
xicara3["cor"] = "rosa";

console.log(xicara3);

//------------------------------------------------//

function xicara4(cor,forma,peso,capacidade){
    this.cor = cor;
    this.forma = forma;
    this.peso = peso;
    this.capacidade = capacidade;
}

const xicara5 = new xicara4("branca","redonda",5,10);
console.log(xicara5);

function pessoa(nome,idade,rua){
    this.nome = nome;
    this.idade = idade;
    this.rua = rua;
    this.falar = function(){
        console.log("Olá, meu nome é "+this.nome+" tenho "+this.idade+" anos e moro na rua "+this.rua)
    }
}

const pessoa1 = new pessoa("Kauã",25,"Eliseu Viscont");
pessoa1.falar();

//------------------------------------------------//

//uma função é um bloco de código escrito para
//realizar algum conjunto específico de tarefas
function somar(a,b){
    let soma = a + b;
    return soma;
}
console.log(somar(1,2));

// um método é uma propriedade de um objeto
// que contém uma definição de função
let pessoa = {
    nome:"Mariana",
    idade: 25,
    informacoes: function(){
        return this.nome + " tem " + this.idade + " anos"
    }
}
console.log(pessoa.informacoes());

//------------------------------------------------//

let texto = "Olá, Coder";

//Propriedade: comprimento do texto.
console.log(texto.length);
//Método: Converter minúscula.
console.log(texto.toLowerCase());
//Método: Converter maiúscula.
console.log(texto.toUpperCase());

const pessoa = {
    nome:"Mariana",
    idade: 25
};

//retorna true
console.log("nome" in pessoa);
//retorna false
console.log("origem" in pessoa);

const pessoa = {
    nome:"Mariana",
    idade: 25    
};

//percorre todas propriedades
for (const propriedade in pessoa) {
    console.log(pessoa[propriedade]);
}

//------------------------------------------------//

class Carro {
    constructor(marca,ano,cor){
        this.marca = marca;
        this.ano = ano;
        this.cor = cor;
    }
    apresentar(){
        let idade = 2023 - this.ano;
        console.log("O "+this.marca+" é "+this.cor+" e tem "+idade+" anos")
    }
}

const meuCarro = new Carro("Ford",2014,"vermelho");
meuCarro.apresentar();

//------------------------------------------------//