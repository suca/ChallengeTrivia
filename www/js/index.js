function initialize() {
    var map_canvas = document.getElementById('map_canvas');
    var map_options = {
    center: new google.maps.LatLng(48.88865, 2.33872),
    zoom: 0,
    mapTypeId: google.maps.MapTypeId.SATELLITE
    }
    
    var map = new google.maps.Map(map_canvas, map_options);
    
}

google.maps.event.addDomListener(window, 'load', initialize);