import throttle from "lodash.throttle";
import '../css/common.css';
import '../css/03-feedback.css';

const formRef = document.querySelector('.feedback-form');
const textareaRef = document.querySelector('.feedback-form textarea');
const emailRef = document.querySelector('.feedback-form input');
const STORAGE_KEY = 'feedback-form-state';
const formData = {
    email: '',
    message: '',
}

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onTextareaInput, 500));


formRef.addEventListener('submit', e => {
    console.log(`formData`, formData);
})

addTextarea();

function onFormSubmit(e) {
    e.preventDefault();
    e.target.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function onTextareaInput(e) {
    formData[e.target.name] = e.target.value;
    const formDataJson = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, formDataJson);
};

function addTextarea(e) {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedMessage) {
        textareaRef.value = savedMessage.message;
        emailRef.value = savedMessage.email;
    }
}