$(function() {
    
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
        if (((windowpos >= $('#services').offset().top-31)&&(windowpos < $('#portfolio').offset().top+mediaOffset))||((windowpos >= $('#contact').offset().top-31))) {
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
    });
    
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
					if (window.BrowserDetect.browser === "Explorer" && window.BrowserDetect.version < 10){
						$('[placeholder]').focus(function() {
							var input = $(this);
							if (input.val() == input.attr('placeholder')) {
								input.val('');
								input.removeClass('placeholder');
							}
						}).blur(function() {
							var input = $(this);
							if (input.val() == '' || input.val() == input.attr('placeholder')) {
								input.addClass('placeholder');
								input.val(input.attr('placeholder'));
							}
						}).blur();
					}
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
    console.log(contactHeight);
    $('#contact_form textarea').css('width', ($('#contact_form .name').width())*3+9);
    $(window).resize(function() {
        $('#contact_form textarea').css('width', ($('#contact_form .name').width())*3+9);
    });

});//document ready

