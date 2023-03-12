function gerar(){
    let txtn = document.getElementById('txtn')
    let s = document.getElementById ('sec')
    if (txtn.value.length == 0){
        alert('Preencha o campo corretamente')
    }else{
        let n = Number(txtn.value)
        let c = 1
        s.innerHTML = ''
        while(c <=10){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            s.appendChild(item)
            c++
    }
    }
}
