function carregar(){
    var msg = document.getElementById('box1')
    var img = document.getElementById('abc1')  
    var data = new Date()
    //var hora = data.getHours()
    var hora = 15
    box1.innerHTML = `agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src =  'manha.jpg'
    } else if(hora >= 12 && hora < 18 ){
        //boa tarde
        img.src = 'tarde.jpg'
    } else {
        //boa noite
        img.src = 'noite.jpg'
    }
}