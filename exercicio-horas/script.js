function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 6 && hora < 12) {
        // Bom dia!
        img.src = 'images/manha.png'
        document.body.style.background = '#eb9f80'
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde!
        img.src = 'images/tarde.png'
        document.body.style.background = '#e9aa3b'
    } else {
        // Boa noite!
        img.src = 'images/noite.png'
        document.body.style.background = '#2160ae'
    }

}