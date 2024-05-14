const form = document.querySelector(".formulario-fale-conosco")

const masck = document.querySelector(".mascara-form")

function showForm(){
    form.style.left ="50%"
    form.style.transform = "translateX(-50%)"
    masck.style.visibility = "visible"
}

function hideMasck(){
    form.style.left = "-288px"
    masck.style.visibility = "hidden"
}
