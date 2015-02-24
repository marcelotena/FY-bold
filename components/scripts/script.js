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

$(function() {
    var wheight = $(window).height(); //get height of the window
    
    $('.fullheight').css('height', wheight);
    
    $(window).resize(function() {
        var wheight = $(window).height(); //get height of the window
        $('.fullheight').css('height', wheight);
    })
});