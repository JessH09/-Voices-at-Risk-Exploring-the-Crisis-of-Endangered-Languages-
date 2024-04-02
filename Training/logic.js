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

// Getting our GeoJSON data
d3.json(link).then(function(data) {
    // Creating a GeoJSON layer with the retrieved data
    L.geoJson(data).addTo(myMap);
  });


// // Load GeoJSON data and add it to the map
//     fetch('endangered_languages.geojson')
//     .then(response => response.json())
//     .then(data => {
//         L.geoJSON(data, {
//             // Function to style each feature
//             style: function(feature) {
//                 var color = '#3388ff'; // Default color
//                 // Customize color based on degree of endangerment
//                 if (feature.properties['Degree of endangerment'] === 'Vulnerable') {
//                     color = '#ff9933'; // Yellow
//                 } else if (feature.properties['Degree of endangerment'] === 'Endangered') {
//                     color = '#ff3333'; // Red
//                 } else if (feature.properties['Degree of endangerment'] === 'Critically endangered') {
//                     color = '#990033'; // Dark red
//                 }
//                 return {
//                     fillColor: color,
//                     color: '#000',
//                     weight: 1,
//                     opacity: 1,
//                     fillOpacity: 0.8
//                 };
//             },
//             // Function to add popup for each feature
//             onEachFeature: function(feature, layer) {
//                 layer.bindPopup('<b>' + feature.properties['Name in English'] + '</b><br>' +
//                                 'Countries: ' + feature.properties['Countries'] + '<br>' +
//                                 'Degree of Endangerment: ' + feature.properties['Degree of endangerment'] + '<br>' +
//                                 'Number of Speakers: ' + feature.properties['Number of speakers']);
//             }
//     })}).addTo(map);