import {sendData} from './create-fetch.js';

const form = document.querySelector('.ad-form');
const sendDataButton = form.querySelector('.ad-form__submit');
const resetFormButton = form.querySelector('.ad-form__reset');

const onSuccessSendAd = () => {alert('Данные отправлены')};
const onErrorSendAd = () => {alert('Упс... ошибочка')};

const setUserFormSubmit = () => {
  sendDataButton.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(onSuccessSendAd, onErrorSendAd, new FormData(evt.target));
    form.reset();
  });
};

const resetUserFormSubmit = () => {
  resetFormButton.addEventListener('click', () => {
    form.reset();
  })
}

export {setUserFormSubmit, resetUserFormSubmit}


