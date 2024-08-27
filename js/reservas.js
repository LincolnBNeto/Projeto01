
function btnSendOnClick() {
    
    document.getElementById('reservation-form').addEventListener('button'), function(event) {
        // Obtém os valores dos campos
        const data = document.getElementById('idata').value;
        const hora = document.getElementById('ihora').value;
        const number = document.getElementById('in').value;
        const nome = document.getElementById('inome').value;
        const email = document.getElementById('iemail').value;
        const phone = document.getElementById('iphone').value;
        const cpf = document.getElementById('icpf').value;
        const endereco = document.getElementById('ien').value;
        const city = document.getElementById('icity').value;
        const state = document.getElementById('istate').value;
        const sexo = document.querySelector('input[name="sexo"]:checked');
        const tp = document.querySelector('input[name="tp"]:checked');
        const area = document.querySelector('input[name="area"]:checked');
        const privacyConsent = document.getElementById('privacy-consent').checked;
        const terms = document.getElementById('terms').checked;
        const pay = document.getElementById('ipay').value;

        // Mensagens de erro
        let errorMessage = '';

        // Verifica se a data está preenchida
        if (!data) {
            errorMessage += 'A data é obrigatória.\n';
        }

        // Verifica se a hora está preenchida e está dentro do intervalo permitido
        if (!hora) {
            errorMessage += 'A hora é obrigatória.\n';
        } else {
            const time = new Date(`1970-01-01T${hora}:00`);
            const minTime = new Date('1970-01-01T15:00:00');
            const maxTime = new Date('1970-01-01T01:00:00');
            if (time < minTime && time > maxTime) {
                errorMessage += 'A hora deve estar entre 15:00 e 01:00.\n';
            }
        }

        // Verifica se o número de pessoas está preenchido e dentro do intervalo
        if (!number || number < 1 || number > 50) {
            errorMessage += 'O número de pessoas deve ser entre 1 e 50.\n';
        }

        // Verifica se todos os campos obrigatórios estão preenchidos
        if (!nome) {
            errorMessage += 'O nome é obrigatório.\n';
        }
        if (!email || !validateEmail(email)) {
            errorMessage += 'O e-mail deve ser um e-mail válido.\n';
        }
        if (!phone || !validatePhone(phone)) {
            errorMessage += 'O telefone deve estar no formato (00) 00000-0000.\n';
        }
        if (!cpf || !validateCPF(cpf)) {
            errorMessage += 'O CPF deve estar no formato xxx.xxx.xxx-xx.\n';
        }
        if (!endereco) {
            errorMessage += 'O endereço é obrigatório.\n';
        }
        if (!city) {
            errorMessage += 'A cidade é obrigatória.\n';
        }
        if (state === "0") {
            errorMessage += 'O estado deve ser selecionado.\n';
        }
        if (!sexo) {
            errorMessage += 'O sexo é obrigatório.\n';
        }
        if (!tp) {
            errorMessage += 'O tipo de reserva é obrigatório.\n';
        }
        if (!area) {
            errorMessage += 'A preferência de assento é obrigatória.\n';
        }
        if (!privacyConsent) {
            errorMessage += 'O consentimento de dados é obrigatório.\n';
        }
        if (!terms) {
            errorMessage += 'Você deve aceitar os termos e condições.\n';
        }
        if (pay === "0") {
            errorMessage += 'A forma de pagamento deve ser selecionada.\n';
        }

        // Exibe mensagem de erro se houver alguma
        if (errorMessage) {
            alert(errorMessage);
            event.preventDefault(); // Impede o envio do formulário
        }
    }
}