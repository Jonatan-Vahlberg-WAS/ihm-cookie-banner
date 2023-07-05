const firstTimeForm = document.querySelector('.first-time-form');
const FIRST_NAME_KEY = 'first-name';
const LAST_NAME_KEY = 'last-name';
function setFormCookie(key, value, exp) {
    document.cookie = `${key}=${value};expires=${exp};path=/`;
}

function getCookie(key) {
    const cookies = document.cookie.split(';');
    const cookie = cookies.find(cookie => cookie.includes(key));
    if (cookie) {
        return cookie.split('=')[1];
    }
    return null;
}

function hideFirstTimeForm() {
    firstTimeForm.classList.add('first-time-form--hidden');
}

function showFirstTimeForm() {
    firstTimeForm.classList.remove('first-time-form--hidden');
}

function showWelcomeMessage(firstName, lastName) {
    const welcomeMessage = document.createElement('h1');
    welcomeMessage.textContent = `Welcome ${firstName} ${lastName}`;
    document.body.querySelector(".main-content").prepend(welcomeMessage);
}

function hideWelcomeMessage() {
    const welcomeMessage = document.querySelector('h1');
    if (welcomeMessage) {
        welcomeMessage.remove();
    }
}

function checkIfLoggedIn() {
    const firstName = getCookie(FIRST_NAME_KEY);
    const lastName = getCookie(LAST_NAME_KEY);
    if (firstName && lastName) {
        hideFirstTimeForm();
        showWelcomeMessage(firstName, lastName);
    }

}

function handleFirstTimeFormSubmit(event) {
    event.preventDefault();

    const fields = event.target.elements;
    const firstName = fields.firstName.value;
    const lastName = fields.lastName.value;

    setFormCookie(FIRST_NAME_KEY, firstName, 'Fri, 31 Dec 2023 23:59:59 GMT')
    setFormCookie(LAST_NAME_KEY, lastName, 'Fri, 31 Dec 2023 23:59:59 GMT')
    hideFirstTimeForm();
    showWelcomeMessage(firstName, lastName);
}

firstTimeForm.addEventListener('submit', handleFirstTimeFormSubmit);

document.addEventListener('DOMContentLoaded', checkIfLoggedIn);