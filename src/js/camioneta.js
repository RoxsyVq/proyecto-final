$(document).ready(function(){  
  
    $("#camion").click(function() {  
        if($("#camion").is(':checked')) {  
            alert("Has elegido una Camioneta");  
        } else {  
            alert("No has elegido aun");  
        }  
    });  
  
});