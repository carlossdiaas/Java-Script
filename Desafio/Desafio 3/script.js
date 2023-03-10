function somar(){
    var txt1 = document.getElementById('txt1')
    var txt2 = document.getElementById('txt2')
    var passo = document.getElementById('pas')
    var res = document.getElementById('res')
    
    var n1 = Number(txt1.value)
    var n2 = Number(txt2.value)
    var pas = Number(passo.value)
    
    if(txt1.value.length == 0 || txt1.value.length == 0 ||passo.value.length == 0){
        res.innerHTML = `Não foi possivel fazer a conta, digite valores validos!`
    }
    else if (n1 < n2){
        if (pas == 0){
            pas = 1
            alert('O valor do passo 0 não pode existir então ele será de valor 1')
        }
        for(let c = n1; c < n2; c += pas){
            res.innerHTML += `${ c } \u{1f449}`
       }
    } else{
        for(let c = n1; c > n2; c -= pas){
            res.innerHTML += (`${ c } \u{1f449}`)
        }
    }res.innerHTML += (`🏁`)
}
