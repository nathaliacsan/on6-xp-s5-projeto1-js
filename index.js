console.log('-----------------------------------------------------')
console.log('Olá, mundo!', 'Revisão de JavaScript e Introdução a ES6!')
console.log('-----------------------------------------------------')

// ----------------------------------------------
console.log('Funções')

// FUNÇÕES
// Possuímos as funções: falar, dobro, calcularMedia
const falar = () => 'Pipipi popopo'


const dobro = (num) => num * 2

const calcularMedia = (nota1, nota2, nota3) => {
  const soma = (nota1 + nota2 + nota3)
  const media = soma / 3
  return media
}

// Vamos refatorar essas funções para a sintaxe de Arrow function





console.log('-----------------------------------------------------')
// ----------------------------------------------
console.log('Callback')

// CALLBACK
// Possuímos as funções: somar, subtrair, multiplicar e dividir.
const somar = (a, b) => a + b

const subtrair = (a, b) => a - b

const multiplicar = (a, b) => a * b

const dividir = (a, b) => a / b

// const ordenar = (a, b) => {
//   if (a <= b) {
//     return [a, b]
//   } else {
//     return [b, a]
//   }
// }

const ordenar = (a, b) => (a <= b) ? [a, b] : [b, a]


// Crie uma função chamada calcular que receberá como parâmetro: dois números e uma função de callback

const calcular = (num1, num2, callback) => callback(num1, num2)


// Faça a soma de dois números usando a função calcular

const resultadoSoma = calcular(3, 5, somar)
console.log(`A soma de 3 com 5 é: ${resultadoSoma}`)

// Faça a subtração de dois números usando a função calcular

const resultadoSubtracao = calcular(10, 5, subtrair)
console.log(`A subtração de 10 com 5 é: ${resultadoSubtracao}`);

// Faça a multiplicação de dois números usando a função calcular

const resultadoMultiplicacao = calcular (5, 5, multiplicar)
console.log(`A multipliacação de 5 com 5 é: ${resultadoMultiplicacao}`)


// Faça a divisão de dois números usando a função calcular

const resultadoDivisao = calcular (10, 2, dividir) 
console.log(`A divisão de 10 com 2 é: ${resultadoDivisao}`)

// Faça a ordenação crescente de dois números usando a função calcular

const ordenaPraGente = calcular (11, 7, ordenar)
console.log(`Clocamos em ordem os números 11 e 7: ${ordenaPraGente}`)


const falei = falar()
console.log(`Falei ${falei}`)
console.log(`Falei sabe o que: ${falar()}`);

console.log('-----------------------------------------------------')


// ----------------------------------------------
console.log('Condicionais')

// CONDICIONAIS
// Uma estudante obteve as seguinte notas: n1, n2 e n3
const n1 = 9
const n2 = 5
const n3 = 1

// Verifique se a estudante foi aprovada. Se a média das notas for maior ou igual a 7, a estudante passou!


const media = calcularMedia(n1, n2, n3)

// if (media >= 7) {
//   return 'aprovada'
// } else {
//   return 'reprovada'
// }

const resultadoMedia = (media >= 7) ? 'aprovada' : 'reprovada'
console.log(resultadoMedia)


console.log('-----------------------------------------------------')
// ----------------------------------------------
// OBJETOS
console.log('Objetos  🪑')

// Declaração de objetos
const objeto = new Object()
objeto.nome = 'cadeira'
objeto.tipo = 'madeira'
objeto.peso = 7

const pokemon = {
  name: 'Pikachu',
  type: 'elétrico',
  height: 40.6,
}

// Fazer destructuring e acessar os valores de objeto e pokemon

// const {nome} = objeto
// const {tipo} = objeto
// const {peso} = objeto

const {nome, tipo, peso} = objeto

console.log(`O objeto ${nome} é feito de ${tipo} e pesa ${peso}kg`)
// console.log(tipo)
// console.log(peso)

const {name, type, height} = pokemon
console.log(`Meu pokemon chama ${name}, é do tipo ${type}, e altura de ${height}`)



console.log('-----------------------------------------------------')
// ----------------------------------------------
// DATAS
console.log('Datas 🗓')

// Outro exemplo de um objeto JavaScript é o Date.

// Vamos criar a variável chamada hoje que irá receber a data de hoje.

const hoje  = new Date()
console.log(hoje)

// Vamos capturar os valores de dia, mes e ano da data de hoje pelos métodos de Date

const dia = hoje.getDate()
const mes = hoje.getMonth()
const ano = hoje.getFullYear()

