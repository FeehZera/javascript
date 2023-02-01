function carregar(){
    var msg = document.getElementById('box1')
    var img = document.getElementById('abc1')  
    var data = new Date()
    //var hora = data.getHours()
    var hora = 00
    box1.innerHTML = `agora são ${hora} horas.`
           if (hora >= 0 && hora < 8 ){
        //boa madrugada
        img.src =  'imagens/madrugada.jpg'
    } else if (hora >= 8 && hora < 12) {
        //bom dia
        img.src =  'imagens/manha.jpg'
    } else if (hora >= 12 && hora < 18 ){
        //boa tarde
        img.src = 'imagens/tarde.jpg'
    } else {
        //boa noite
        img.src = 'imagens/noite.jpg'
    }
}