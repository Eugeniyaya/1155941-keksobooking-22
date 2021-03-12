const GET_URL = 'https://22.javascript.pages.academy/keksobooking/data';
const SET_URL = 'https://22.javascript.pages.academy/keksobooking';

const getData = (onSuccess, onError) => {
  return fetch (GET_URL)

    .then((response)  =>
    {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })

    .then((json) => {
      onSuccess(json);
    })
    .catch((err) => {
      onError(err);
    });
};

const sendData = (onSuccess, onError, body) => {
  return fetch(SET_URL,
    {
      method: 'POST',
      body,
    },
  )
    .then((response)  =>
    {
      if (response.ok) {
        onSuccess();
      }
      else {
        onError('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onError('Не удалось отправить форму. Попробуйте ещё раз');
    });
};


export {getData, sendData}

