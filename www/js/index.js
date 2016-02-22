if(typeof L != 'undefined') {
    var map = L.map('map').setView([50, 20], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    $.getJSON('http://dev.apps.divi.pl/api/features/ODY.pR0dh8HyYNdcQYHWA_dTPuT3G-4',{},function(data){
        var geojsonMarkerOptions = {
            radius: 8,
            fillColor: "#ff7800",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        };

        L.geoJson(data.features, {
            pointToLayer: function (feature, latlng) {
                var mrkr = L.circleMarker(latlng, geojsonMarkerOptions);
                mrkr.bindPopup(feature.properties.name);
                return mrkr;
            }
        }).addTo(map);
    });
}

else {
    document.getElementById('div2').innerHTML = 'No Leaflet in the village';
}
