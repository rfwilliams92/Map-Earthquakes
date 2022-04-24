# Map-Earthquakes

## Purpose
Visually show the differences between the magnitudes of earthquakes (using GeoJSON earthquake data from the [USGS website](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)) all over the world for the last seven days. Using the Leaflet library, I ploted the data on a Mapbox map through an API request and created interactivity for the earthquake data.

## Result
There are 3 data overlays: 
- Earthquakes (GeoJSON point type objects)
- Earthquakes with a 4.5 magnitude or higher (GeoJSON point type objects)
- Tectonic Plate Lines (GeoJSON LineString type objects)

There are 3 mapbox base layers:
- Streets (mapbox/streets-v11)
- Satellite (mapbox/satellite-v9)
- Light Grey (mapbox/light-v10) shown below

![This is an Image]()
