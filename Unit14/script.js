$("#botaoBuscaPersonagem").click(buscarPersonagemAleatorio);


function buscarPersonagemAleatorio(){
    $.get("https://swapi.dev/api/people/"+ Math.floor(Math.random()*9)+ 1 ,preencherLabelPersonagem);
}


function preencherLabelPersonagem(data){
    console.log(data.name);

    $("#personagemAleatorioId").text(data.name);
}


function buscarFilmePorPersonagem(){
    var nome = $("buscarFilmePorNomePersonagem").val();
    $.get("https://swapi.dev/api/people/?search="+ nome, popularTabela)
}

function popularTabela(data){
    console.log(data.results[0].name);
    $("#labelFilmeDeId").text(data.results[0].name);
}