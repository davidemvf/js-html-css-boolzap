$(document).ready(function() {

  $(".fas").click(function() {
    var inputext = $("#text-message").val();

    $(".messages-centering").append(
      '<div class="user-container">' + '<div class="user">' + inputext + '</div>' + '</div>'
    );
    //
    // $("#text-message").val("");
    // var message = $(".user-container").clone();
    // message.text(inputext);
    // $(".messages-centering").append(message);

     $("#text-message").val("");

  })
});
