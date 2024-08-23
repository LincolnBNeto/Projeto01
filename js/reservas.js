document.addEventListener('DOMContentLoaded'), () => {
    const form = document.getElementById('reservation-form');

    form.addEventListener('submit', (event) => {
        // Previne o envio do formulário
        event.preventDefault();

        // Realiza a validação
        if (validateForm()) {
            // Se a validação for bem-sucedida, envie o formulário
            form.submit();
        }
    });

    function validateForm() {
        clearErrors();
        let valid = true;

        // Validate Date and Time
        const dateInput = document.getElementById('idata');
        const timeInput = document.getElementById('ihora');
        if (!dateInput.value) {
            showError(dateInput, 'Data é obrigatória.');
            valid = false;
        }
        if (!timeInput.value) {
            showError(timeInput, 'Hora é obrigatória.');
            valid = false;
        } else {
            const time = timeInput.value.split(':');
            const hour = parseInt(time[0], 10);
            const min = parseInt(time[1], 10);
            if (hour < 15 || hour > 24 || (hour === 24 && min > 0) || (hour === 1 && min < 0)) {
                showError(timeInput, 'A hora deve estar entre 15:00 e 01:00.');
                valid = false;
            }
        }

        // Validate Number of People
        const numberInput = document.getElementById('in');
        if (!numberInput.value || numberInput.value < 1 || numberInput.value > 50) {
            showError(numberInput, 'Número de pessoas deve estar entre 1 e 50.');
            valid = false;
        }

        // Validate Personal Information
        const nameInput = document.getElementById('inome');
        const emailInput = document.getElementById('iemail');
        const phoneInput = document.getElementById('iphone');
        const cpfInput = document.getElementById('icpf');
        const addressInput = document.getElementById('ien');
        const cityInput = document.getElementById('icity');
        const stateInput = document.getElementById('istate');

        if (!nameInput.value) {
            showError(nameInput, 'Nome é obrigatório.');
            valid = false;
        }
        if (!emailInput.value || !validateEmail(emailInput.value)) {
            showError(emailInput, 'E-mail inválido.');
            valid = false;
        }
        if (!phoneInput.value || !validatePhone(phoneInput.value)) {
            showError(phoneInput, 'Telefone inválido.');
            valid = false;
        }
        if (!cpfInput.value || !validateCPF(cpfInput.value)) {
            showError(cpfInput, 'CPF inválido.');
            valid = false;
        }
        if (!addressInput.value) {
            showError(addressInput, 'Endereço é obrigatório.');
            valid = false;
        }
        if (!cityInput.value) {
            showError(cityInput, 'Cidade é obrigatória.');
            valid = false;
        }
        if (!stateInput.value) {
            showError(stateInput, 'Estado é obrigatório.');
            valid = false;
        }

        // Validate Gender
        const genderInputs = document.getElementsByName('sexo');
        if (![...genderInputs].some(input => input.checked)) {
            showError(genderInputs[0], 'Sexo é obrigatório.');
            valid = false;
        }

        // Validate Reservation Type
        const reservationInputs = document.getElementsByName('tp');
        if (![...reservationInputs].some(input => input.checked)) {
            showError(reservationInputs[0], 'Tipo de reserva é obrigatório.');
            valid = false;
        }

        // Validate Seat Preference
        const seatPreferenceInputs = document.getElementsByName('area');
        if (![...seatPreferenceInputs].some(input => input.checked)) {
            showError(seatPreferenceInputs[0], 'Preferência de assento é obrigatória.');
            valid = false;
        }

        // Validate Special Needs
        const specialNeedsCheckbox = document.getElementById('icard');
        const specialNeedsTextarea = document.getElementById('itexto');
        if (specialNeedsCheckbox.checked && !specialNeedsTextarea.value) {
            showError(specialNeedsTextarea, 'Se você marcou necessidades especiais, deve informar detalhes.');
            valid = false;
        }

        // Validate Privacy Policy
        const privacyConsentCheckbox = document.getElementById('privacy-consent');
        const termsCheckbox = document.getElementById('terms');
        if (!privacyConsentCheckbox.checked) {
            showError(privacyConsentCheckbox, 'Você deve aceitar a Política de Privacidade.');
            valid = false;
        }
        if (!termsCheckbox.checked) {
            showError(termsCheckbox, 'Você deve aceitar os termos e condições.');
            valid = false;
        }

        // Validate Payment Information
        const paymentSelect = document.getElementById('ipay');
        if (paymentSelect.value === '0') {
            showError(paymentSelect, 'Forma de pagamento é obrigatória.');
            valid = false;
        }

        return valid;
    }

    function showError(element, message) {
        const error = document.createElement('div');
        error.classList.add('error');
        error.textContent = message;
        element.parentElement.appendChild(error);
    }

    function clearErrors() {
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => error.remove());
    }

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validatePhone(phone) {
        const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
        return regex.test(phone);
    }

    function validateCPF(cpf) {
        const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        return regex.test(cpf);
    }
}