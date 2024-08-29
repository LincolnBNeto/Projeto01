function btnSendOnClick() {
    const form = document.getElementById('reservation-form');

    const txtData = document.getElementById('idata');
    const txtHora = document.getElementById('ihora');
    const txtNumber = document.getElementById('in');
    const txtNome = document.getElementById('inome');
    const txtEmail = document.getElementById('iemail');
    const txtPhone = document.getElementById('iphone');
    const txtCpf = document.getElementById('icpf');
    const txtEndereco = document.getElementById('ien');
    const txtCity = document.getElementById('icity');
    const cboState = document.getElementById('istate');
    const radSexo = document.querySelector('input[name="sexo"]:checked');
    const radTipoReserva = document.querySelector('input[name="tp"]:checked');
    const radPreferencia = document.querySelector('input[name="area"]:checked');
    const chkNecessidadesEspeciais = document.querySelector('input[name="endereço"]:checked');
    const txtTexto = document.getElementById('itexto');
    const selCommunicationPreferences = document.getElementById('icommunication-preferences');
    const selPay = document.getElementById('ipay');
    const txtPromoCode = document.getElementById('ipromo-code');
    const chkPrivacyConsent = document.getElementById('privacy-consent');
    const chkTerms = document.getElementById('terms');


    if (!txtData.value) {
        alert('Preenchimento obrigatório: Data');
        txtData.focus();
    }
    else if (!txtHora.value) {
        alert('Preenchimento obrigatório: Hora');
        txtHora.focus();
    }
    else if (txtNumber.value < 1 || txtNumber.value > 50) {
        alert('Número de pessoas deve estar entre 1 e 50');
        txtNumber.focus();
    }
    else if (txtNome.value.trim() === "") {
        alert('Preenchimento obrigatório: Nome');
        txtNome.focus();
    }
    else if (!validateEmail(txtEmail.value)) {
        alert('E-mail inválido');
        txtEmail.value = '';
        txtEmail.focus();
    }
    else if (!validatePhone(txtPhone.value)) {
        alert('Telefone inválido');
        txtPhone.value = '';
        txtPhone.focus();
    }
    else if (!validateCpf(txtCpf.value)) {
        alert('CPF inválido');
        txtCpf.value = '';
        txtCpf.focus();
    }
    else if (txtEndereco.value.trim() === "") {
        alert('Preenchimento obrigatório: Endereço');
        txtEndereco.focus();
    }
    else if (txtCity.value.trim() === "") {
        alert('Preenchimento obrigatório: Cidade');
        txtCity.focus();
    }
    else if (cboState.value === "0") {
        alert('Selecione um estado');
        cboState.focus();
    }
    else if (!radSexo) {
        alert('Escolha obrigatória: Sexo');
    }
    else if (!radTipoReserva) {
        alert('Escolha obrigatória: Tipo de reserva');
    }
    else if (!radPreferencia) {
        alert('Escolha obrigatória: Preferência de assento');
    }
    else if (!chkNecessidadesEspeciais) {
        alert('Marque pelo menos uma necessidade especial');
    }
    else if (selCommunicationPreferences.value === "") {
        alert('Selecione a preferência de comunicação');
        selCommunicationPreferences.focus();
    }
    else if (selPay.value === "0") {
        alert('Selecione a forma de pagamento');
        selPay.focus();
    }
    else if (txtPromoCode.value.length < 1 || txtPromoCode.value.length > 7) {
        alert('Código de promoção deve ter entre 1 e 7 caracteres');
        txtPromoCode.focus();
    }
    else if (!chkPrivacyConsent.checked) {
        alert('Você deve aceitar a Política de Privacidade');
        chkPrivacyConsent.focus();
    }
    else if (!chkTerms.checked) {
        alert('Você deve aceitar os termos e condições');
        chkTerms.focus();
    }
    else {
        form.submit();
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^\(\d{2}\) \d{5}-\d{4}$/;
    return re.test(phone);
}

function validateCpf(cpf) {
    const re = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return re.test(cpf);
}