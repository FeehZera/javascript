let num = document.querySelector('input#fnum')
let lista = document.querySelector('selected#flista')
let res = document.querySelector('div#res')
let valores = []

function adicionar() {
    if( isNumero(num.value) && !inLista(num.value, valores)){
    } else {
    window.alert('invalido')
    }
}

function isNumero(n) {
    if(Number(n) >= 1 &&  Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}