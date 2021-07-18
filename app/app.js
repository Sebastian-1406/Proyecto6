let boton = document.querySelector(".fa-hamburger")
let body = document.querySelector("body")

boton.addEventListener("click", () => {

    let respuesta =  body.classList.toggle("active")

    if(respuesta){
        document.querySelector(".fas").classList.replace("fa-hamburger", "fa-times")
    }else {
        document.querySelector(".fas").classList.replace("fa-times", "fa-hamburger")
        
    }






})