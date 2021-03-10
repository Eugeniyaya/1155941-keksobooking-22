const GET_URL = 'https://22.javascript.pages.academy/keksobooking/data';

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
}


//const data = new FormData();
const sendData = (url, onSuccess, onError, body) => () => {
  return fetch(
    'https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      credentials: 'same-origin',
      body,
    })

    .then((response)  =>
    {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .catch((err) => {


      onError(err);
    });
}


export {getData}

