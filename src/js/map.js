

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
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

  

 