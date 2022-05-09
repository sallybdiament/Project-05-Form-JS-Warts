const botaoLogin = document.getElementById('botao');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('senha');
const checkBox = document.getElementById('agreement');
const btnEnviar = document.getElementById('submit-btn');
const contador = document.getElementById('counter');
const textArea = document.getElementById('textarea');

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

// Fonte para fazer o requisito 20 do bônus:
// 1) https://www.youtube.com/watch?v=sRlgAjlwz0o&ab_channel=MatheusBattisti-HoradeCodar
// 2) https://pt.stackoverflow.com/questions/25753/como-fazer-um-contador-de-caracteres-de-uma-textarea

contador.innerHTML = 500;
textArea.addEventListener('input', () => {
  const tamanhoContador = textArea.value.length;
  contador.innerHTML = 500 - tamanhoContador;
  // contador.innerHTML -= 1;
});