console.log(dia, mes, ano)

// Vamos criar uma data específica. Lembrando que mês de Janeiro é 0 no Javascript 🤷🏻‍♀️

const nascimento = new Date(1992, 11, 17)
console.log(`Nasci em ${nascimento}`)


// Podemos usar o método toLocaleString para formatar a data

const dataFormata = hoje.toLocaleDateString('pt-BR')
console.log(dataFormata)


// Temos mais opções para formatar a data
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

const dataLonga = hoje.toLocaleDateString('pt-BR', options)
console.log(dataLonga)



console.log('-----------------------------------------------------')
// ----------------------------------------------

const pessoa = {
  nome: 'Yasminn',
  sobrenome: 'Vaz',
  idade: 25,
  altura: 1.62,
  peso: 55,
  andando: false,
  caminhouQuantosMetros: 0,
  fazerAniversario() {this.idade++},
  andar(metrosCaminhados) {
    this.andando = true
    this.caminhouQuantosMetros += metrosCaminhados
  },
  parar() {this.andando = false},
  apresentacao() {  
    const anos = (this.idade === 1) ? 'ano' : 'anos'
    const metros = (this.caminhouQuantosMetros <= 1) ? 'metro' : 'metros'
      
    return `Olá, eu sou ${this.nome} ${this.sobrenome}, tenho ${this.idade} ${anos}, ${this.altura}, meu peso é ${this.peso} e, só hoje, eu já caminhei ${this.caminhouQuantosMetros} ${metros}!`
  }
}

pessoa.andar(100)
console.log(pessoa.apresentacao())


// pessoa.fazerAniversario = function () {
//   return pessoa.idade++
// }

// pessoa.andar = function (metrosCaminhados) {
//   pessoa.andando = true
//   pessoa.caminhouQuantosMetros += metrosCaminhados
// }

// pessoa.parar = function () {
//   pessoa.andando = false
// }

// pessoa.nomeCompleto = function () {
//   return `Olá, meu nome é ${pessoa.nome} ${pessoa.sobrenome}.`
// }

// pessoa.mostrarIdade = function () {
//   return `Olá, eu tenho ${pessoa.idade} anos.`
// }

// pessoa.mostrarPeso = function () {
//   return `Eu peso ${pessoa.peso}.`
// }

// pessoa.mostrarAltura = function () {
//   return `Minha altura é ${pessoa.altura}.`
// }

// pessoa.mostrarDistancia = function () {
//   return `${pessoa.nome} caminhou ${pessoa.caminhouQuantosMetros}m.`
// }

// pessoa.apresentacao = function () {
//   let anos = 'anos'
//   let metros = 'metros'

//   if (pessoa.idade === 1) {
//     anos = 'ano'
//   }

//   if (pessoa.caminhouQuantosMetros === 1) {
//     metros = 'metro'
//   }

//   return `Olá, eu sou ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} ${anos}, ${pessoa.altura}, meu peso é ${pessoa.peso} e, só hoje, eu já caminhei ${pessoa.caminhouQuantosMetros} ${metros}!`
// }





// Vamos utilizar o formato ES6 para refatorar a constante pessoa.

// Quero criar as variáveis pessoa2 e pessoa3 com as mesmas propriedades, mas alterando os valores de nome, sobrenome, altura e peso


console.log('-----------------------------------------------------')
// ----------------------------------------------
// CLASSES
console.log('Classes 🆕')

// Vamos criar a classe Pessoa

class Pessoa {
  constructor (name, surname, age, walking = false, distance = 0) {
    this.nome = name
    this.sobrenome = surname
    this.idade = age
    this.andando = walking
    this.caminhouQuantosMetros = distance
  }

  fazerAniversario() {
    this.idade++
  }

  andar(metrosCaminhados) {
    this.andando = true
    this.caminhouQuantosMetros += metrosCaminhados
  }

  parar() {
    this.andando = false
  }

}

const pessoa2 = new Pessoa("Nathália", "Santos", 27)
console.log(pessoa2.nome)

const {sobrenome} = pessoa2
console.log(sobrenome)

pessoa2.fazerAniversario()
console.log(pessoa2)


const pessoa3 = new Pessoa("Edi", "Pontes", 36, true, 500)
pessoa3.andar(10)
console.log(pessoa3)


console.log('-----------------------------------------------------')
// ----------------------------------------------
// ARRAYS
console.log('Arrays [ 0️⃣  , 1️⃣  , 2️⃣  ]')

// Declaração de arrays
const lista = new Array('pera', 'uva', 'maçã')

