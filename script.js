// JavaScript
console.log('Hello world!');
const map = L.map('map').setView([33.67100957933217, 130.44253875888634], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//アイコン
//const whiteIcon = L.icon({
//    iconUrl: 'images/ico.png',
//    shadowUrl: 'images/ico_shadow.png',
  
//  iconSize:     [40, 40], // size of the icon
//  shadowSize:   [40, 40], // size of the shadow
//  iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
//  shadowAnchor: [20, 40],  // the same for the shadow
//  popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
 // });

//  L.marker([33.67100957933217, 130.44253875888634], { icon: whiteIcon }).addTo(map).bindPopup('こんにちは！').openPopup(); 

//複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
    options: {
      shadowUrl: 'images/ico_shadow.png',
      iconSize: [40, 40],
      shadowSize: [40, 40],
      iconAnchor: [20, 40],
      shadowAnchor: [20, 40],
      popupAnchor: [0, -42]
    }
  });
  
  const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
    pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' });
  
    L.marker([33.60772662904299, 130.40191731267456], { icon: whiteIcon }).addTo(map).bindPopup('こんにちは！');
    L.marker([33.670695190572545, 130.44482119304593], { icon: pinkIcon }).addTo(map).bindPopup('こんにちは！');
       