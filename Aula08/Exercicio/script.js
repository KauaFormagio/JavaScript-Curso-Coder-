class alimentos{
    constructor(nome,cor,peso,preco){
        this.nome = nome.toLowerCase();
        this.cor = cor.toLowerCase();
        this.peso = parseFloat(peso);
        this.preco = parseFloat(preco);
    }
    apresentar(){
        console.log("A(O) "+this.nome+" é "+this.cor+" pesa "+this.peso.toFixed(2)+"Kg e custa R$"+this.preco.toFixed(2));
    }
}

let alimento1 = new alimentos("banana","amarela",1,2.50);
alimento1.apresentar();

let alimento2 = new alimentos (prompt("Digite o nome do alimento: "),
prompt("Digite a cor do alimento: "),
prompt("Digite o peso do alimento em Kilogramas\n(Utilizando . para decimais): "),
prompt("Digite o preço do alimento em reais\n(Utilizando . para decimais): "));

alimento2.apresentar();