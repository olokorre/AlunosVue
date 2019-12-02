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

Vue.component('lista-aluno', {
    data: function () {
        var nome = [];
        for (var i = 0; i < 5; i++) {
            nome[i] =  prompt("Nome");
        }
        return {
            Nome1: nome[0],
            Nome2: nome[1],
            Nome3: nome[2],
            Nome4: nome[3],
            Nome5: nome[4]
        }
    },
    template: '<div id = "aluno1" align = "center"><table><tr><th>Aluno</th></tr><tr><td> {{Nome1}} </td></tr><tr><td> {{Nome2}} </td></tr><tr><td> {{Nome3}} </td></tr><tr><td> {{Nome4}} </td></tr><tr><td> {{Nome5}} </td></tr></table></div>'
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