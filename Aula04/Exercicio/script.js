function valoresIniciais(){
    alert("Olá!\n\nBem vindo ao calculo de IMC");
    var peso = prompt("Insira o valor de seu peso a ser calculado:");
    if (peso == null){
        return;
    }
    var altura = prompt("Insira sua altura a ser calculada:");
    if(altura == null){
        return;
    }
    calculoImc(peso,altura);
}

function calculoImc(peso,altura){
    var calculoPeso = parseFloat(peso.replace(/[^\d.,]/g, '').replace(',','.'));
    var calculoAltura = parseFloat(altura.replace(/[^\d.,]/g, '').replace(',','.'));
    var imc = calculoPeso/(calculoAltura^2);
    resultadoImc(imc);
    classificaçãoImc(imc);
}

function resultadoImc(imc){
    alert("O valor de seu IMC é de:"+imc.toFixed(2));
}

function classificaçãoImc(imc){
    if(imc<18.5){
        alert("Classificação - Baixo Peso");
    }else if(imc>=18.5 || imc<24.99){
        alert("Classificação - Normal");
    }else if(imc>25.00 || imc<29.99){
        alert("Classificação - Sobrepeso");
    }else{
        alert("Classificação - Obesidade");
    }
}

valoresIniciais();