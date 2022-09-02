import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const inputStorage = {};
const refs = {
  inputFormFeedback: document.querySelector('.feedback-form'),
  inputFormEmail: document.querySelector('[type="email"]'),
  inputFormMessage: document.querySelector('[name="message"]'),
  inputFormSubmitBtn: document.querySelector('[type="submit"]'),
};

refs.inputFormFeedback.addEventListener('submit', onFormSubmit);
refs.inputFormFeedback.addEventListener('input', throttle(onInputStorage, 500));
populateTextarea();

// * convert to string and safe to storage_key
function onInputStorage(e) {
  inputStorage[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(inputStorage));
}

// * work with button submit
function onFormSubmit(evt) {
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  // * 1 add prevent default
  evt.preventDefault();

// *  check if some input filled if not warning
  const formElements = evt.currentTarget.elements;
  const emailValue = formElements.email.value;
  const messageValue = formElements.message.value;
  if (emailValue === '' || messageValue === '') {
    alert('Все поля ввода должны быть заполнены. Исправьте, пожалуйста.');
  };

// *  clear all fields
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
};

// *  get from local storage and receive variables to names
function populateTextarea() {
  const savedStorageInputs = localStorage.getItem(STORAGE_KEY);
  if (savedStorageInputs) {
    refs.inputFormEmail.value = JSON.parse(savedStorageInputs).email;
    refs.inputFormMessage.value = JSON.parse(savedStorageInputs).message;
  };
};