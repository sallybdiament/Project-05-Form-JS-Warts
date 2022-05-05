const botaoLogin = document.getElementById('botao');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('senha');

botaoLogin.addEventListener('click', () => {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  }
  alert('Email ou senha inválidos.');
});
