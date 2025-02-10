function OpcaoEmail() {
    let Email = document.getElementById('email');
    let Cpf = document.getElementById('cpf')
    Email.style.display = 'block';
    Cpf.style.display = 'none'
}

OpcaoEmail()

function OpcaoCpf() {
    let Email = document.getElementById('email');
    let Cpf = document.getElementById('cpf')
    Email.style.display = 'none';
    Cpf.style.display = 'block'
}

OpcaoCpf()