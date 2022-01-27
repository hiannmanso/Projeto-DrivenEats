let corgreen ='0px 0px 10px -4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F'
let choices = [undefined,undefined,undefined]
let total = [undefined,undefined,undefined] // voltar undefined se precisar
let precoFinal = 0 
let telaDeConfirmacao = document.querySelector('.tela-de-confirmacao')
let pedido = document.querySelector('.pedido')
let informsCliente= [undefined,undefined]
function liberarbutton() {
    let button = document.querySelector('.button')
        button.style.backgroundColor = '#32B72F';
        button.innerHTML = '<p> Fechar pedido </p>'
        // console.log(choices);   

    precoFinal = (total[0]+total[1]+total[2]).toFixed(2)
}

function selectprato(item) {
    // colorir a box escolhida e tirar a cor das outras
    let apagarItem = document.getElementsByClassName('item')
    for (let index = 0; index < 3; index++) {
        apagarItem[index].style.boxShadow = 'none'
    }
    item.style.boxShadow = corgreen; 

    // salvar nome do item e valor
    let nomeItems= item.getElementsByTagName('h1')
     choices[0] = nomeItems[0].innerHTML

     let valoritem= item.getElementsByClassName('value')
     total[0] = Number(valoritem[0].innerHTML.replace(',','.'))
    //  console.log(choices);
    //  console.log(total);
     // teste para validar button
    if (choices[0] != undefined && choices[1] != undefined && choices[2] != undefined) {
        liberarbutton()
    }
    
}

function selectbebida(item) {
    // colorir a box escolhida e tirar a cor das outras
    let apagarItem = document.getElementsByClassName('item')
    for (let index = 3; index < 6; index++) {
        apagarItem[index].style.boxShadow = 'none'
    }
    item.style.boxShadow = corgreen; 

    // salvar nome do item e valor
     let nomeItems= item.getElementsByTagName('h1')
     choices[1] = nomeItems[0].innerHTML

     let valoritem= item.getElementsByClassName('value')
     total[1] = Number(valoritem[0].innerHTML.replace(',','.'))

    //  console.log(choices);
    //  console.log(total);
    // teste para validar button
     if (choices[0] != undefined && choices[1] != undefined && choices[2] != undefined) {
        liberarbutton()
    }
}

function selectsobremesa(item) {
    // colorir a box escolhida e tirar a cor das outras
    let apagarItem = document.getElementsByClassName('item')
    for (let index = 6; index < 9; index++) {
        apagarItem[index].style.boxShadow = 'none'
    }
    item.style.boxShadow = corgreen; 

    // salvar nome do item e valor
    let nomeItems= item.getElementsByTagName('h1')
     choices[2] = nomeItems[0].innerHTML

     let valoritem= item.getElementsByClassName('value')
     total[2] = Number(valoritem[0].innerHTML.replace(',','.'))

    //  console.log(total);
    //  console.log(choices);

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

    // passando infs pra tela de confirmação verde
    telaDeConfirmacao.style.display = 'flex'

    // comida
    let pedidocomida = document.querySelector('.nameprato')
    pedidocomida.innerHTML = choices[0]
    let valorcomida = document.querySelector('.valorprato')
    valorcomida.innerHTML = total[0]
    // bebida
    let pedidobebida = document.querySelector('.namebebida')
    pedidobebida.innerHTML = choices[1]
    let valorbebida = document.querySelector('.valorbebida')
    valorbebida.innerHTML = total[1]
    // sobremesa

    let pedidosobremesa = document.querySelector('.namesobremesa')
    pedidosobremesa.innerHTML = choices[2]
    let valorsobremesa = document.querySelector('.valorsobremesa')
    valorsobremesa.innerHTML= total[2]

    // total
    let totalgreen = document.querySelector('.valortotal')
    totalgreen.innerHTML = precoFinal
}
function exit() {
    telaDeConfirmacao.style.display = 'none'
}