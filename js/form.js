import {sendData} from './create-fetch.js';
import {showAlert} from './util.js';

const form = document.querySelector('.ad-form');
const sendDataButton = form.querySelector('.ad-form__submit');
const resetFormButton = form.querySelector('.ad-form__reset');

const setUserFormSubmit = (onSuccess) => {
  sendDataButton.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(),
      () => showAlert('Не удалось отправить форму. Попробуйте ещё раз'),
      new FormData(evt.target),
    );
    form.reset();
  });
};

export {setUserFormSubmit}


