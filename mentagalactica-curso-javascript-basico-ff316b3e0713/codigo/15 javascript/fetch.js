var contenido = document.querySelector ('#contenido');
//let contenido = document.getElementById("contenido")

function traer (){
fetch ('09-texto.txt')
.then(res=>res.text())
.then(data=>{
    console.log(data)
    contenido.innerHTML=`${data}`
})

}