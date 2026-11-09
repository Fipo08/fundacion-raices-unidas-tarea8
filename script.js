const form = document.querySelector('#donation-form');
const message = document.querySelector('#form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    message.textContent = 'Completa el monto y un correo electrónico válido.';
    return;
  }
  const selectedAmount = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 })
    .format(Number(form.amount.value));
  message.textContent = `Solicitud por ${selectedAmount} validada. La integración de pago se realizará en un entorno seguro.`;
});
