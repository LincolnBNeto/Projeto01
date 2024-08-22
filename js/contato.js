function btnSendOnClick() {
    const txtName = document.getElementById('txtName')
    const txtCity = document.getElementById('txtCity')
    const txtAge = document.getElementById('txtAge')
    if (txtName.value.trim() === "") {
        alert('Preenchimento obrigatório: Nome')
        txtName.focus()
    }
    else if (txtAge.value.trim() ==='') {
        alert('Preenchimento obrigatório: Idade')
        txtName.focus()
    }
    else if (isNaN(parseInt(txtAge.value))) {
        alert('Tipo de dado inválido: Idade')
        txtAge.value = ''
        txtAge.focus()
    }
    else if (txtCity.value.trim() ==='') {
        alert('Preenchimento obrigatório: Cidade')
        txtName.focus()
    }
    else if (cboGender.selectedIndex === 0) {
        alert('Escolha obrigatória: Sexo')
        cboGender.focus()
    }
    else if (form.optMts.value == '') {
        alert('Escolha obrigatória: Estado Civil')
        optMts.focus()
    }
    else {
        form.submit()
    }
}