function verificar() {

    //vars----------------

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('box2')

    //ifs------------------

    if (fano.value == 0 || Number(fano.value) > ano || Number(fano.value) <= -1 || Number(fano.value) < 1900) {
        window.alert('[ERRO], Verifique os dados e tente novamente!')
    } else {

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                    //crianca
                    img.setAttribute('src' , 'imagens/homem/hcrianca.jpg')
            } else if (idade < 21) {
                    //jovem
                    img.setAttribute('src' , 'imagens/homem/hjovem.jpg')
            } else if (idade < 50) {
                    //adulto
                    img.setAttribute('src' , 'imagens/homem/hadulto.jpg')
            }else {
                    //idoso
                    img.setAttribute('src' , 'imagens/homem/hidoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                    //crianca
                    img.setAttribute('src' , 'imagens/mulher/mcrianca.jpg')
            } else if (idade < 21) {
                    //jovem
                    img.setAttribute('src' , 'imagens/mulher/mjovem.jpg')
            } else if (idade < 50) {
                    //adulto
                    img.setAttribute('src' , 'imagens/mulher/madulto.jpg')
            }else {
                    //idoso
                    img.setAttribute('src' , 'imagens/mulher/midoso.jpg')
            }
        }
        //resultado
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}