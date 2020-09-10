console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')

const db = require('./database')
const readline = require('readline-sync')

const { produtos } = db
produtos.sort((a, b) => a.preco - b.preco)
console.table(produtos)

const array = new Array ()

// -- Precisei declarar fora da função e com let porque o JS reclamou.
let productId // Id do produto
let findingId  // Encontrando Id
let qtyOfItems // Quantidade de Itens
let promoCode // Cupom de desconto

// -- Função de compra que valida os pedidos
const shopping = () => {

    productId = parseInt(readline.question('Digite o id do produto desejado: '))

    // -- Validando se o iD existe
    for (i = 0; i < 1000; i++) {
        findingId = produtos.find(item => item.id === productId)
        if (findingId) {
            // Com o break não consegui usar o Ternário
            break;
        } else {
            productId = parseInt(readline.question('Id não encontrado, tente novamente: '))
        }
    }

   
    qtyOfItems = parseInt(readline.question('Digite a quantidade de produtos que gostaria de adquirir: '))

    // -- Validando se a quantidade digitada é válida
    for (i = 0; i < 1000; i++) {
        if (qtyOfItems > 0) {
            break;
        } else {
            qtyOfItems = parseInt(readline.question('Digite uma quantidade válida: '))
        }
    }

    // -- Adicionando os produtos
    const productsInMyCart = { ...findingId, quantidade: qtyOfItems} 
    array.push(productsInMyCart) 

    // -- Verificando se desejar comprar mais
    const continueShopping = readline.question('Deseja inserir mais algum produto no carrinho? (Digite S ou N): ')
    const continueShoppingEdit = continueShopping.toLowerCase() 
    
    if (continueShoppingEdit === "n") {
        promoCode = parseInt(readline.question('Digite o valor do seu cupom de desconto: '))        
    } else {
        shopping()
    }

    // -- Validando o cupom
    for (i = 0; i < 1000; i++) {
        if (promoCode >= 16 || promoCode <= 0) {
            promoCode = parseInt(readline.question('Cupom inválido, tente novamente: '))
        } else {
            break;
        } 
    }      
  
}

shopping()

// -- Criando minha classe
class Purchase {
    constructor(array){
      this.newProducts = array 
      this.date = new Date()
      this.subtotal = 0 
    }
    calculateSubtotal() { 
      this.subtotal = this.newProducts.reduce((acumulador, item) => acumulador + (item.preco * item.quantidade), 0)
    }

    dateEdit() {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        this.date = this.date.toLocaleDateString('pt-BR', options)
    }
  }

// -- Inicializando minha classe
const purchase = new Purchase (array)
console.table(purchase.newProducts) 

// -- Chamando a função de data
purchase.dateEdit()
console.log(`--- Dados do pedido realizado em ${purchase.date} ---`)

// -- Calculando o subtotal
purchase.calculateSubtotal() 
console.log(`Valor do pedido: R$ ${purchase.subtotal.toFixed(2)}`) 

// -- Calculando o desconto
const discount = purchase.subtotal * (promoCode / 100) 
console.log(`Valor do desconto: R$ ${discount.toFixed(2)}`)

// -- Calculando o total com desconto
const total = purchase.subtotal - discount
console.log(`Valor total sem frente: R$ ${total.toFixed(2)}`)

// -- Adicionando o frete
const shipping = total + 5
console.log(`Esse mês estamos com frete fixo de apenas R$ 5,00! Seu pedido fica em R$ ${shipping.toFixed(2)}`)



    
  




    
    

















