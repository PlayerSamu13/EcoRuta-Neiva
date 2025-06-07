
var map = L.map('map').setView([2.9355, -75.2809], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Simular camiones con marcadores
let trucks = [];
for (let i = 0; i < 3; i++) {
  let lat = 2.935 + Math.random() * 0.02;
  let lng = -75.28 + Math.random() * 0.02;
  let marker = L.marker([lat, lng], {icon: L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2983/2983607.png',
    iconSize: [40, 40]
  })}).addTo(map);
  trucks.push({ marker, lat, lng });
}

// Mover aleatoriamente los camiones cada 3 segundos
setInterval(() => {
  trucks.forEach(truck => {
    truck.lat += (Math.random() - 0.5) * 0.001;
    truck.lng += (Math.random() - 0.5) * 0.001;
    truck.marker.setLatLng([truck.lat, truck.lng]);
  });
}, 3000);
