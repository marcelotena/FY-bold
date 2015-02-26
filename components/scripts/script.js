$(function() {
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
    var wheight = $(window).height(); //get height of the window
    
    $('.fullheight').css('height', wheight);
    $('.welcome-msg').css('top', wheight/2-240);
    $('.scrolldown').css('top', 0.5*wheight-250);
    function bucle() {
        $('.scrolldown')
            .animate({'top': 0.5*wheight-250},800)
            .animate({'top': 0.5*wheight-230},800, bucle);  
    }
    bucle();
    
    $('#workflow').css('height', wheight-545);

    $(window).resize(function() {
        var wheight = $(window).height(); //get height of the window
        $('.fullheight').css('height', wheight);
        $('.welcome-msg').css('top', wheight/2-240);
        $('.scrolldown').css('top', 0.5*wheight-250);
        bucle();
    });

    //PANEL LATERAL
    $(".lateral").pageslide({ direction: "left", modal: true });

    
    //FUNCION SCROLL
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        if (windowpos >= $('#services').offset().top-31) {
            $('#menu-launch').addClass('lightbackground');
        }else{
            $('#menu-launch').removeClass('lightbackground');
        }
        
        //COMPROBAMOS SI EL LANZADOR DE MENÚ TIENE EL BACKGROUND CORRECTO
    if ($('#menu-launch').hasClass('lightbackground')) {
        $('.lateral').css({
            background: 'url(./images/collapse-dark.png) no-repeat'
        });
    }else{
        $('.lateral').css({
            background: 'url(./images/collapse.png) no-repeat'
        });
    }
        
    });
    


});//document ready

