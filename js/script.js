var Aluno1 = new Vue({
    el: "#aluno1",
    data: {
        Nome: "",
        Matricola: "",
        Notas: "",
    },
});

var nome =  prompt("Nome");
var matricola =  prompt("Matricola");
var nota = prompt("Nota");

Aluno1.Nome = nome;
Aluno1.Matricola = matricola;
Aluno1.Notas = nota;

// $("#aluno1").fadeIn("slow");