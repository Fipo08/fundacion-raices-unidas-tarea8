const form = document.querySelector('#donation-form');
const message = document.querySelector('#form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    message.textContent = 'Completa el monto y un correo electrónico válido.';
    return;
  }
  message.textContent = 'Solicitud validada. La integración de pago se realizará en un entorno seguro.';
});

