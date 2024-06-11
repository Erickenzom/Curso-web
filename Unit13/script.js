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
    nome:"Zezinho", 
    sobrenome:"Silva", 
    idade : 12,
}

console.log(pessoa.nome);

var NovaPessoa = {
    nome:"Zezinha", 
    sobrenome:"Silvio", 
    idade : 21,
    andar:function(){
       // alert( this.nome + " está andando e tem "+ this.idade + " anos")
    }
}

NovaPessoa.andar();

function People(_nome,_sobrenome,_idade){
    this.nome = _nome;
    this.sobrenome = _sobrenome;
    this.idade = _idade;
}

var pessoa1 = new People("julia", "amaral", 16);
var pessoa2 = new People("paulo", "cesar", 16);
var pessoa3 = new People("erick", "enzo", 15);
var pessoa4 = new People("dario", "junior", 14);

function Item(nome,quantidade,preco){
    this.nomeItem = nome;
    this.quantidadeItem = quantidade;
    this.precoItem = preco;
}

var itens = []

function adicionarItem(){
    var nomeItemNovo = $("#nomeItemId").val();
    var quantidadeNovo = $("#quantidadeId").val();
    var precoNovo = $("#precoId").val();

    var novoItem = new Item(nomeItemNovo, quantidadeNovo, precoNovo);
    itens.push(novoItem);
    atualizaTabela(novoItem);
}

function atualizaTabela(item){
    var htmlFinal = "<tr>";

    htmlFinal += "<td> " + item.nomeItem + "</td>";
    htmlFinal += "<td> " + item.quantidadeItem + "</td>";
    htmlFinal += "<td> " + item.precoItem + "</td>";

    htmlFinal +="</tr>";

    $("#tabelaItens").append(htmlFinal);
}