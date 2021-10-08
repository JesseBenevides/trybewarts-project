function validateLogin() {
  const emailLogin = document.getElementById('email-login').value
  const senhaLogin = document.getElementById('senha-login').value
  if (emailLogin === 'tryber@teste.com' && senhaLogin === '123456') {
    alert('Olá, Tryber!')
  } else {
    alert('Email ou senha inválidos.')
  }
}

function submeteForm() {
  const submitButton = document.getElementById('submit-btn')
  const concorda = document.getElementById('agreement')
  if (concorda.checked) {
    submitButton.disabled = false
  } else {
    submitButton.disabled = true
  }
}

function createCount() {
  const contador = document.createElement('p')
  const textareaContent = document.getElementById('textarea-content')
  contador.innerText = '500'
  contador.id = 'counter'
  textareaContent.appendChild(contador)
}

function countTextarea() {
  const textarea = document.getElementById('textarea')
  const textareaCount = document.getElementById('counter')
  let count = 500

  count -= textarea.value.length

  textareaCount.innerText = count
}

// Salva os valores inseridos no Form

function getFamily() {
  const familyInputs = document.querySelectorAll('[name=family]')
  let familyChecked = ''

  for (const family of familyInputs) {
    if (family.checked) {
      familyChecked = family.value
    }
  }

  return familyChecked
}

function getSubjects() {
  const subjects = document.querySelectorAll('.subject')
  const subjectsChecked = []

  for (const subject of subjects) {
    if (subject.checked) {
      subjectsChecked.push(` ${subject.value}`)
    }
  }

  return subjectsChecked
}

function getRate() {
  const rateInputs = document.querySelectorAll('[name=rate]')
  let rateChecked = ''

  for (const rate of rateInputs) {
    if (rate.checked) {
      rateChecked = rate.value
    }
  }

  return rateChecked
}

function getFormData() {
  const name = document.getElementById('input-name').value
  const lastName = document.getElementById('input-lastname').value
  const email = document.getElementById('input-email').value
  const house = document.querySelector('[name=house]').value
  const family = getFamily()
  const subject = getSubjects()
  const rate = getRate()
  const comments = document.getElementById('textarea').value

  const data = {
    Nome: `${name} ${lastName}`,
    Email: email,
    Casa: house,
    Família: family,
    Matérias: subject,
    Avaliação: rate,
    Observações: comments
  }

  return data
}

function createDataElements() {
  const dataContent = document.createElement('div');
  dataContent.id = 'data-content';

  const formData = getFormData();
  const keys = Object.keys(formData);
  const values = Object.values(formData);

  for (let i = 0; i < keys.length; i += 1) {
    const p = document.createElement('p');
    p.innerText = `${keys[i]}: ${values[i]}`;
    dataContent.appendChild(p);
  }

  return dataContent;
}

function showData(event) {
  event.preventDefault();

  const data = createDataElements();

  const form = document.getElementById('evaluation-form');
  form.innerText = '';

  form.appendChild(data);
}

window.onload = () => {
  createCount();
  document.getElementById('agreement').addEventListener('input', submeteForm);
  document.getElementById('textarea').addEventListener('input', countTextarea);
  document.getElementById('button-login').addEventListener('click', validateLogin);
  
  document.getElementById('submit-btn').addEventListener('click', showData);
}
