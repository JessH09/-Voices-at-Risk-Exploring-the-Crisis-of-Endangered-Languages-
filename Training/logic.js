// Creating the map object
let myMap = L.map("map", {
    center: [40.73605231373637, -74.01544050111481],
    zoom: 5
  });
  
  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);

// Use this link to get the GeoJSON data.
let link = "Filtered.geojson";

// Getting the GeoJSON data and adding it to the map
d3.json(link).then(function(data) {
  // Creating a GeoJSON layer with the retrieved data
  geojsonLayer = L.geoJson(data, {
    onEachFeature: function(feature, layer) {
      // Add mouseover functions
      layer.on('mouseover', function(e) {
          // Display popup 
          layer.bindPopup(
              '<b>Name in English:</b> ' + feature.properties['Name in English'] + '<br>' +
              '<b>Countries:</b> ' + feature.properties['Countries'] + '<br>' +
              '<b>Degree of Endangerment:</b> ' + feature.properties['Degree of endangerment'] + '<br>' +
              '<b>Number of Speakers:</b> ' + feature.properties['Number of speakers']
          ).openPopup();
      });
      // Reset popup on mouseout
      layer.on('mouseout', function(e) {
          layer.closePopup();
      });
  }
  
  }).addTo(myMap);
});