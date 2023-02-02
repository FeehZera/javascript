function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('idade')
    var res =document.getElementById('box2')
    if (fano.ariaValueMax.lenght == 0 || fano.value > ano) {
        window.alert('[ERRO], Verifique os dados e tente novamente!')
    } else {
        window.alert('Tudo certo!!!')
    }
}