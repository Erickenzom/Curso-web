//JQuerry: biblioteca do java script q permite simplificar a sintaxe

//JavaScript - ID
    // document.getElementById("nomeId");

//JQuerry - ID
    //$("#nomeId")

//JavaScript - Classe
    //document.getElementsByClassName("nomeClasse");

//JQuerry - Classe
    //$(".nomeClasse")

//JavaScript - Tag
    //document.getElementsByTagName("p");

//JQuerry - Tag
    //$("p");


//Seleciona todos os elementos de um HTML
    //$("*");
//Seleciona o primeiro elemento <p></p>
    //$("p:first");
//Seleciona o ultimo elemento <p></p>
    //$("p:last");
//Seleciona todos os elementos com o atributo disabled
    //$("[disabled]")

//Combinando seleçoes
//JS
    //document.getElementById("nomeId").getElementsByTagName("p");
//JQ
    //$("#nomeId p");

//Programação orientada a objeto

var nome = "Zezinho";
var sobrenome = "Silva";
var idade = 12;

var pessoa = {
    nome:"Zezinho", sobrenome:"Silva", idade = 12
}