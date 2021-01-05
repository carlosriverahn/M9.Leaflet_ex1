"use strict"
let mymap = L.map('mapid').setView([41.42638,2.17845], 17);
let theMarker  = {};


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

let iconCustomize = L.icon({
iconUrl: "../Imagen/programador.png",
iconSize: [40, 40],
});

mymap.on('click',function(e){
    console.log(e.latlng)
    if (theMarker != undefined) {
            mymap.removeLayer(theMarker);
    };
     theMarker = L.marker(e.latlng, {icon: iconCustomize})
     .addTo(mymap)
     .bindPopup(`<b>Tus coordenadas son</b> ${e.latlng}`)
     .openPopup();
});