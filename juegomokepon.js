let ataquep1
let ataquep2
let varvidasp1 = 3
let varvidasp2 = 3


function iniciarJ (){


let ocultarreinicio= document.getElementById("boton-reinicio")
    ocultarreinicio.style.display = "none"

let ocultarataque = document.getElementById("selecElemento")
    ocultarataque.style.display = "none"

    let ocultarseleccion= document.getElementById("boton-mascota")
    ocultarseleccion.style.display = "block"

let botonMascotaJ = document.getElementById ('boton-mascota')
    botonMascotaJ.addEventListener('click', seleccionp1)
  

let botonfuego = document.getElementById ("boton-fuego")
    botonfuego.addEventListener("click", ataquefuego)

let botonagua = document.getElementById ("boton-agua")
    botonagua.addEventListener("click", ataqueagua)

let botontierra = document.getElementById ("boton-tierra")
    botontierra.addEventListener("click", ataquetierra)

let botonreinicio = document.getElementById ("boton-reinicio")
    botonreinicio.addEventListener("click", funreinicio)
}


function seleccionp1 (){
    let ocultarmascota= document.getElementById("Mascota")
    ocultarmascota.style.display = "none"
    let ocultarataque = document.getElementById("selecElemento")
    ocultarataque.style.display = "flex"

    let imput1 = document.getElementById ("aang")
    let imput2 = document.getElementById ("korra")
    let imput3 = document.getElementById ("roku")
    imput1
  
    let spanmascotap1 = document.getElementById ("htmlmascotap1")
   
    let jugar = 1
    

        if (imput1.checked) 
        {
            spanmascotap1.innerHTML = " Aang "
            swal ("Has seleccionado al avatar Aang","","success") 
        }
        else if (imput2.checked) {
        spanmascotap1.innerHTML = " Korra " 
            swal ("Has seleccionado al avatar Korra","","success")}
        else if (imput3.checked) {
        spanmascotap1.innerHTML = " Roku "
            swal ("Has seleccionado al avatar Roku","","success")}

        else {swal ("Debe seleccionar una opción","","error"); jugar = 0}
        
        
    

  let ocultarsubtitulo = document.getElementById("subtitulo")
    ocultarsubtitulo.style.display = "none"
    if (jugar == 1){

        seleccionp2() 
        }
   
}


function seleccionp2 (){
    let seleccionaleatoriop2 = aleatorio(1,3)
    let spanmascotap2 = document.getElementById("htmlmascotap2")
    
    if (seleccionaleatoriop2 == 1){
        spanmascotap2.innerHTML = "  Aang "
    }
    else if (seleccionaleatoriop2 == 2){
        spanmascotap2.innerHTML = "  Korra "
    }
    else if  (seleccionaleatoriop2 == 3) {
        spanmascotap2.innerHTML = " Roku  " }
}
// ataques
function ataquefuego (){
    ataquep1 = "Fuego"
    //alert ("Haz atacado con: "+ ataquep1)
    funataquealeatoriop2()
}
function ataqueagua (){
    ataquep1 = "Agua"
    //alert ("Haz atacado con: "+ ataquep1)
    funataquealeatoriop2()
}
function ataquetierra (){
    ataquep1 = "Tierra"
    //alert ("Haz atacado con: "+ ataquep1)
    funataquealeatoriop2()
}
function funataquealeatoriop2 (){
    let ataquealeatoriop2 = aleatorio(1,3)
    
    if (ataquealeatoriop2 == 1){
        ataquep2 = "Fuego"} 

    else if (ataquealeatoriop2 == 2){
        ataquep2 = "Agua"}

    else if (ataquealeatoriop2 == 3){
        ataquep2 = "Tierra"}

        combate()
 }
 //Combate
 function combate(){
    let spanvidap1 = document.getElementById("htmlvidasp1")
    let spanvidap2 = document.getElementById("htmlvidasp2")

    if (ataquep1 == ataquep2){
      crearmensaje("Empate")
    }
    else if (ataquep1 == "Fuego" &&  ataquep2== "Tierra"){
        crearmensaje("Victoria")
        varvidasp2-- 
        spanvidap2.innerHTML = varvidasp2
    }
    else if (ataquep1 == "Agua" && ataquep2 == "Fuego"){
        crearmensaje("Victoria")
        varvidasp2-- 
        spanvidap2.innerHTML = varvidasp2
    }
    else if (ataquep1 == "Tierra" && ataquep2 == "Agua"){
        crearmensaje("Victoria")
        varvidasp2-- 
        spanvidap2.innerHTML = varvidasp2
    }
    else {crearmensaje("Derrota")
        varvidasp1-- 
        spanvidap1.innerHTML = varvidasp1}

        avisos()
    }
function avisos(){
     if (varvidasp1 == 0){
        mensajefinal ("Valiste v prro")
            swal ("Perdiste no quedan vidas", "Vuelve a intentarlo","error")
        } else if (varvidasp2 == 0)
    {mensajefinal ("Felicidades")
        swal ("Has ganado", "Vamos otra vez por la victoria","success")}
 }


 // Mensajes
function crearmensaje(resultado){
let secciondemensajes = document.getElementById ("resultadogame")
let varmensajeataquep1 = document.getElementById ("mensajeataquep1")
let varmensajeataquep2 = document.getElementById ("mensajeataquep2")


let nuevoataquep1 = document.createElement ("p")
let nuevoataquep2 = document.createElement ("p")

secciondemensajes.innerHTML=resultado
nuevoataquep1.innerHTML=ataquep1
nuevoataquep2.innerHTML=ataquep2


varmensajeataquep1.appendChild(nuevoataquep1)
varmensajeataquep2.appendChild(nuevoataquep2)
}
function mensajefinal(resultadofinal){

    let secciondemensajes = document.getElementById ("resultadogame")
    
    secciondemensajes.innerHTML = resultadofinal
    


//Deshabilitar botones
    let botonfuego = document.getElementById ("boton-fuego")
    botonfuego.disabled = true

    let botonagua = document.getElementById ("boton-agua")
    botonagua.disabled = true

    let botontierra = document.getElementById ("boton-tierra")
    botontierra.disabled = true

   

   let ocultarreinicio= document.getElementById("boton-reinicio")
    ocultarreinicio.style.display = "block"
    
}
function funreinicio(){
    location.reload()
}

//Aleatorio
function aleatorio (min, max){
return Math.floor(Math.random()*(max - min + 1)+ min)
}


//Carga del código desde el inicio
window.addEventListener ('load', iniciarJ)


