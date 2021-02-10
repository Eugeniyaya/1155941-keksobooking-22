'use strict';
const getRandomNumber = function (min, max) {
  if (min<=max) {
    let temp = min;
    min = max;
    max = temp;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomFraction = function (min, max, quantity) {
  if (min<=max) {
    let temp = min;
    min = max;
    max = temp;
  }
  let num = Math.random() * (max - min) + min;
  return +num.toFixed(quantity);
}
getRandomNumber(2,10);
getRandomFraction(2,10,3);

const TYPE_HOME = ['palace', 'flat', 'house', 'bungalow'];
const TIME_CHECKIN = [12, 13, 14];
const TIME_CHECKOUT = [12, 13, 14];

const getRandomElement = function(array) {
  return array[getRandomNumber(0, array.length)];
}
const generateAds = function() {
  let adverts = [];
  for (let i=1; i<=10; i++) {
    let xAd = getRandomFraction(35.65000 , 35.70000, 5);
    let yAd = getRandomFraction(139.70000 , 139.80000, 5);

    let chooseFeatures = () => {
      const TYPE_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
      let features = [];
      let featuresLength = TYPE_FEATURES.length;
      for(let i=getRandomNumber(0, featuresLength); i < featuresLength; i+=getRandomNumber(1, featuresLength)) {
        features.push(TYPE_FEATURES[i]);
      }
      return features;
    }

    let choosePhotos = () => {
      const photosArr = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
      let photos = [];
      let photosLength = photosArr.length;
      for(let i=getRandomNumber(0, photosLength); i < photosLength; i+=getRandomNumber(1, photosLength)) {
        photos.push(photosArr[i]);
      }
      return photos;
    }

    let oneAd = {
      autor:
        {avatar:'img/avatar/user0' + getRandomNumber(1,8)},
      offer:
        {title:'Лучшее предложение',
          adress:`${xAd}, ${yAd}`,
          price: 100,
          type:getRandomElement(TYPE_HOME),
          rooms:4,
          guests: 3,
          checkin:getRandomElement(TIME_CHECKIN),
          checkout: getRandomElement(TIME_CHECKOUT),
          features: chooseFeatures(),
          description:'Самое большое, светлое и уютное помещение в Токио!',
          photos: choosePhotos(),
        },
      location: {},
    };
    adverts.push(oneAd);
  }
}
generateAds();



