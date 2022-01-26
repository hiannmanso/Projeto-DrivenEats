let corgreen ='0px 0px 10px -4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F'
let test1 = 0;
let test2 = 0;
let test3 = 0;
let cont = 3;

function liberarbutton() {
    let button = document.querySelector('.button')
        button.style.backgroundColor = '#32B72F';
        button.innerHTML = '<p> Fechar pedido </p>'
}

function selectprato(item) {
    let apagarItem = document.getElementsByClassName('item')
    for (let index = 0; index < 3; index++) {
        apagarItem[index].style.boxShadow = 'none'
    }
    item.style.boxShadow = corgreen; 
    test1 = 1;

    if (test1 === 1 && test2 === 1 && test3 === 1) {
        liberarbutton()
    }
    
}

function selectbebida(item) {
    let apagarItem = document.getElementsByClassName('item')
    for (let index = 3; index < 6; index++) {
        apagarItem[index].style.boxShadow = 'none'
    }
    item.style.boxShadow = corgreen; 
     test2 = 1;

     if (test1 === 1 && test2 === 1 && test3 === 1) {
        liberarbutton()
    }
}

function selectsobremesa(item) {
    let apagarItem = document.getElementsByClassName('item')
    for (let index = 6; index < 9; index++) {
        apagarItem[index].style.boxShadow = 'none'
    }
    item.style.boxShadow = corgreen; 
    test3 = 1;

    if (test1 === 1 && test2 === 1 && test3 === 1) {
        liberarbutton()
    }
}
