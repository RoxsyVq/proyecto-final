

function init(){
    var regiones='[{name: "arica",distance: 0},{name: "iquique",distance: 0},'+
        '{name: "antofagasta",distance: 0},{name: "copiapo",distance: 0},'+
        '{name: "la_serena",distance: 0},{name: "valparaiso",distance: 0},'+
        '{name: "rancagua",distance: 0},{name: "talca",distance: 0},'+
        '{name: "concepcion",distance: 0},{name: "temuco",distance: 0},'+
        '{name: "valdivia",distance: 0},{name: "puerto_montt",distance: 0},'+
        '{name: "coyhaique",distance: 0},{name: "punta_arenas",distance: 0},'+
        '{name: "santiago",distance: 0]';

    //alert("ghghf");
    var ciud=$('#list_ciu');

    var ciudad =$.parseJSON(regiones);
    var longt= ciudad.length;
    console.log(ciudad);
	for( var i=0 ; i<longt;i++){
        var html='<li class="lista" id="name">'+ciudad[i].name+'</li>';
	   console.log(html);
	   ciud.innerHTML+=html;
	}
}







  	
   
