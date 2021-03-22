/* global L:readonly */
import {setActiveStatePage} from './form-disabled.js';
import {getData} from './create-fetch.js';
import {generateOneCard} from './popup.js';


const adAddress = document.querySelector('#address');

const addMarkers = function(ads) {
  ads.forEach((it) => {
    const pinMarker = L.marker(
      {
        lat: it.location.lat,
        lng: it.location.lng,
      },
      {
        draggable: false,
        icon: pinIcon,
      },
    );
    pinMarker.addTo(map);
    pinMarker.bindPopup(
      generateOneCard(it),
      {
        keepInView: true,
      },
    );
  });
};
const onErr = () => {
  const element = document.createElement('div');
  element.textContent = 'Произошла ошибка';
  element.classList.add('error__message');
  element.style.color = 'red';
  element.style.background = 'yellow';
  element.style.textAlign = 'center';
  const body = document.querySelector('body');
  body.prepend(element);

  setTimeout (() => {
    body.removeChild(element);
  }, 5000)
};

const map = L.map('map-canvas')
  .on('load',() => {
    setActiveStatePage(adAddress.value = '35.68' + ' 139.75');
    getData(addMarkers, onErr);
  })
  .setView ({
    lat: 35.6629,
    lng: 139.6493,
  }, 10);
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

map.on('load', () => {
  adAddress.value = '35.68' + '139.75';
});

const mainPinIcon = L.icon ({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.6825,
    lng: 139.7521,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const targetAddress = evt.target.getLatLng();
  adAddress.value = targetAddress.lat.toFixed(2) + ' ,' + targetAddress.lng.toFixed(2);
});

const pinIcon = L.icon ({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

console.log(mainPinMarker._latlng);








