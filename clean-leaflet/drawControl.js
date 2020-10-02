var L = require('leaflet')
// var MiniMap = require('leaflet-minimap');
// var main = require('./app.js')

function getRandomLatLng(map) {
    var bounds = map.getBounds(),
        southWest = bounds.getSouthWest(),
        northEast = bounds.getNorthEast(),
        lngSpan = northEast.lng - southWest.lng,
        latSpan = northEast.lat - southWest.lat;

    return new L.LatLng(
        southWest.lat + latSpan * Math.random(),
        southWest.lng + lngSpan * Math.random());
}
exports.getRandomLatLng = getRandomLatLng;

// function getnRandomLAtLngs(map){
//     //map.clear();
//     var preplotpoints = [];
//     for(i = 0; i < 100;i++){
//         var point = this.getRandomLatLng(map)
//         preplotpoints.push(point);
//     }
// // //Loop through the markers array
// //     for (var i=0; i<markers.length; i++) {
// //
// //         var lon = markers[i][0];
// //         var lat = markers[i][1];
// //         var popupText = markers[i][2];
// //
// //         var markerLocation = new L.LatLng(lat, lon);
// //         var marker = new L.Marker(markerLocation);
// //         map.addLayer(marker);
// //
// //         marker.bindPopup(popupText);
// //
// //     }
//
// }

// module.exports = {
//     getRandomLatLng(),
// }
