// assigning the map 
var map = L.map('map').setView([51.505, -0.09], 12);

// adding the map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// adding a marker for the destination you want
var marker = L.marker([51.5, -0.09]).addTo(map);

// adding a pop for the destination
marker.bindPopup("<b>part of london</b><br>but i am a pop up.").openPopup();
// the openPopup method at the end allows for the pop up to automatically show. 
// when deleted you will have to click on the marker to be about to look at the pop up.

