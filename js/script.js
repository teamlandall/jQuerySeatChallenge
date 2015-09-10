$(document).ready(function() {

	//display form

     $(".btn").click(function(){
         if($("#seat-form").is(":visible")){
           $("#seat-form").hide();
           $("#seat-form")[0].reset();
        } else {
           $("#seat-form").show();
        }
        return false;
     });



});

