let corgreen ='0px 0px 10px -4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F'
let choices = [undefined,undefined,undefined]
let total = [undefined,undefined,undefined] // voltar undefined se precisar
let precoFinal = 0 
let telaDeConfirmacao = document.querySelector('.tela-de-confirmacao')
let pedido = document.querySelector('.pedido')
let informsCliente= [undefined,undefined]
let totalcomvirgula

function liberarbutton() {
    let button = document.querySelector('.button')
        button.style.backgroundColor = '#32B72F';
        button.innerHTML = '<p> Fechar pedido </p>'
     
    precoFinal = (total[0]+total[1]+total[2]).toFixed(2)
}

function selectItem(item, inicio,final,order) {
    // colorir a box escolhida e tirar a cor das outras
    let apagarItem = document.getElementsByClassName('item')
    for (let index = inicio; index < final; index++) {
        apagarItem[index].style.boxShadow = 'none'
        apagarItem[index].classList.add('escondido')
    }
    item.style.boxShadow = corgreen; 
    item.classList.remove('escondido')

    // salvar nome do item e valor
    
    let nomeItems= item.getElementsByTagName('h1')
     choices[order] = nomeItems[0].innerHTML

     let valoritem= item.getElementsByClassName('value')
     total[order] = Number(valoritem[0].innerHTML.replace(',','.'))

     // teste para validar button
    if (choices[0] != undefined && choices[1] != undefined && choices[2] != undefined) {
        liberarbutton()
    }
    
}
function sendOrder() {
   console.log(choices)
   console.log(precoFinal);
    const message = 'Olá, gostaria de fazer o pedido:'
    +'\n - Prato: '     +   choices[0]
    +'\n - Bebida: '    +   choices[1]
    +'\n - Sobremesa: ' +   choices[2]
    +'\n - Total: R$: ' +   precoFinal
    
    +'\n\n Nome: '      +   informsCliente[0]
    +'\n Endereço: '     +   informsCliente[1];

    const url = 'https://wa.me/5521969731053?text='+encodeURIComponent(message)

    window.open(url,'_blank')
}

function infoCliente() {
    // informações do cliente para o pedido(nome e endereço)
    let nomeCliente = prompt('Por favor, informe-nos seu nome:')
    let enderecoCliente = prompt('Para finalizarmos, informe seu endereço: ')
    informsCliente= [nomeCliente,enderecoCliente]
    sendOrder()
}
function exit() {
    telaDeConfirmacao.style.display = 'none'
}
function telaVerde() {

    if(choices[0] == undefined){
        alert('Escolha um prato, por favor!')
    }else if(choices[1] == undefined){
        alert('Escolha uma bebida, por favor!')
    }else if(choices[2] == undefined){
        alert('Escolha uma sobremesa, por favor!')
    }else{
        // passando infs pra tela de confirmação verde
    telaDeConfirmacao.style.display = 'flex'
    // comida
    let pedidocomida = document.querySelector('.nameprato')
    pedidocomida.innerHTML = choices[0]
    let valorcomida = document.querySelector('.valorprato')
    valorcomida.innerHTML = total[0].toString().replace('.',',')
    // bebida
    let pedidobebida = document.querySelector('.namebebida')
    pedidobebida.innerHTML = choices[1]
    let valorbebida = document.querySelector('.valorbebida')
    valorbebida.innerHTML = total[1].toString().replace('.',',')
    // sobremesa

    let pedidosobremesa = document.querySelector('.namesobremesa')
    pedidosobremesa.innerHTML = choices[2]
    let valorsobremesa = document.querySelector('.valorsobremesa')
    valorsobremesa.innerHTML= total[2].toString().replace('.',',')

    // total
    let totalgreen = document.querySelector('.valortotal')
    totalgreen.innerHTML ='R$ '+ precoFinal.toString().replace('.',',')
    }
}