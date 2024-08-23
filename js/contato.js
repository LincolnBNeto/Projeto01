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

function btnSendOnClick() {

    const inome = document.getElementById('inome')
    const iphone = document.getElementById('iphone')
    const icpf = document.getElementById('icpf')
    const ien = document.getElementById('ien')
    const icity = document.getElementById('icity')
    const istate = document.getElementById('istate')
    const mu = document.querySelector('mu')

    if (inome.value.trim() === "") {
        alert('Preenchimento obrigatório: Nome')
        inome.focus()
    }
    else if (isNaN(parseInt(iphone.value))) {
        alert('Tipo de dado inválido: Telefone')
        iphone.value = ''
        iphone.focus()
    }
    else if (isNaN(parseInt(icpf.value))) {
        alert('Tipo de dado inválido: CPF')
        icpf.value = ''
        icpf.focus()
    }
    else if (ien.value.trim() ==='') {
        alert('Preenchimento obrigatório: Endereço')
        ien.focus()
    }
    else if (icity.value === 0) {
        alert('Escolha obrigatória: Cidade')
        icity.focus()
    }
    else if (form.istate.selectedIndex == '') {
        alert('Escolha obrigatória: Estado')
        istate.focus()
    }
    else if (form.sexo.selectedIndex == '') {
        alert('Escolha obrigatória: Sexo')
        sexo.focus()
    }
    else if (form.tp.selectedIndex == '') {
        alert('Escolha obrigatória: Reserva')
        tp.focus()
    }
    else if (form.mu.value == '') {
        alert('Escolha obrigatória: Assento')
        mu.focus()
    }
    else {
        form.submit()
        alert('Seus dados foram enviados com sucesso !!')
    }
}