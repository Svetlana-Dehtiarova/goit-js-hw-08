import throttle from 'lodash.throttle';

const contactFormEl = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('.feedback-form input');
const inputMessage = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';

contactFormEl.addEventListener('input', throttle(onContactFormFieldInput, 500));
contactFormEl.addEventListener('submit', onContactFormSubmit);

function onContactFormFieldInput() {
    const userInfoFromLS = JSON.stringify({ email: inputEmail.value, massage: inputMessage.value });
    localStorage.setItem(STORAGE_KEY, userInfoFromLS);
}
  
function onContactFormSubmit(event) {
    event.preventDefault();
    if (!event.target.email.value || !event.target.message.value) {
        return alert('Please fill all fields');
    }
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  contactFormEl.reset();
  localStorage.removeItem('STORAGE_KEY');
};

fillContactFormFields();

function fillContactFormFields(event) {
    const outputInfo = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (outputInfo) {
        inputEmail.value = outputInfo.email;
        inputMessage.value = outputInfo.massage;
    }
};


