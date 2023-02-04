function contar (){
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('pas')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        alert('[ERRO], Valor invalido, redefina os valores!!!')
    } else {
        res
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        for(let c = i; c <= f; c+= p){
            res.innerHTML +=` ${c}`
        }
    }
}