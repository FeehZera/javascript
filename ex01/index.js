function carregar(){

    var msg = document.getElementById('box1')
    var img = document.getElementById('abc1')  
    var data = new Date()
    var hora = data.getHours()
    
    box1.innerHTML = `agora são ${hora} horas.`

    if (hora >= 0 && hora < 8 ){
        //boa madrugada
        img.src =  'imagens/madrugada.jpg'
        document.body.style.background = 'black'
    } else if (hora >= 8 && hora < 12) {
        //bom dia
        img.src =  'imagens/manha.jpg'
        document.body.style.background = 'lightsalmon'
    } else if (hora >= 12 && hora < 18 ){
        //boa tarde
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = 'burlywood'
    } else {
        //boa noite
        img.src = 'imagens/noite.jpg'
        document.body.style.background = 'darkgray'
    }
}