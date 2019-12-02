// Local das Variaveis
var implementar = document.getElementById("Tabela");

// Compodente Tabela
Vue.component('tabela-aluno', {
    data: function () {
        var nome =  prompt("Nome");
        var matricola =  prompt("Matricola");
        var nota = prompt("Nota");
        return {
            Nome: nome,
            Matricola: matricola,
            Notas: nota
        }
    },
    template: '<div id = "aluno1" align = "center"><table><tr><th>Aluno</th><th>Matricola</th><th>Notas</th></tr><tr><td> {{Nome}} </td><td> {{Matricola}} </td><td> {{Notas}} </td></tr></table></div>'
});

// Local para adicionar os elementos
new Vue({
    el: '#Tabela',
    // Tentativas...
    // methods: {
    //     AddTabela: function () {
    //         return createElement('tabela-aluno');
    //     }
    // }
});