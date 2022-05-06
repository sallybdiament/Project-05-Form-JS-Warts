const botaoLogin = document.getElementById('botao');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('senha');
const checkBox = document.getElementById('agreement');
const btnEnviar = document.getElementById('submit-btn');

botaoLogin.addEventListener('click', () => {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  }
  alert('Email ou senha inválidos.');
});

btnEnviar.disabled = true;
checkBox.addEventListener('click', () => {
  if (checkBox.checked) {
    btnEnviar.disabled = false;
  }
});
