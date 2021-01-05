"use strict"
let mymap = L.map('mapid').setView([41.3870154, 2.1700471], 17);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

L.marker([41.3870154, 2.1700471]).addTo(mymap).bindPopup("<b>Plaza Catalunya</b>, Barcelona").openPopup();
L.marker([41.3868561, 2.1661102]).addTo(mymap).bindPopup("<b>Restaurante Centfocs</b><br/>Restaurate Mediterraneo</b><br/>Calle Balmes, 16, 08007, Barcelona").openPopup();
