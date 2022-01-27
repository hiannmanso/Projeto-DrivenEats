let corgreen ='0px 0px 10px -4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F'
let choices = []
let total = [] // voltar undefined se precisar
let precoFinal = 0 
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

function sendOrder(informsCliente) {
   
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
    let nomeCliente = prompt('Por favor, informe-nos seu nome:')
    let enderecoCliente = prompt('Para finalizarmos, informe seu endereço: ')
    let informsCliente= [nomeCliente,enderecoCliente]
    sendOrder(informsCliente)

}