import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let inputStorage = {};
const refs = {
  inputFormFeedback: document.querySelector('.feedback-form'),
  inputFormEmail: document.querySelector('[type="email"]'),
  inputFormMessage: document.querySelector('[name="message"]'),
  inputFormSubmitBtn: document.querySelector('[type="submit"]'),
};
populateTextarea();
refs.inputFormFeedback.addEventListener('submit', onFormSubmit);
refs.inputFormFeedback.addEventListener('input', throttle(onInputStorage, 500));

// * convert to string and safe to storage_key
function onInputStorage(e) {
  inputStorage[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(inputStorage));
}

// * work with button submit
function onFormSubmit(evt) {
   
  // * 1 add prevent default
console.log(JSON.parse(localStorage.getItem(STORAGE_KEY))); 
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
  inputStorage = {};
};

// *  get from local storage and receive variables to names
function populateTextarea() {

  const savedStorageInputs = localStorage.getItem(STORAGE_KEY)
  const parseMessage = JSON.parse(savedStorageInputs);
  if (parseMessage) {
    refs.inputFormEmail.value = parseMessage.email || ''; 
    refs.inputFormMessage.value = parseMessage.message|| '';

localStorage.setItem(STORAGE_KEY, JSON.stringify(inputStorage));
 
}}

    // console.log(refs.inputFormEmail.value);
    // console.log(refs.inputFormMessage.value);
  // console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
// refs.inputFormEmail.addEventListener('input', () => {
//           localStorage.setItem(savedStorageInputs, refs.inputFormEmail.value);
//       });
//   refs.inputFormMessage.addEventListener('input', () => {     
//           localStorage.setItem(savedStorageInputs, refs.inputFormMessage.value);
//       });
    // };  
 
    // localStorage.setItem(STORAGE_KEY, JSON.stringify(inputStorage));
