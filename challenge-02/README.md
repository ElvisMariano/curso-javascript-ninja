# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x, y) {
    return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
total = soma(2, 4) + 5;

// Qual o valor atualizado dessa variável?
11

// Declare uma nova variável, sem valor.
var num;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function add(x) {
    num = x;
    return `O valor da variável agora é ${num}`
}

// Invoque a função criada acima.
add(5)

// Qual o retorno da função? (Use comentários de bloco).
/*
A função retorna: O valor da variável agora é 5
*/


/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplicar(x, y, c) {
    if (x == undefined || y == undefined || c == undefined) {
        return "Preencha todos os valores corretamente"
    } else {
        return x * y * c
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
multiplicar(5, 2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//Preencha todos os valores corretamente

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplicar(5, 2, 2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
20

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function math(x, y, c) {
    var num1 = false;
    var num2 = false;
    var num3 = false;

    if (x != undefined) {
        num1 = x;
    }
    if (y != undefined) {
        num2 = y;
    }
    if (c != undefined) {
        num3 = c;
    }
    if (num1 == false && num2 == false && num3 == false) {
        return false;
    } else {
        return num1 + num2 - num3;
    }
    
}


// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
math() // false
math(2) // 2
math(2, 3) // 5
math(2, 3, 1) // 4


```