const numbers = [9, 2, 5]

// Acessando elementos pela posição do array

console.log(lista[2])

// Informe o tamanho de cada array

console.log(numbers.length)

// Faça a desestruturação do array

const [primeiro, segundo, terceiro] = lista
console.log(primeiro)




// Possuo 4 tias. Os dados delas estão armazenados no array de objetos dentro do arquivo db.js
// Vamos importar esses dados para podermos usá-los durante nosso exercício de revisão.
const db = require('./db')

console.log(db)

const {tias} = db
console.log(tias)


console.log('-----------------------------------------------------')
// ----------------------------------------------
// MÉTODOS DE ITERAÇÃO
console.log('Métodos iteração ')

// Mostre a tabela das tias pelo console.table()
// Só serve para ARRAY

console.table(tias)

//console.table(lista)

console.log('-----------------------------------------------------')
console.log('filter()')
// filter
// Filtre as tias que moram em SP e mostre no console.

// function filtrarTias(item) {
//   return item.local === 'SP'
// }

// Não altera o array original, retorna um novo array com os filtros
// Preciso no retorno armazenar em algm lugar
// Tirei o (item) porque um parametro nao precisa de ()
const tiasSP = tias.filter(item => item.local === 'SP')

console.table(tiasSP)

// FIND SÓ ACHARIA A PRIMEIRA TIA
const tiaNeusa = tias.find(item => item.nome === "Neusa")
console.log(tiaNeusa)

console.log('-----------------------------------------------------')
console.log('map()')
// map
// Crie um novo array chamado tiasMaisChegadas e adicione uma propriedade chamada cuidouDeMim que recebe um valor booleano. Caso a tia teve até 2 filhos, isso significa que ela cuidou de mim e seu valor é true. Caso ela teve mais que 2 filhos, o valor da propriedade cuidouDeMim é false.

// É tipo o for, vai cada item e retorna um array novo(nao altera o original)

function cuidar(tia) {
  const {nome, idade, filhos, local} = tia

  if (tia.filhos <= 2) {
    const tiaNova = {
      nome,
      idade,
      filhos,
      local,
      cuidouDeMim: true
    }
    return tiaNova
  } else {
    const tiaNaoChegada = {
      ...tia,
      cuidouDeMim: false
    }
    return tiaNaoChegada
  }
}

const tiasMaisChegadas = tias.map(cuidar)
console.log(tiasMaisChegadas)



console.log('-----------------------------------------------------')
console.log('sort()')
// SORT

// Vamos praticar o método sort() com o array numbers
// const numbers = [9, 2, 5]

const compararCrescente = (a, b) => {
  // if (a < b) { // mantenho a como primeiro e b vem depois 
  //   return -1
  // } else if (a > b) { // primeiro vem b e depois vem a
  //   return 1
  // } else { // se a e b forem iguais, mantém a mesma ordem
  //   return 0
  // }
  return a - b
}

const compararDecrescente = (a, b) => {
  return b - a
}

numbers.sort(compararCrescente)
console.log(numbers)
numbers.sort(compararDecrescente)
console.log(numbers)

// Refatore a função comparar e ordene numbers em ordem crescente

numbers.sort((a, b) => a - b)


// Ordene as tias por ordem decrescente de idade (a mais velha primeiro)

// function ordenarTias(a, b) {
//   return b.idade - a.idade
// }

tias.sort((a, b) => b.idade - a.idade)
console.table(tias)


console.log('-----------------------------------------------------')
console.log('reduce()')
// reduce

// itemAtual é idade da tias, etc

// Faça a soma do array numbers

// function somarTodos(acumulador, itemAtual) {
//   return acumulador + itemAtual
// }
  //9 + 2 = 11
  //acumulador vira 11 e faz + 5 


// coloco o 0 para iniciar com 0 e somar só os arrays
const arrayReduzido = numbers.reduce((acumulador, itemAtual) => acumulador + itemAtual, 10)
console.log(arrayReduzido)

// ˆ usar para calcular o total do pedido

// "o valor inicial do frete é 10 reais...colocar o acumulador"

// Some a quantidade de netos que vovó possui.



function somarNetos(acumulador, tia) {
  return acumulador + tia.filhos
}

const netos = tias.reduce(somarNetos, 0)
console.log(netos)

// ˆ USAR PARA PEDIDOS, TOTAL, SUBTOTAL

// ----------------------------------------------
console.log('-----------------------------------------------------')
console.log('                         Fim                         ')
console.log('-----------------------------------------------------')