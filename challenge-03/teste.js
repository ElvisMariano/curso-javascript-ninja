var pessoa = {
    nome: 'Elvis',
    sobrenome: 'Mariano',
    sexo: 'Masculino',
    idade: 23,
    altura: 1.78,
    peso: 62,
    andando: false,
    caminhouQuantosMetros: 0,
    aniversario: function() {return pessoa.idade++},
    andar: function(x){
        if (!pessoa.andando) {
            pessoa.andando = true;
        }
        if (pessoa.andando) {
            pessoa.caminhouQuantosMetros += x;
        }
    },
    parar: function() {pessoa.andando = false},
    nomeCompleto: function() {return `Olá meu nome é ${pessoa.nome} ${pessoa.sobrenome}`},
    mostrarIdade: function() {return `Olá, eu tenho ${pessoa.idade} anos!`},
    mostrarPeso: function() {return `Eu peso ${pessoa.peso}Kg.`},
    mostrarAltura: function() {return `Minha altura é ${pessoa.altura}.`},
    apresentacao: function() {
        // Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!
        var sexo = 'o'
        var anos = 'ano'
        var metros = 'metro'

        if (pessoa.sexo === 'Feminino') {sexo = 'a'}
        if (pessoa.idade > 1) {anos = 'anos'}
        if (pessoa.caminhouQuantosMetros > 1) {metros = 'metros'}

        return `Olá, eu sou ${sexo} ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} ${anos}, ${pessoa.altura}, meu peso é ${pessoa.peso} e, só hoje, eu já caminhei ${pessoa.caminhouQuantosMetros} ${metros}!`
    }
}
pessoa.andar(50);
console.log(pessoa.apresentacao());



