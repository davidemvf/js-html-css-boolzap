$(document).ready(function() {

  // funzione per mandare messaggi con la rispettiva ora
  $(".send-rec").click(function() {

    // richiamo il template e lo compilo tramite handlebars
    var source = $("#msg-template").html();
    var template = Handlebars.compile(source);

    // salvo l'ora di invio e ricezione messaggi
    var data = new Date();
    var ore, minuti;
    ore = data.getHours();
    minuti = data.getMinutes();
    var clock = ore + ":" + minuti;
    var inputext = $("#text-message").val();

    // vado a inserire testo e ora nel template
    var context = {text: inputext, time: clock};
    var html = template(context);

    // stampo a schermo il messaggio
    $(".messages-centering.active").append(html);

    // visualizzo ultimo accesso nell'header
    var last_time = $(".messages-centering.active .user .clock").text();
    $("#last-access").text(last_time);

    // pulisco l'input
    $("#text-message").val("");

    //messaggio di risposta in un secondo
     setTimeout(answer, 1000);

    function answer() {
      var context_risp = {text: "Ciao bello", time: clock, addclass: "white"};
      var html_risp = template(context_risp);

      // var reply = $(".template .white").clone();
      // var time = $(".clock").text();
      // reply.text("Ciao");
      // $(".past-chat > p").text(clock);
      $(".messages-centering.active").append(html_risp);
  };

  });


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

  //funzione per far apparire al click sul contatto la rispettiva conversazione e le informazioni sulla barra in alto

  $(".past-chat").click(function() {
    // una volta clickato sul contatto questo diventa più scuro
    $(".past-chat").removeClass("js-lightgray");
    $(this).addClass("js-lightgray");


    // salvo in una variabile il valore dell'attributo del div selezionato
    var attr_comparsa = $(this).attr("ref");
    // salvo in variabile il nome del contatto
    var nome = $(this).find(".name").text();
    //salvo in variabile l'immagine del contatto
    var img = $(this).find("img").attr("src");

    //scompare la finestra introduttiva
    $(".intro").css("display", "none");

    //tutte le altre conversazioni devono sparire dal box
    $(".messages-centering").removeClass("active");

    //il div con lo stesso valore dell'attributo ref compare nel box
    $(".messages-centering[ref='" + attr_comparsa + "']").addClass("active");

    // il nome viene visualizzato nella barra in alto
    $("#name").text(nome);

    //l'immagine del profilo viene visualizzata nella barra in alto
    $(".header-right img").attr("src",img);

  });

  // funzione per sostituire l'icona rec con l'icona send-message

  $('#text-message').focus(function() {
      $('.fa-microphone').hide();
      $('.fa-paper-plane').show();
    });

  $('#text-message').focusout(function() {
      $('.fa-microphone').show();
      $('.fa-paper-plane').hide();
    });

});
