/*function soma(n1, n2){
    return n1 + n2;
}*/

function clicou(){
    document.getElementById("saudacao").innerHTML = "<b>Saudações terraqueo, clique aqui tbm<b/>";
    console.log(document.getElementById("saudacao"));
    //console.log("Ao infinito, e alééém");    
}

function redirecionar(){
    window.open("https://nitechacademy.com.br/"); // abrirá uma outra aba no navegador ao ser clicado
    /*
    window.location.href = "https://nitechacademy.com.br/"; -> abri na mesma página do navegador
    */
}

function trocar(elemento){
    elemento.innerHTML = "Tem uma cobra na minha bota!";
    //document.getElementById("mousemove").innerHTML = "Tem uma cobra na minha bota!";
    //alert("Aparece um texto aqui");

}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página carregada com sucesso!");
}

function functionChange(elemento) {
    console.log(elemento.value);
}

//console.log(soma(10,20));
/*function setReplace(frase, heroi, heroi_2){
    return frase.replace(heroi, heroi_2);
    alert(setReplace("Eu sou o Homem de ferro", "Homem de ferro", "Homem Aranha"));
}*/

/*
var validar = 0;
function validaIdade(idade){

    if(idade >= 18){
        validar = true;
    } else{ 
        validar = false;
    }

    return validar;
} 

var idade = prompt("Qual é a sua idade? ");
validaIdade(idade);
console.log(validar);*/




/*var d = new Date();
alert(d);*/

/*
var count;
for(count = 1; count <= 4; count++){
    console.log(count);
};
*/

/*
var count = 0;
while(count <= 8){
    console.log(count)
    alert(count);
    count++;
};
*/


/*
var idade = prompt("Qual é a sua idade? ");
if (idade >= 18){
    alert("Maior de idade ");
} else{
    alert("Menor de idade ");
};*/

/*
var fruta = [{nome:"banana" , cor:"amarela"} , {nome:"kiwi" , cor:"verde"}];
console.log(fruta);
alert(fruta[1].nome);


var fruta = {nome:"banana" , cor:"amarela"}
console.log(fruta.nome);
alert(fruta.cor);

var lista = ["abacaxi" , "banana", "caqui"];
lista.push("uva"); // incluindo item  na lista
lista.pop(); // excluindo item da lista

// .reverse() -> inverte a ordem da lista
// escolhe a posição do item da lista -> [0, 1, 2 ou 3]
console.log(lista.toString()); // converte elemento para string   
console.log(lista.join(" - ")); // inclui caracteres entre os elementos da lista
*/

/* var nome = "Mariane";
var n1 = 18;
var n2 = 12;
var frase = "Italia é o país do melhor macarrão do mundo"
// alert(nome + " tem, " + n1 + " anos");
//alert(n1 + n2); 

console.log(nome + " tem " + n1 + " anos");
console.log(n1 + n2); // variáveis não declarada corretamente não é identificada pelo navegador
console.log(frase.replace("Italia", "Arabia"));
console.log(frase.toLowerCase()); // usando letra miniscula (para letra maiuscula .toUppercase())
// alert(frase.replace("Italia", "Arabia")); */