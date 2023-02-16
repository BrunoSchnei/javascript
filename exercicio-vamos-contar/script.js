function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.lenght == 0 || fim.value.length == 0 || passo.value.lenght == 0) {
        res.innerHTML = 'Impossível contar! Preecha todos os campos!'
        //window.alert('[ERRO] Preencha todos os campos!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            alert('Passo inválido, vou considerar passo 1!')
            p = 1
        }

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{27a1}`
            }
       
            
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{2b05}`
            }
        }
        res.innerHTML += `\u{1f51a}`
    }  
}