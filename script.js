$(document).ready(function() {



   // if ($("#text-message").val() !== null) {
   //   $(".fa-microphone").hide();
   //   $(".fa-paper-plane").css("display", "block");
   // }

  $(".send-rec").click(function() {

    var inputext = $("#text-message").val();


    $(".messages-centering.active").append(
      '<div class="user-container">' + '<div class="user">' + inputext + '</div>' + '</div>'
    );
    //
    $("#text-message").val("");


     setTimeout(answer, 1000);

     function answer() {
       var reply = $(".template .white").clone();
       reply.text("Ciao");
       $(".messages-centering.active").append(reply);
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

  $(".past-chat").click(function() {
    // una volta clickato sul contatto:
    // questo diventa più scuro
    $(".past-chat").css("background", "white");
    $(this).css("background", "#E9EBEB");

    // salvo in una variabile il valore dell'attributo del div selezionato
    var attr_comparsa = $(this).attr("ref");

    //tutte le altre conversazioni devono sparire dal box
    $(".messages-centering").removeClass("active");

    //il div con lo stesso valore dell'attributo ref compare nel box
    $(".messages-centering[ref='" + attr_comparsa + "']").addClass("active");

  });
});
