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
    $("#text-message").val("");


     setTimeout(answer, 1000);

     function answer() {
       var reply = $(".template .white").clone();
       reply.text("Ciao");
       $(".messages-centering").append(reply);
     }

  })

  //funzione per la ricerca dei contatti

  // la mia funzione partirà nel momento in cui comincio a digitare all'interno dell'inputext
  $("#search-bar").keyup(function() {
    // salvo il contenuto digitato con una variabile
    var letter = $(this).val().toLowerCase();
    //faccio in modo che il contenuto dell'input sia tutto in minuscolo
    // letter.toLowerCase();
    console.log(letter);

    // a questo punto parte una funzione che controlla i contatti
    $(".past-chat").each(function() {
      $(this).show();

      var contatto = $(this).find(".name").text().toLowerCase();
      console.log(contatto);

      if (!contatto.includes(letter)) {
        $(this).hide();
      };
    });
  });

  //funzione per far apparire la conversazione al click sul contatto

  // creo una funzione che si attiva al click sul box del contatto
  $(".past-chat").click(function() {
    // al click il box clickato diventa grigio scuro, gli altri rimangono bianchi
    $(".past-chat").css("background", "white");
    $(this).css("background", "#E9EBEB");
  })

  //al click all'interno del box compare un div contenente la conversazione con il contatto clickato (provo a creare un template da inserire nel box delle conversazioni)
});
