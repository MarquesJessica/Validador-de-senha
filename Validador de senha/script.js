function testar() {
    let li1 = document.getElementById('li1')
    let li2 = document.getElementById('li2')
    let li3 = document.getElementById('li3')
    let li4 = document.getElementById('li4')

    let senha = document.getElementById('senha')

    console.log('a senha digitada foi', senha.value)

    if (senha.value.length >= 8) {
        li1.className = 'ok'
    }else {
        li1.className = ''
    }

    if (/[A-Z]/g.test(senha.value)) {
        li2.className = 'ok'
    } else {
        li2.className = ''
    }

    if (/['@', '#', '$', '%', '&', '*', '!', '~', ]/g.test(senha.value)) {
        li3.className = 'ok'
    } else {
        li3.className = ''
    }

    if (/[0-9]/g.test(senha.value)){
        li4.className = 'ok'
    } else {
        li3.className
    }
}
