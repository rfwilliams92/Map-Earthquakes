let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

let sateliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satelite-streets-v11',
    accessToken: API_KEY
});

let baseMaps = {
    "Streets": streets,
    "Satelite": sateliteStreets
};

let map = L.map("mapid", {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
});

d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
    L.geoJSON(data).addTo(map);
});

// d3.json(torontoData).then(function(data){
//     console.log(data);
//     L.geoJSON(data,{
//         style: myStyle,
//         onEachFeature: function (feature, layer) {
//             layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3> <hr><h3> Destination: " + feature.properties.dst + "</h3>");
//         }
//     }).addTo(myMap);
// });