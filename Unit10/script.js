//var frase = "Olá mundo!"
//window.alert(5+9)

//booleana
var chuva = false
var sol = true

console.log(chuva)
console.log(sol)

//number
var idade = 15
var altura = 1.70

//string
var nome = "Erick"

console.log(typeof(chuva))
console.log(typeof(idade))
console.log(typeof(nome))

//var = escopo global, pode ter seu valor alterado,permite criar variaveis vazias

var sobrenome = "silva"
sobrenome = "rocha"

var pessoa //null
console.log(pessoa)

//let = escopo local, pode ter seu valor alterado, permite criar variaveis vazias
let aluno = "ana"
aluno = "bia"

//const = escopo local,não pode ter seu valor alterado,não permite criar variaveis vazias
const comida = "lasanha"
//const bebida


if(true){
    let animal = "gato"
    console.log("dentro do bloco" + animal)
}

 //console.log(animal)
document.getElementById("teste").innerHTML = nome;

var comparacao = "0" == 0
console.log(comparacao)

var comparacao2 = "0" === 0
console.log(comparacao2)