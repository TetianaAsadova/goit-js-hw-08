import throttle from 'lodash.throttle';

const feedbackFormRef = document.querySelector('feedback-form');

feedbackFormRef.addEventListener(input, (e) => {
    e.preventDefault();
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);
});
