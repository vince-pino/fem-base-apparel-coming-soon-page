const btnEl = document.querySelector('button');
const inputEl = document.querySelector('input');

btnEl.addEventListener('click', handleClick);

function handleClick() {
  const inputValue = inputEl.value;

  const errorMessageEl = document.querySelector('.error-message');
  const errorIconEl = document.querySelector('.error-icon');
  if (checkEmail(inputValue) === true) {
    errorIconEl.style.display = 'none';
    errorMessageEl.style.visibility = 'hidden';
    inputEl.value = '';
  }
  else {
    errorIconEl.style.display = 'block';
    errorMessageEl.style.visibility = 'visible';
  }
  console.log(checkEmail(inputValue));
}

function checkEmail(input) {
  const email = input.split('');

  for (let i = 0; i < email.length; i++) {
    if (email[i] === '@' && email[email.length - 1] === 'm' && email[email.length - 2] === 'o' && 
        email[email.length - 3] === 'c' && email[email.length - 4] === '.') {
      return true;
    }
  }
}