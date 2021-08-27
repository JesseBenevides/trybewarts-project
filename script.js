function validateLogin() {
  const emailLogin = document.getElementById('email-login').value;
  const senhaLogin = document.getElementById('senha-login').value;
  if (emailLogin === 'tryber@teste.com' && senhaLogin === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
const buttonLogin = document.getElementById('button-login');
buttonLogin.addEventListener('click', validateLogin);

function submeteForm() {
  const submitButton = document.getElementById('submit-btn');
  const concorda = document.getElementById('agreement');
  if (concorda.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

function createCount() {
  const contador = document.createElement('p');
  const textareaContent = document.getElementById('textarea-content');
  contador.innerText = '500';
  contador.id = 'counter';
  textareaContent.appendChild(contador);
}

function countTextarea() {
  const textarea = document.getElementById('textarea');
  const textareaCount = document.getElementById('counter');
  let count = 500;

  count -= textarea.value.length;

  textareaCount.innerText = count;
}

createCount();
document.getElementById('agreement').addEventListener('input', submeteForm);
document.getElementById('textarea').addEventListener('keyup', countTextarea);
