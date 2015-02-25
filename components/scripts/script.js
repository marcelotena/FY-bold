//GENERADOR DE EMAIL CON LINK "MAILTO"	
    usuario="info";
	dominio="fastandyours.com";
	conector="@";
	
	function dame_correo(){ 
	   return usuario + conector + dominio;
	} 
	
	function escribe_enlace_correo(){ 
	   document.write("<a href='mailto:" + dame_correo() + "'>" + dame_correo() + "</a>"); 
	}

//ADAPTAMOS ALTURA DE LA SECCIÓN SEGÚN LA PANTALLA
$(function() {
    var wheight = $(window).height(); //get height of the window
    
    $('.fullheight').css('height', wheight);
    $('.welcome-msg').css('top', wheight/2-240);
    $('.scrolldown').css('top', wheight/2-300);
    
    $(window).resize(function() {
        var wheight = $(window).height(); //get height of the window
        $('.fullheight').css('height', wheight);
        $('.welcome-msg').css('top', wheight/2-240);
        $('.scrolldown').css('top', wheight/2-300);
    });

    //PANEL LATERAL
    $(".lateral").pageslide({ direction: "left", modal: true });

});//document ready

