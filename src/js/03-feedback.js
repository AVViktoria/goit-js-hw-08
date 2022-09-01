import throttle from 'lodash.throttle';

const refs = {
  inputFormFeedback: document.querySelector('.feedback-form'),
  inputFormEmail: document.querySelector('[type="email"]'),
  inputFormMessage: document.querySelector('[name="message"]'),
  inputFormSubmitBtn: document.querySelector('[type="submit"]'),
};
const inputStorage = {};

refs.inputFormFeedback.addEventListener('submit', onFormSubmit);
refs.inputFormFeedback.addEventListener(
  'input',
  throttle(updateStorageInput, 500)
);

function updateStorageInput(elt) {
  inputStorage[elt.target.name] = elt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(inputStorage));
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  const formElements = event.currentTarget.elements;
  const emailValue = formElements.email.value;
  const messageValue = formElements.message.value;

  if (emailValue === '' || messageValue === '') {
    alert('Все поля ввода должны быть заполнены. Исправьте, пожалуйста.');
  }

  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

// CheckLocalStorage


// function isCheckLocalStorage(){
//   const data = JSON.parse(localStorage.getItem('feedback-form-state'));
// }
