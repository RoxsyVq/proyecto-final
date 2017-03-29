

function get_regiones(){
	return [
       	{   
			name: "Selecciona",
            value:"0",
			
           
		},
		{   
			name: "arica",
            value:"1",
			distance: 2059
           
		},
		{
			name: "iquique",
            value:"2",
			distance: 1789
		},
		{
			name: "antofagasta",
           value:"3",
			distance: 1368
		},
		{
			name: "copiapo",
            value:"4",
			distance: 1567
		},
		{
			name: "la_serena",
            value:"5",
			distance: 470
		},
		{
			name: "valparaiso",
            value:"6",
			distance: 116
		},
		{
			name: "rancagua",
            value:"7",
			distance: 84
		},
		{
			name: "talca",
            value:"8",
			distance: 257
		},
		{
			name: "concepcion",
            value:"9",
			distance: 500
		},
		{
			name: "temuco",
            value:"10",
			distance: 690
		},
		{
			name: "valdivia",
            value:"11",
			distance: 848
		},
		{
			name: "puerto_montt",
            value:"12",
			distance: 1032
		},
		{
			name: "coyhaique",
            value:"13",
			distance: 1888
		},
		{
			name: "punta_arenas",
            value:"14",
			distance: 3004
		},
		{
			name: "santiago",
            value:"15",
			distance: 0
		}
	]
}



$(document).ready(creacionCity);
    

   function creacionCity(){
    var ciud = get_regiones();
    var inicio = $("#start");
    var final=$("#end");
    for(var i in ciud){
        var html= '<option class="lisini"> <span class="name">' + ciud[i].name + '</span>'+" " +'<span class="distan">'+ ciud[i].distance +'</span></option>' 
        
        inicio.append(html); 
    }
         for(var i in ciud){
        var html= '<option class="lisfin"> <span class="name">' + ciud[i].name + '</span>'+" " +'<span class="distan">'+ ciud[i].distance +'</span></option>' 
        
        final.append(html); 
    }
       postDatos();
       
//calcularkil();

   	
}
//guardar los datos en local storage
function postDatos(){
   
	var lis=$('.lisini');
	$.each(lis, function() {
        $(this).on('click',cityClick)
    });

}
function cityClick(event){
  
	select=true;
	var name= $(event.currentTarget).find('.name').text();
	var distancia= $(event.currentTarget).find('.distan').text();
	localStorage.setItem('name',name);
	localStorage.setItem('distancia',distancia);
	
}
    



$('#buscar').click(valButon);
function valButon(){
//    if ($('.select').val()==0){
//	 valido= false;
//        alert('selecciona');
////	 swal({
////	    title: "selecciona",
////	    imageUrl: ""
////		});
//       
//	}else{
   	 $("#calculator").addClass('visible');
	
}

function calcularkil(){
    var one = $('#start').ciud[i].distance ;
    var two = $('#end').ciud[i].distance ;
    var totalkil = one + two;
    console.log(totalkil);
    
}













  	
   
