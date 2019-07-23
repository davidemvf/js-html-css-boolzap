$(document).ready(function() {



   // if ($("#text-message").val() !== null) {
   //   $(".fa-microphone").hide();
   //   $(".fa-paper-plane").css("display", "block");
   // }

  $(".send-rec").click(function() {

    var inputext = $("#text-message").val();


    $(".messages-centering").append(
      '<div class="user-container">' + '<div class="user">' + inputext + '</div>' + '</div>'
    );
    //
    // $("#text-message").val("");
    // var message = $(".user-container").clone();
    // message.text(inputext);
    // $(".messages-centering").append(message);

     setTimeout(answer, 1000);

     function answer() {
       var reply = $(".template .white").clone();
       reply.text("Ciao");
       $(".messages-centering").append(reply);
     }

  })
});
