$(document).ready(function() {

  var $name = $('#name');

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
    $('#active').addClass('btn-danger');

    //captures name and displays on reserved seat
    //potentially hide and use hover? 
    var name = $name.val();
    $('#active').text(name);
    //changes id=active to class=resereved and disables for future use
    $('#active').removeAttr("id", "active").addClass("reserved");
    $('.reserved').attr("disabled", "disabled");
    $('#submit').addClass('btn btn-default');
  });

  //Should possibly create a new function to handle the name capture and call in the 
  //submit function.

});
 

// Stories to accomplish - 

// 1) Allow multiple seat selections for 'group reservations'
// 2) Change display to look more like an actual theater. Add more seats.
// 3) Need to clear the name field each time submit is pressed.


