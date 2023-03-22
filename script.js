
const formulario = document.getElementById('contact-form');
const divTheme = document.getElementById('select-theme');
const templateParams = {
    nombre: document.getElementById('nombre').value.trim(),
    email: document.getElementById('email').value.trim(),
    telefono: document.getElementById('telefono').value.trim(),
    mensaje: document.getElementById('mensaje').value.trim()
}


window.onload = function () {
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();
        emailjs.sendForm('service_ac0sino', "template_5qfsa5p", formulario)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Tu mensaje ha sido enviado',
                    text:'Nos pondremos en contactao contigo lo antes posible',
                    showConfirmButton: false,
                    timer: 3500
                  })
            },
                (e) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Tu mensaje no se envio',
                        text:'Intenta de nuevo o escribenos por WhatsApp',
                        showConfirmButton: false,
                        timer: 3500
                      })
                })
    })
}

const setTheme = () => {
    divTheme.classList.value === 'white-theme'
        ?
        (divTheme.classList.remove('white-theme'),
            divTheme.classList.add('dark-theme'))
        :
        (divTheme.classList.remove('dark-theme'),
            divTheme.classList.add('white-theme'))
};