$(document).ready(function() {

	// display form
  $(".btn").click(function(){
    $(this).attr('id', 'active');
    $('#seat-form').slideDown();
  });

  // submit button
  $("#submit").click(function(){
    event.preventDefault();
    $(this).removeAttr('id', 'active');
    $('#seat-form').slideUp();
    $('#active').addClass('btn-danger').text('Reserved');
        
        //below uses replace with to inject new html with danger class for color.
        // $('#active').replaceWith('<button type="button" class="btn btn-primary btn-sm btn-danger">Reserved</button>'); 

        //this doens't work. figure this out.
        $("button").each(function(){
          if($('button').class() !== 'reserved'){
            $('.btn-sm').removeAttr('disabled', 'disabled');
          } else{
            $('.btn-sm').attr('disabled', 'disabled');
          }
        });

    $('#active').removeAttr("id", "active");
    $('#submit').addClass('btn btn-default');
    });

});
 




