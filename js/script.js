$(document).ready(function() {

	//display form

     $(".btn").click(function(){
        $(this).attr('id', 'active');
         if($("#seat-form").is(":visible")){
           $("#seat-form").hide();
           $("#seat-form")[0].reset();
        } else {
           $("#seat-form").show();
        } 
          $(".btn-sm").each(function(){
              $(".btn-sm").attr("disabled", "disabled");
            });
            $(this).removeAttr("disabled", "disabled");
        return false;
      });


     $("#submit").click(function(){
        $(this).removeAttr('id', 'active');
        $('#active').addClass('btn-danger').text('Reserved'); 
          
        $(".btn-sm").each(function(){
          $(".btn-sm").removeAttr("disabled", "disabled");
          });

        $('#active').attr("disabled", "disabled");
        $('#submit').addClass('btn btn-default');
     });


});


