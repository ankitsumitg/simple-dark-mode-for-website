$( ".inner-switch" ).on("click", function(){
    if( $( "body" ).hasClass( "dark" )) {
      $( "body" ).removeClass( "dark" );
      $( ".inner-switch" ).text( "⚫" );
      $(".follow").text("Follow Darkness: ")
      $(".title").text("Lord of Light 🗽")
      $(".art").text("I am the light of the world. Whoever follows me will not walk in darkness, but will have the light of life. 💛🏳")
    } else {
      $( "body" ).addClass( "dark" );
      $( ".inner-switch" ).text( "🔆" );
      $(".follow").text("Unleash Sunlight: ")
      $(".title").text("Lord of Darkness 💀")
      $(".art").text("I require the solace of the shadows and the dark of the night. Sunshine is my destroyer! 🖤🏴")
    }
});