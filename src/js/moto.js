$(document).ready(function(){  
  
    $("#moto").click(function() {  
        if($("#radio").is(':checked')) {  
            alert("Has elegido una moto");  
        } else {  
            alert("No está activado");  
        }  
    });  
  
});  
