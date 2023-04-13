//netflix
var video = Array
video[1] = Array
video[1]['nome'] = 'La casa de papel'
video[1]['categoria'] = 'Serie'

function getVideo(video) {
   
    try{
        //logica
        //http
        console.log(video[0]['nome'])

    }
    catch(erro){
        console.log('Agora sim podemos tratar este erro')
    }
    finally{
        console.log('sempre passa por aqui (try/catch) ')
    }
    
    console.log('a aplicação não morreu')
}
function tratar(erro){
    console.log(erro)
}
getVideo(video)