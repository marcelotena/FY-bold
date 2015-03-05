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
    
        $('.scrolldown').css('top', 0.5*wheight+70);
        $('.scrolldown').css('left', 0.5*wwidth-32);
    
    if (wwidth>=768) {
        $('.fullheight').css('height', wheight);
        $('.welcome-msg').css('top', wheight/2-240);
    }
    if (wwidth > 1200) {
        $('#workflow').css('height', wheight-609);
    }
    var portfolioHead = $('#portfolio .section-header').height();
    $('#portfolio .column').css('height', wheight-portfolioHead-60);
    $('#portfolio .active-column').css('height', wheight-portfolioHead-60);
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
            $('#workflow').css('height', wheight-609);
        }
        $('.scrolldown').css('top', 0.5*wheight+70);
        $('.scrolldown').css('left', 0.5*wwidth-32);
        var portfolioHead = $('#portfolio .section-header').height();
        $('#portfolio .column').css('height', wheight-portfolioHead-60);
        $('#portfolio .active-column').css('height', wheight-portfolioHead-60);
        
        bucle();
    });//window resize function

    //PANEL LATERAL
    $(".lateral").pageslide({ direction: "left", modal: true });
    
    
    //FUNCION SCROLL
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        var wwidth = $(window).width(); //get window width
        var mediaOffset;
        if (wwidth>1200){mediaOffset=-31;}
        if (wwidth<=1200){mediaOffset=180;}
        if (wwidth<=960){mediaOffset=410;}
        if ((windowpos >= $('#services').offset().top-31)&&(windowpos < $('#portfolio').offset().top+mediaOffset)) {
            $('#menu-launch').addClass('lightbackground');
            $('#brand-dark').css({
                opacity: '1',
                left: '20px'
            });
        }else{
            $('#menu-launch').removeClass('lightbackground');
        }
        if (windowpos < $('#services').offset().top-31) {
            $('#brand-dark').css({
                opacity: '0',
                left: '-100px'
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
        
        
    });//window scroll function
    
    //FUNCIONALIDAD PORTFOLIO
    $('.column .project').click(function(){
        $('.project').addClass('project-50');
        $(this).removeClass('project-50');
        $(this).parent('div').addClass('active-column');
        $('.active-column').addClass('not-active-column');
        $('.active-column').removeClass('active-column');
    });
    $('.column').click(function() {
        $(this).addClass('active-column');
        $('.active-column .project-50').appendTo($('.not-active-column'));
        $('.active-column .project-50').css('height', '0%');
        $('.active-column .project-50').remove();
    });

});//document ready

