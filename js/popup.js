const cardTemplate = document.querySelector('#card').content;
const TYPE_HOUSING = {'flat': 'Квартира', 'house': 'Дом', 'bungalow': 'Бунгало', 'palace': 'Дворец'}

const generateOneCard = (oneAd) => {
  const oneCard = cardTemplate.cloneNode(true);
  oneCard.querySelector('.popup__title').textContent = oneAd.offer.title;
  oneCard.querySelector('.popup__text--address').textContent = oneAd.offer.address;
  oneCard.querySelector('.popup__text--price').textContent = oneAd.offer.price + ' ₽/ночь';

  oneCard.querySelector('.popup__type').textContent = TYPE_HOUSING[oneAd.offer.type];

  oneCard.querySelector('.popup__text--capacity').textContent = oneAd.offer.rooms + ' комнаты для ' + oneAd.offer.guests + ' гостей';
  oneCard.querySelector('.popup__text--time').textContent = 'Заезд после ' + oneAd.offer.checkin + ', выезд до ' + oneAd.offer.checkout;

  const featuresList = oneCard.querySelector('.popup__features');
  featuresList.innerHTML = '';
  const featuresLength = oneAd.offer.features.length;
  if (featuresLength !== 0) {
    oneAd.offer.features.forEach((item) => {
      const liElement = document.createElement('li');
      liElement.className = 'popup__feature popup__feature--' + item;
      featuresList.appendChild(liElement);
    });
  } else {featuresList.classList.add('visually-hidden');}

  oneCard.querySelector('.popup__description').textContent = oneAd.offer.description;

  const photosList = oneCard.querySelector('.popup__photos');
  const onePhoto = oneCard.querySelector('.popup__photo');

  const photosLength = oneAd.offer.photos.length;
  if (photosLength !== 0) {
    oneAd.offer.photos.forEach((it) => {
      const oneImg = onePhoto.cloneNode(true);
      oneImg.src = it;
      photosList.removeChild(photosList.firstChild);
      photosList.appendChild(oneImg);
    });
    photosList.removeChild(photosList.children[0]);
  } else
  {photosList.classList.add('visually-hidden');}


  oneCard.querySelector('.popup__avatar').src = oneAd.author.avatar;
  return oneCard;
};

export {generateOneCard}



