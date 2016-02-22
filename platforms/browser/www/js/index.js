if(typeof jQuery != 'undefined') {
    var sub = $('<h1>');
    sub.html('Hello world');
    $('#div2').append(sub);
}

else {
    document.getElementById('div2').innerHTML = 'No jQuery in the village';
}

var kachel = document.createElement('img');
kachel.setAttribute('src','http://a.tile.openstreetmap.org/13/4489/2805.png');
document.body.appendChild(kachel);
