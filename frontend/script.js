document.getElementById('formPessoa').addEventListener('submit', async (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;

    const adressData = {
        Nome: nome,
        CPF: cpf,
        Telefone: telefone
    }

    try {
        const response = await fetch('http://localhost:3000/api/pessoas', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(adressData)
        });

        const result = await response.json();

        if (response.ok) {
            document.getElementById('message').innerText = 'Endereço enviado com sucesso';
        } else {
            document.getElementById('message').innerText =  `Erro: ${result.message}`;
        }
    } catch (error) {
        document.getElementById('message').innerText = 'Erro na comunicação com o servidor '
    }
});