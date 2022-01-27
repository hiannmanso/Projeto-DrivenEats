let corgreen ='0px 0px 10px -4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F'
let test1 = 0;
let test2 = 0;
let test3 = 0;
let cont = 3;
let choices =[undefined,undefined,undefined]
let total=[undefined,undefined,undefined]
document.getElementsByTagName

function liberarbutton() {
    let button = document.querySelector('.button')
        button.style.backgroundColor = '#32B72F';
        button.innerHTML = '<p> Fechar pedido </p>'
        console.log(choices);
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

     let valoritem= item.getElementsByTagName('h3')
     total[0] = valoritem[0].innerHTML

     console.log(choices);
     console.log(total);
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

     let valoritem= item.getElementsByTagName('h3')
     total[1] = valoritem[0].innerHTML

     console.log(choices);
     console.log(total);
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

     let valoritem= item.getElementsByTagName('h3')
     total[2] = valoritem[0].innerHTML

     console.log(total);
     console.log(choices);

    // teste para validar button
     if (choices[0] != undefined && choices[1] != undefined && choices[2] != undefined) {
        liberarbutton()
    }
}
