// Esperar 1 segundo antes de mostrar la animación
setTimeout(function() {
    Swal.fire({
      title: 'Bienvenido a mi CV!!',
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
        text: 'Por favor, complete todos los campos del formulario.',
      });
    } else {
            Swal.fire(
              'Datos enviados correctamente!',
              'En breve me estare comunicando contigo',
              'Gracias!'
            );
          
    }
  });

  // Add event listener to the button
  var enviarButton = document.getElementById('enviar');
  enviarButton.addEventListener('click', showSuccessMessage);
