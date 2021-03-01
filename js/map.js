/* global L:readonly */
import {setActiveStatePage} from './form-disabled.js';
import {adverts} from './data.js';
import {generateOneCard} from './popup.js';
const adAddress = document.querySelector('#address');


const map = L.map('map-canvas')
  .on('load',() => {
    setActiveStatePage();
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
  const targetAdress = evt.target.getLatLng();
  adAddress.value = targetAdress.lat + ' ,' + targetAdress.lng;
});

const pinIcon = L.icon ({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
})

const addMarkers = function(ads) {
  ads.forEach((it) => {
    const pinMarker = L.marker(
      {
        lat: it.location.x,
        lng: it.location.y,
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
addMarkers(adverts);








