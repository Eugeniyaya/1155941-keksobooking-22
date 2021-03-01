import {getRandomNumber, getRandomElement, getRandomFraction} from './util.js';

const TYPE_HOME = ['palace', 'flat', 'house', 'bungalow'];
const TYPE_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const TIME_CHECKIN = [12, 13, 14];
const TIME_CHECKOUT = [12, 13, 14];
const photosArr = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

const adverts = [];
const generateAds = function() {
  for (let i=1; i<=10; i++) {
    let xAd = getRandomFraction(35.65000 , 35.70000, 5);
    let yAd = getRandomFraction(139.70000 , 139.80000, 5);

    let chooseFeatures = () => {
      let features = [];
      let featuresLength = TYPE_FEATURES.length;
      let nFeature = getRandomNumber(0, featuresLength);
      for(let i= 0; i < nFeature; i++) {
        features.push(TYPE_FEATURES[i]);
      }
      return features;
    }

    const choosePhotos = () => {
      let photos = [];
      let photosLength = photosArr.length;
      let nPhotos = getRandomNumber(0, photosLength);
      for(let i=0; i < nPhotos; i++) {
        photos.push(photosArr[i]);
      }
      return photos;
    }

    const oneAd = {
      autor:
        {avatar:'img/avatars/user0' + getRandomNumber(1,8) + '.png'},
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
      location: {x:xAd, y:yAd},
    };
    adverts.push(oneAd);
  }
}
generateAds();

export {adverts, generateAds}



