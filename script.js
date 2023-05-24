
/* alternar la visibilidad de los enlaces de navegación cuando se haga clic en el botón “Menú”.
 va primero este query selector antes que el resto de las funciones */

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})


function showAlert() {

    alert("hola, esta es una alerta de Java Script");
}

// Agregar un oyente de eventos al formulario para manejar el evento submit//

const form = document.getElementById("myForm")

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}

function validateForm() {
    const emailInput = document.getElementById('email')
    const email = emailInput.value

    if (!validateEmail(inputValue)) {
        alert('Por favor ingrese un correo electrónico válido.');
    } else {
        alert('Correo electrónico enviado correctamente.');
    }
}
form.addEventListener("submit", function(event)
{
        event.preventDefault()
        validateForm();
})


const email = emailInput.value;

