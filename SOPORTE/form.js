document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const countryInput = document.getElementById('inputCountry');
    const addressInput = document.getElementById('inputAddress');
    const commentInput = document.getElementById('inputComment');
    const messages = document.getElementById('messages'); 

    // Verificar que todos los campos estén completos y el email sea válido
    if (
        nameInput.value.trim() !== '' &&
        validateEmail(emailInput.value) &&
        phoneInput.value.trim() !== '' &&
        countryInput.value !== '' &&
        addressInput.value.trim() !== '' &&
        commentInput.value.trim() !== ''
    ) {
        messages.textContent = '¡Gracias, pronto alguien del equipo de soporte se pondrá en contacto contigo!';
        messages.classList.remove('hidden');
        messages.style.color = '#0511F2'; // Color del mensaje
        // Limpiar los campos
        nameInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';
        countryInput.value = '';
        addressInput.value = '';
        commentInput.value = '';
    } else {
        messages.textContent = 'Por favor, complete todos los campos correctamente.';
        messages.classList.remove('hidden');
        messages.style.color = '#F2F2F2'; // Color del mensaje
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}