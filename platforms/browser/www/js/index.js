if(typeof L != 'undefined') {
    var map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
}

else {
    document.getElementById('div2').innerHTML = 'No Leaflet in the village';
}

var kachel = document.createElement('img');
kachel.setAttribute('src','http://a.tile.openstreetmap.org/13/4489/2805.png');
document.body.appendChild(kachel);
