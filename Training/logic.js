// Creating the map object
let myMap = L.map("map", {
    center: [40.73605231373637, -74.01544050111481],
    zoom: 11
  });
  
  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);

// Use this link to get the GeoJSON data.
let link = "Filtered.geojson";

// Getting the GeoJSON data and adding it to the map
d3.json(link).then(function(data) {
  geojsonLayer = L.geoJson(data, {
      style: style,
      onEachFeature: onEachFeature
  }).addTo(myMap);
});