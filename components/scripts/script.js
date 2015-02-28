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
    var wheight = $(window).height(), //get height of the window
        wwidth = $(window).width(); //get window width
    
    if (wwidth>=1200) {
        $('.fullheight').css('height', wheight);
        $('.welcome-msg').css('top', wheight/2-240);
        $('.scrolldown').css('top', 0.5*wheight+70);
        $('.scrolldown').css('left', 0.5*wwidth-32);
    }
    if (wheight < 900) {
        $('#workflow').css('height', 350);
    } else {
        $('#workflow').css('height', wheight-560);
    }
    function bucle() {
        $('.scrolldown')
            .animate({'top': 0.5*wheight+70},800)
            .animate({'top': 0.5*wheight+80},800, bucle);  
    }
    bucle();


    $(window).resize(function() {
        var wheight = $(window).height(), //get height of the window
        wwidth = $(window).width(); //get window width
        if (wwidth>=1200) {
            $('.fullheight').css('height', wheight);
            $('.welcome-msg').css('top', wheight/2-240);
            $('.scrolldown').css('top', 0.5*wheight+70);
            $('.scrolldown').css('left', 0.5*wwidth-32);
        }
        bucle();
    });

    //PANEL LATERAL
    $(".lateral").pageslide({ direction: "left", modal: true });
    
    
    //FUNCION SCROLL
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        if (windowpos >= $('#services').offset().top-31) {
            $('#menu-launch').addClass('lightbackground');
            $('#brand-dark').css({
                opacity: '0.5',
                display: 'block'
            });
        }else{
            $('#menu-launch').removeClass('lightbackground');
            $('#brand-dark').css({
                opacity: '0',
                display: 'none'
            });
        }
        
        //COMPROBAMOS SI SE HA ABIERTO EL MENÚ O SI ESTAMOS EN FONDO CLARO/OSCURO
        var abierto = $('#menu-launch').hasClass('abierto');
        var fondoClaro = $('#menu-launch').hasClass('lightbackground');
        if ((fondoClaro)&&(!abierto)) {
                    $('.lateral').css({
                        background: 'url(./images/collapse-dark.png) no-repeat'
                    });   
                }
        if ((fondoClaro)&&(abierto)) {
                    $('.lateral').css({
                        background: 'url(./images/cross.png) no-repeat'
                    });   
                }
        if (!(fondoClaro)&&(!abierto)) {
                    $('.lateral').css({
                        background: 'url(./images/collapse.png) no-repeat'
                    });   
                }
        if (!(fondoClaro)&&(abierto)) {
                    $('.lateral').css({
                        background: 'url(./images/cross-white.png) no-repeat'
                    });   
                }
        
    });
    


});//document ready

