$(document).ready(function() {

	//display form
	
     $(".btn").click(function(){
         if($("#seat-form").is(":visible")){
           $("#seat-form").hide();
        } else {
           $("#seat-form").show();
        }
        return false;
     });

});

