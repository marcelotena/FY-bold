$(function() {
    //load fancybox
    $(".fancybox").fancybox({
        openEffect  : 'elastic',
        closeEffect : 'fade',
        iframe : {
            preload: true
        }
    });
    
    function isHighDensity(){
        return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)').matches)) || (window.devicePixelRatio && window.devicePixelRatio > 1.3));
    }

    function isRetina(){
        return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)').matches)) || (window.devicePixelRatio && window.devicePixelRatio > 2)) && /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
    }
    
    //ADAPTAMOS ALTURA DE LA SECCIÓN SEGÚN LA PANTALLA
    var wheight = $(window).height(), //get height of the window
        wwidth = $(window).width(); //get window width
    
        $('.scrolldown').css('top', 0.5*wheight+70);
        $('.scrolldown').css('left', 0.5*wwidth-32);
    
        $('.fullheight').css('height', wheight);
        
    if (wwidth>650){
        $('.welcome-msg').css('top', wheight/2-240);
    }else{
        $('.welcome-msg').css('top', wheight/2-400);
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
            
            if (isRetina()||isHighDensity()){

            }else{
            
            var wheight = $(window).height(), //get height of the window
            wwidth = $(window).width(); //get window width

            $('.fullheight').css('height', wheight);

            if (wwidth>650){
                $('.welcome-msg').css('top', wheight/2-240);
            }else{
                $('.welcome-msg').css('top', wheight/2-400);
            }
            $('#workflow').css('height', wheight-609);

            $('.scrolldown').css('top', 0.5*wheight+70);
            $('.scrolldown').css('left', 0.5*wwidth-32);
            var portfolioHead = $('#portfolio .section-header').height();
            $('#portfolio .column').css('height', wheight-portfolioHead-60);
            $('#portfolio .active-column').css('height', wheight-portfolioHead-60);

            bucle();
            }//Si no es retina ni alta densidad, ejecutamos modificaciones al reescalar
        });//window resize function
    

    //PANEL LATERAL
    $(".lateral").pageslide({ direction: "left", modal: true });
    
    
    //FUNCION SCROLL
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        var wwidth = $(window).width(); //get window width
        var mediaOffset;
        if (wwidth>1200){mediaOffset=-31;}
        if (wwidth<=1200){mediaOffset=-20;}
        if (wwidth<=960){mediaOffset=-20;}
        if ($('#homepage').length){
            if (((windowpos >= $('#services').offset().top-31)&&(windowpos < $('#portfolio').offset().top+mediaOffset))||((windowpos >= $('#show-more').offset().top-31))) {
                $('#menu-launch').addClass('lightbackground');
                $('#brand-dark').css({
                    opacity: '1',
                    left: '20px',
                    background: 'url(./images/logo-dark.png) no-repeat'
                });
            }else{
                $('#menu-launch').removeClass('lightbackground');
                $('#brand-dark').css({
                    background: 'url(./images/logo-text.png) no-repeat'
                });
            }
            if (windowpos < $('#services').offset().top-31) {
                $('#brand-dark').css({
                    opacity: '0',
                    left: '-100px'
                });
            }
        }else{
            if (windowpos >= $('#portfolio-page #contact').offset().top-31) {
                $('#menu-launch').addClass('lightbackground');
                $('.brand').addClass('brand-dark');
            }else{
                $('#menu-launch').removeClass('lightbackground');
                $('.brand').removeClass('brand-dark');
            }
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
    
    //centrar elementos en la columna activa
    var containerHeight = $('.active-column .project-image').height();
    if (wwidth>1500){
        $('.active-column .project-image img').css({
            top: containerHeight/4-20,
            bottom: containerHeight/4-20
        });
        $('.active-column .project-description-container').css({
                top: containerHeight/4-20,
                bottom: containerHeight/4-20
        });
    }//if wwidth>1500px
    else {
        $('.active-column .project-image img').css({
            top: containerHeight/6-20,
            bottom: containerHeight/6-20
        });
        $('.active-column .project-description-container').css({
            top: containerHeight/6-20,
            bottom: containerHeight/6-20
        });
    }
    $('.not-active-column .project-image img').css({
        top: 0,
        bottom: 0
    });

    
    if (wwidth<951) {
        if (isRetina()||isHighDensity()){
            $('.active-column').css('height', 'auto');
            var projectHeight = $('.active-column .project:nth-child(1)').height();
                $('.not-active-column').addClass('active-column');
                $('.not-active-column').css('height', projectHeight*2);
                $('.active-column').removeClass('not-active-column');
                $('.project').removeClass('project-50');
                $('.project').css('height', projectHeight);
                $('.project:nth-child(2)').css('bottom', 0);
                $('.active-column .project-image img').css({
                    top: containerHeight/6-20,
                    bottom: containerHeight/6-20
                });
                $('.active-column .project-description-container').css({
                    top: containerHeight/6-20,
                    bottom: containerHeight/6-20
                });

            }else{
                $('.active-column').css('min-height', 500);
                var projectHeight = $('.active-column .project:nth-child(1)').height();
                $('.not-active-column').addClass('active-column');
                $('.not-active-column').css('height', projectHeight*2);
                $('.active-column').removeClass('not-active-column');
                $('.project').removeClass('project-50');
                $('.project').css('height', projectHeight);
                $('.project:nth-child(2)').css('bottom', 0);
                $('.active-column .project-image img').css({
                    top: containerHeight/6-20,
                    bottom: containerHeight/6-20
                });
                $('.active-column .project-description-container').css({
                    top: containerHeight/6-20,
                    bottom: containerHeight/6-20
                });
        }
    }else{//wwidth>950px
        $('.not-active-column .project:nth-child(1)').addClass('top');
        $('.not-active-column .project:nth-child(2)').addClass('bottom');

        $('.column .project').click(function(){
            $('.project').addClass('project-50');
            $(this).removeClass('project-50');
            $('.active-column').addClass('not-active-column');
            $('.active-column').removeClass('active-column');
            $(this).parent('div').addClass('active-column');
            $(this).parent('div').removeClass('not-active-column');
            $('.not-active-column .project:nth-child(1)').addClass('top');
            $('.not-active-column .project:nth-child(2)').addClass('bottom');
        });
        $('.column').click(function() {
            $(this).addClass('active-column');
            $('.active-column .project-50').appendTo($('.not-active-column'));
            $('.active-column .project-50').removeClass('top');
            $('.active-column .project-50').removeClass('bottom');
            $('.active-column .project-50').css('height', '0%');
            $('.active-column .project-50').remove();
            $('.not-active-column .project').removeClass('top');
            $('.not-active-column .project').removeClass('bottom');
            $('.not-active-column .project:nth-child(1)').addClass('top');
            $('.not-active-column .project:nth-child(2)').addClass('bottom');

            $('.not-active-column .project-image img').css({
                top: 0,
                bottom: 0
            });
            if (wwidth>1500){
                $('.active-column .project-image img').css({
                    top: containerHeight/4-20,
                    bottom: containerHeight/4-20
                });
                $('.active-column .project-description-container').css({
                        top: containerHeight/4-20,
                        bottom: containerHeight/4-20
                });
            }//if wwidth>1500px
            else {
                $('.active-column .project-image img').css({
                    top: containerHeight/6-20,
                    bottom: containerHeight/6-20
                });
                $('.active-column .project-description-container').css({
                    top: containerHeight/6-20,
                    bottom: containerHeight/6-20
                });
            }
        });
    }//end wwidth>950px
    
    
    
    $(window).resize(function() {
        
    });//window resize
    
    //CONTACT FORM
    if ($('#contact_form').length){
		$('#contact_form .service-input').val($('#contact_form .service select').val());
		$('#contact_form .service select').change(function(){ $('#contact_form .service-input').val($('#contact_form .service').val()); });
	}
	
	//if submit button is clicked
	$('.contact-form #submit').click(function () {		
	if(document.getElementById('checkbox').checked == true){
		$(this).find('[placeholder]').each(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
			}
		});
		
		var name = $('input[name=name]');
		var email = $('input[name=email]');
		var subject = $('input[name=subject]');
		var comment = $('textarea[name=message]');

		if (name.val()=='') {
			name.addClass('hightlight');
			return false;
		} else name.removeClass('hightlight');
		
		if (email.val()=='') {
			email.addClass('hightlight');
			return false;
		} else email.removeClass('hightlight');

		//E-mail address validation
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		if(reg.test(email.val()) == false) {		 
			email.addClass('hightlight');
			return false;
		} else email.removeClass('hightlight');	  
		
		if (comment.val()=='') {
			comment.addClass('hightlight');
			return false;
		} else comment.removeClass('hightlight');
		
		//organize the data properly
		var data = 'name=' + name.val() + '&email=' + email.val() + '&subject=' + 
		subject.val() + '&comment='  + encodeURIComponent(comment.val());
		
		//disabled all the text fields
		$('.contact input, .contact textarea').attr('disabled','true');
		
		//show the loading sign
		$('.loading').show();
		
		//start the ajax
		$.ajax({
			//this is the php file that processes the data and send mail
			url: "contact-form/send.php",	
			type: "GET",
			data: data,				
			cache: false,
			
			//success
			success: function (html) {				
				//if process.php returned 1/true (send mail success)
				if (html==1) {					
					//clear the form
					$('.contact-form input, .contact-form textarea').val('');
					$('.contact-form select').val($('.contact-form select option').eq(0).val());
					
					//show the success message
					$('.form-success').slideDown('slow');
					setTimeout(function(){
						$('.form-success').slideUp('slow');
					}, 5000);
					
				//if process.php returned 0/false (send mail failed)
				} else alert('Ha ocurrido un error inesperado. Por favor pruebe más tarde.');				
			}		
		});
		return false;} else alert ('Debes leer y estar de acuerdo con el Aviso Legal antes de enviar los datos del formulario.');//fin gran-if para comprobar si se ha marcado el checkbox, sino no envía nada
	});
    //END CONTACT FORM SCRIPT
    

    //CONTACT FORM POSITIONING
    var contactHeight = $('#contact').height();
    var footerHeight = $('#footer').height();
    $('.contact-form form').css('top', (contactHeight-footerHeight)/2+40);
    $('#contact_form textarea').css('width', ($('#contact_form .name').width())*3+9);
    $(window).resize(function() {
        $('#contact_form textarea').css('width', ($('#contact_form .name').width())*3+9);
    });
    
    //SMOOTH SCROLLING
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        })
    });
    
    
    //PORTFOLIO PAGE
    if ($('#homepage').length){}else{
        //load masonry
        var container = document.querySelector('#masonry-portfolio');
        var msnry = new Masonry( container, {
            columnWidth: 481,
            gutter: 50,
            itemSelector: '.proyecto',
            isAnimated: true,
            percentPosition: true
        });
        
        function centraPortfolio() {
            $('#portfolio-page #masonry-portfolio').css('left', wwidth/2-540);
        }
        function centraPortfolioMobile() {
            $('#portfolio-page #masonry-portfolio').css('left', wwidth/2-270);
        }
        
        if ((wwidth<=1499-20)&&(wwidth>1051)) {centraPortfolio();}
        if ((wwidth<=1051)&&(wwidth>545-20)) {centraPortfolioMobile();}
        $(window).resize(function() {
            wwidth = $(window).width(); //get window width
            if ((wwidth<=1499-20)&&(wwidth>1051)) {centraPortfolio();}
            if ((wwidth<=1051)&&(wwidth>545-20)) {centraPortfolioMobile();}
        });
    
    }//si no es la página principal...

    //preloader
    //<![CDATA[
        $(window).load(function() { // makes sure the whole site is loaded
            $('#status').fadeOut(); // will first fade out the loading animation
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.                
            $('body').delay(350).css({'overflow':'visible'});
        })
    //]]>
});//document ready

