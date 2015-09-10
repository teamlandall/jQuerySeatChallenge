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

        ////////////////////////////////////////
            $(".btn").each(function(){
                $(".btn").attr("disabled", "disabled");
            });
            $(this).removeAttr("disabled", "disbaled");
            $("#submit").removeAttr("disabled", "disbaled");
            
        


        /////////////////////////////////////////

        return false;
     });


     $("#submit").click(function(){
        $('#active').addClass('btn-danger').attr('disabled', 'disabled');
        $('#active').text('Reserved');
        // $('.active').removeClass('btn btn-primary btn-sm').addClass('btn btn-danger btn-sm');   
        $('#submit').addClass('btn btn-default');
     });


});

