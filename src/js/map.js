

function initMap() {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {lat: 41.85, lng: -87.65}
  });
  directionsDisplay.setMap(map);

  var onChangeHandler = function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  };
  document.getElementById('start').addEventListener('change', onChangeHandler);
  document.getElementById('end').addEventListener('change', onChangeHandler);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  directionsService.route({
    origin: document.getElementById('start').value,
    destination: document.getElementById('end').value,
    travelMode: google.maps.TravelMode.DRIVING
  }, function(response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}


//
//$(document).ready(function(){
//    $('[data-toggle="tooltip"]').tooltip();   
//});


//function findMe(){
//			var output = document.getElementById('map');
//			// Verificar si soporta geolocalizacion
//			if (navigator.geolocation) {
//				output.innerHTML = "<p>Tu navegador soporta Geolocalizacion</p>";
//			}else{
//				output.innerHTML = "<p>Tu navegador no soporta Geolocalizacion</p>";
//			}
//			//Obtenemos latitud y longitud
//			function localizacion(posicion){
//				var latitude = posicion.coords.latitude;
//				var longitude = posicion.coords.longitude;
//				var imgURL = "https://maps.googleapis.com/maps/api/staticmap?center="+latitude+","+longitude+"&size=600x300&markers=color:red%7C"+latitude+","+longitude+"&key=YOUR_API_KEY";
//				output.innerHTML ="<img src='"+imgURL+"'>";
//				
//			}
//			function error(){
//				output.innerHTML = "<p>No se pudo obtener tu ubicación</p>";
//			}
//			navigator.geolocation.getCurrentPosition(localizacion,error);
//		}

  

 