<script>
    <!-- Trigger the modal with a button -->
  <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>

  <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Modal Header</h4>
        </div>
        <div class="modal-body">
          <p>Some text in the modal.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
// Grab the URL of the website
var currentURL = window.location.origin;
// Capture the form inputs
$("#submit").on("click", function(){
  //event.preventDefault();

    if( ($('#name').val().trim() !== "") && ($('#photo').val().trim() !== "") ) {
        // Create an object for the user's data
        var userData = {
            name: $("#name").val(),
            photo: $("#photo").val(),
            scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val(), ]
        }


        // AJAX post the data to the friends API.
        $.post(currentURL + "/api/friends", userData, function(data){

          // Grab the result from the AJAX post so that the best match's name and photo are displayed.
          $("#matchName").text(data.name);
          $('#matchImg').attr("src", data.photo);

          // Show the modal with the best match
          $("#resultsModal").modal('toggle');
          // clear the input fields in the form
          $("#name").val("");
          $("#photo").val("");

        });
    } else {
        $(".modal-title").text("Missing required information");
        $(".modal-body").html("Please complete the form before submitting");
        $("#resultsModal").modal('toggle');

    }
    return false;
});

// modal logic
$('#closeModal').click(function() {
    $.get('/',function(req,res){
    location.replace(res);
    })
});

</script>
