function btnSendOnClick() {
 
    const txtNome = document.getElementById('inome');
    const txtAge = document.getElementById('iidade');
    const txtCity = document.getElementById('icidade');
    const txtEmail = document.getElementById('iemail');

    if (txtNome.value.trim() === "") {
        alert('Preenchimento obrigatório: Nome');
        txtNome.focus();
    }
    else if (txtCity.value.trim() === "") {
        alert('Preenchimento obrigatório: Cidade');
        txtNome.focus();
    }
    else if (!validateEmail(txtEmail.value)) {
        alert('E-mail inválido');
        txtEmail.value = '';
        txtEmail.focus();
    }
    else if (txtAge.value < 1 || txtAge.value > 200) {
        alert('A idade deve ser positiva');
        txtAge.focus();
    }
    else {
        form.submit();
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}