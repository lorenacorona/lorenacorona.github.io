mapboxgl.accessToken = 'pk.eyJ1IjoiYWxiZXJ0b2dhbGxlZ28iLCJhIjoiY2oxcWxsbWEwMDAweTJxbDR5ZHVsM3U3NSJ9.ZsmCCcqb8Kjz9GMbtLvkvQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-33, 40],
    zoom: 2
});
map.on('load', function() {
    map.addSource('vacations', {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [1.4821481999999833, 39.0200099]
                },
                "properties": {
                    "title": "Ibiza, Spain",
                    "description": "<li>February 2016</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-74.00594130000002, 40.7127837]
                },
                "properties": {
                    "title": "New York, USA",
                    "description": "<li>November 2015</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [28.97835889999999, 41.0082376]
                },
                "properties": {
                    "title": "Istanbul, Turkey",
                    "description": "<li>November 2015</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [14.43780049999998, 50.0755381]
                },
                "properties": {
                    "title": "Prague, Czechia",
                    "description": "<li>September 2014</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [16.37381890000006, 48.2081743]
                },
                "properties": {
                    "title": "Vienna, Austria",
                    "description": "<li>September 2014</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [19.04023499999994, 47.497912]
                },
                "properties": {
                    "title": "Budapest, Hungary",
                    "description": "<li>September 2014</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [23.727538800000048, 37.9838096]
                },
                "properties": {
                    "title": "Athens, Greece",
                    "description": "<li>May 2016</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-7.981084499999952, 31.6294723]
                },
                "properties": {
                    "title": "Marrakesh, Morocco",
                    "description": "<li>December 2016</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-0.12775829999998223, 51.5073509]
                },
                "properties": {
                    "title": "London, UK",
                    "description": "<li>July 2008</li><li>June 2016</li><li>November 2016</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.752245399999993, 59.9138688]
                },
                "properties": {
                    "title": "Oslo, Norway",
                    "description": "<li>March 2016</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-122.41941550000001, 37.7749295]
                },
                "properties": {
                    "title": "San Francisco, CA, USA",
                    "description": "<li>May 2016</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [11.25237919999995, 43.7679178]
                },
                "properties": {
                    "title": "Florence, Italy",
                    "description": "<li>October 2016</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [21.012228700000037, 52.2296756]
                },
                "properties": {
                    "title": "Warsaw, Poland",
                    "description": "<li>December 2016</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [4.895167899999933, 52.3702157]
                },
                "properties": {
                    "title": "Amsterdam, Netherlands",
                    "description": "<li>April 2017</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-119.59360379999998, 37.74557009999999]
                },
                "properties": {
                    "title": "Yosemite Valley, CA, USA",
                    "description": "<li>May 2016</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [13.404953999999975, 52.52000659999999]
                },
                "properties": {
                    "title": "Berlin , Germany",
                    "description": "<li>July 2015</li><li>April 2017</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.3522219000000177, 48.85661400000001]
                },
                "properties": {
                    "title": "Paris, France",
                    "description": "<li>September 2009</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [7.447446799999966, 46.9479739]
                },
                "properties": {
                    "title": "Bern, Switzerland",
                    "description": "<li>September 2013</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [7.863204900000028, 46.6863481]
                },
                "properties": {
                    "title": "Interlaken, Switzerland",
                    "description": "<li>September 2013</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [7.0624775, 46.57775549999999]
                },
                "properties": {
                    "title": "Gruyères, Switzerland",
                    "description": "<li>September 2013</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [6.632273400000031, 46.5196535]
                },
                "properties": {
                    "title": "Lausanne, Switzerland",
                    "description": "<li>September 2013</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.309307200000035, 47.05016819999999]
                },
                "properties": {
                    "title": "Lucerne, Switzerland",
                    "description": "<li>September 2013</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [8.541694000000007, 47.3768866]
                },
                "properties": {
                    "title": "Zürich, Switzerland",
                    "description": "<li>September 2013</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [6.5367650000000594, 46.5613135]
                },
                "properties": {
                    "title": "Vaud, Switzerland",
                    "description": "<li>September 2013</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [6.143157699999961, 46.2043907]
                },
                "properties": {
                    "title": "Geneva, Switzerland",
                    "description": "<li>September 2013</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [9.737485099999958, 44.0990492]
                },
                "properties": {
                    "title": "Riomaggiore, Italy",
                    "description": "<li>October 2016</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [9.733893699999953, 44.11155939999999]
                },
                "properties": {
                    "title": "Manarola, Italy",
                    "description": "<li>October 2016</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [11.04854899999998, 43.4654323]
                },
                "properties": {
                    "title": "San Gimignano, Italy",
                    "description": "<li>October 2016</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [11.330757400000039, 43.31880899999999]
                },
                "properties": {
                    "title": "Siena, Italy",
                    "description": "<li>October 2016</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [23.501421299999947, 37.7408815]
                },
                "properties": {
                    "title": "Aegina, Greece",
                    "description": "<li>May 2016</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [22.80155309999998, 37.5673173]
                },
                "properties": {
                    "title": "Nafplion, Greece",
                    "description": "<li>May 2016</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-2.5879099999999653, 51.454513]
                },
                "properties": {
                    "title": "Bristol, UK",
                    "description": "<li>July 2008</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-1.8262150000000474, 51.17888199999999]
                },
                "properties": {
                    "title": "Stonehenge, UK",
                    "description": "<li>July 2008</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-8.629105299999992, 41.1579438]
                },
                "properties": {
                    "title": "Porto, Portugal",
                    "description": "<li>September 2010</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-8.410257300000012, 40.2033145]
                },
                "properties": {
                    "title": "Coimbra, Portugal",
                    "description": "<li>September 2010</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-8.652036100000032, 39.6169407]
                },
                "properties": {
                    "title": "Fátima, Portugal",
                    "description": "<li>September 2010</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-8.980046799999968, 39.54997539999999]
                },
                "properties": {
                    "title": "Alcobaça, Portugal",
                    "description": "<li>September 2010</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-9.381658900000048, 38.80286869999999]
                },
                "properties": {
                    "title": "Sintra, Portugal",
                    "description": "<li>September 2010</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-9.139336599999979, 38.7222524]
                },
                "properties": {
                    "title": "Lisbon, Portugal",
                    "description": "<li>September 2010</li><li>September 2012</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-0.5791799999999512, 44.837789]
                },
                "properties": {
                    "title": "Bordeaux, France",
                    "description": "<li>September 2009</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [4.835658999999964, 45.764043]
                },
                "properties": {
                    "title": "Lyon, France",
                    "description": "<li>September 2013</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [4.360053999999991, 43.836699]
                },
                "properties": {
                    "title": "Nimes, France",
                    "description": "<li>June 2014</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [4.807510999999977, 44.1380989]
                },
                "properties": {
                    "title": "Orange, France",
                    "description": "<li>June 2014</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-3.7037901999999576, 40.4167754]
                },
                "properties": {
                    "title": "Madrid, Spain",
                    "description": "<li>August 2016</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-3.5985570999999936, 37.1773363]
                },
                "properties": {
                    "title": "Granada, Spain",
                    "description": "<li>September 2016</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-5.984458899999936, 37.3890924]
                },
                "properties": {
                    "title": "Seville, Spain",
                    "description": "<li>September 2016</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-5.161225100000024, 36.746209]
                },
                "properties": {
                    "title": "Ronda, Málaga, Spain",
                    "description": "<li>September 2016</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-2.239982800000007, 36.7737869]
                },
                "properties": {
                    "title": "Cabo de Gata, Almería, Spain",
                    "description": "<li>September 2016</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-2.8776637999999366, 37.87983179999999]
                },
                "properties": {
                    "title": "Cazorla, Spain",
                    "description": "<li>September 2016</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-1.9812312999999904, 43.318334]
                },
                "properties": {
                    "title": "San Sebastian, Spain",
                    "description": "<li>August 2016</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-5.859326699999997, 43.3613953]
                },
                "properties": {
                    "title": "Asturias, Spain",
                    "description": "<li>June 2009</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-3.9878426999999874, 43.1828396]
                },
                "properties": {
                    "title": "Cantabria, Spain",
                    "description": "<li>June 2009</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-8.133855799999992, 42.5750554]
                },
                "properties": {
                    "title": "Galicia, Spain",
                    "description": "<li>September 2011</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-8.133855799999992, 42.5750554]
                },
                "properties": {
                    "title": "Galicia, Spain",
                    "description": "<li>September 2011</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-0.9056623000000172, 41.5976275]
                },
                "properties": {
                    "title": "Aragon, Spain",
                    "description": "<li>September 2012</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [3.202586300000007, 41.9535354]
                },
                "properties": {
                    "title": "Begur, Girona, Spain",
                    "description": "<li>September 2016</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.821426400000064, 41.9794005]
                },
                "properties": {
                    "title": "Girona, Spain",
                    "description": "<li>December 2016</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.9302652999999736, 41.72251839999999]
                },
                "properties": {
                    "title": "Tossa de Mar, Spain",
                    "description": "<li>March 2017</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [1.8611011000000417, 41.2558303]
                },
                "properties": {
                    "title": "Sitges, Spain",
                    "description": "<li>January 2017</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [1.5218009999999822, 42.506285]
                },
                "properties": {
                    "title": "Andorra",
                    "description": "<li>August 2016</li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.420278000000053, 42.121389]
                },
                "properties": {
                    "title": "Joanetes, Spain",
                    "description": "<li>February 2017</li>",
                    "marker-symbol": "circle"
                }
             }, {
                 "type": "Feature",
                 "geometry": {
                     "type": "Point",
                     "coordinates": [1.2444908999999598 , 41.1188827]
                 },
                 "properties": {
                     "title": "Tarragona, Spain",
                     "description": "<li>June 2017</li>",
                     "marker-symbol": "circle"
                 }
              },
              {
                  "type": "Feature",
                  "geometry": {
                      "type": "Point",
                      "coordinates": [12.496235200000001 , 41.90270080000001]
                  },
                  "properties": {
                      "title": "Rome, Italy",
                      "description": "<li>July 2017</li>",
                      "marker-symbol": "circle"
                  }
               }

             ]
        }
    });

    map.addSource('homes', {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-4.7793834999999945, 37.8881751]
                },
                "properties": {
                    "title": "Córdoba, Spain",
                    "description": "<li>until January 2016<\/li>",
                    "marker-symbol": "circle"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [2.1734034999999494, 41.38506389999999]
                },
                "properties": {
                    "title": "Barcelona, Spain",
                    "description": "<li>since January 2016<\/li>",
                    "marker-symbol": "circle"
                }
            }]
        }
    });

    map.addLayer({
        "id": "vacations",
        "source": "vacations",
        "type": "circle",
        "interactive": true,
        "paint": {
            "circle-color": "rgba(229, 89, 52, 1)",
            "circle-radius": 5,
            "circle-blur": .1
        }
    });

    map.addLayer({
        "id": "homes",
        "source": "homes",
        "type": "circle",
        "interactive": true,
        "paint": {
            "circle-color": "rgba(155, 197, 61, 1)",
            "circle-radius": 5,
            "circle-blur": .1
        }
    });

    map.on('click', 'vacations', function(e) {
        new mapboxgl.Popup()
            .setLngLat(e.features[0].geometry.coordinates)
            .setHTML('<strong>' + e.features[0].properties.title + '</strong><ul>' + e.features[0].properties.description + '</ul>')
            .addTo(map);
    });

    map.on('click', 'homes', function(e) {
        new mapboxgl.Popup()
            .setLngLat(e.features[0].geometry.coordinates)
            .setHTML('<strong>' + e.features[0].properties.title + '</strong><ul>' + e.features[0].properties.description + '</ul>')
            .addTo(map);
    });

    map.on('mouseenter', 'vacations', function() {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseenter', 'homes', function() {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'vacations', function() {
        map.getCanvas().style.cursor = '';
    });

    map.on('mouseenter', 'homes', function() {
        map.getCanvas().style.cursor = '';
    });
});
