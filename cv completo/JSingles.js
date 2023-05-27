// Esperar 1 segundo antes de mostrar la animación
setTimeout(function() {
    Swal.fire({
      title: 'Welcome to my CV!',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  }, 300); // 1000 milisegundos = 1 segundo
  
document.querySelector('.formContacto').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se envíe el formulario automáticamente

    // Obtener los valores de los campos
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    // Verificar si los campos están vacíos
    if (nombre === '' || email === '' || mensaje === '') {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please, complete all the forms fields.',
      });
    } else {
            Swal.fire(
              'Your info has been sent!',
              'i will contact you soon!',
              'Thanks!'
            );
          
    }
  });

  // Add event listener to the button
  var enviarButton = document.getElementById('enviar');
  enviarButton.addEventListener('click', showSuccessMessage);
