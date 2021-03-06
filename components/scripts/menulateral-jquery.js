(function($) {
    var $body = $("body"),
        $pageslide = $("#pageslide");
    var _sliding = false,
        _lastCaller;
    if ($pageslide.length == 0) {
        $pageslide = $("<div />").attr("id", "pageslide").css("display", "none").appendTo($("body"));
    }
    
    function _load(url, useIframe) {
        if (url.indexOf("#") === 0) {
            $(url).clone(true).appendTo($pageslide.empty()).show();
        } else {
            if (useIframe) {
                var iframe = $("<iframe />").attr({
                    src: url,
                    frameborder: 0,
                    hspace: 0
                }).css({
                    width: "100%",
                    height: "100%"
                });
                $pageslide.html(iframe);
            } else {
                $pageslide.load(url);
            }
            $pageslide.data("localEl", false);
        }
    }

    function _start(direction, speed) {
        var slideWidth = $pageslide.outerWidth(true),
            bodyAnimateIn = {},
            slideAnimateIn = {};
        if ($pageslide.is(":visible") || _sliding) {
            return;
        }
        _sliding = true;
        switch (direction) {
            case "left":
                $pageslide.css({
                    left: "auto",
                    right: "-" + slideWidth + "px"
                });
                bodyAnimateIn["margin-left"] = "-=" + slideWidth;
                slideAnimateIn["right"] = "+=" + slideWidth;
                $('#menu-launch').addClass('abierto');
                if ($('#menu-launch').hasClass('lightbackground')) {
                    $('.lateral').css({
                        right: slideWidth + "px",
                        background: 'url(./images/cross.png) no-repeat'
                    });   
                }else{
                    $('.lateral').css({
                        right: slideWidth + "px",
                        background: 'url(./images/cross-white.png) no-repeat'
                    });
                }
                break;
            default:
                $pageslide.css({
                    left: "-" + slideWidth + "px",
                    right: "auto"
                });
                bodyAnimateIn["margin-left"] = "+=" + 0;//slideWidth cambiado por 0 para no desplazar
                slideAnimateIn["left"] = "+=" + slideWidth;
                break;
        }
        //$body.animate(bodyAnimateIn, speed);
        $pageslide.show().animate(slideAnimateIn, speed, function() {
            _sliding = false;
        });
    }
    $.fn.pageslide = function(options) {
        var $elements = this;
        $elements.click(function(e) {
            var $self = $(this),
                settings = $.extend({
                    href: $self.attr("href")
                }, options);
            e.preventDefault();
            e.stopPropagation();
            if ($pageslide.is(":visible") && $self[0] == _lastCaller) {
                $.pageslide.close();
            } else {
                $.pageslide(settings);
                _lastCaller = $self[0];
            }
        });
    };
    $.fn.pageslide.defaults = {
        speed: 200,
        direction: "right",
        modal: false,
        iframe: true,
        href: null
    };
    $.pageslide = function(options) {
        var settings = $.extend({}, $.fn.pageslide.defaults, options);
        if ($pageslide.is(":visible") && $pageslide.data("direction") != settings.direction) {
            $.pageslide.close(function() {
                _load(settings.href, settings.iframe);
                _start(settings.direction, settings.speed);
            });
        } else {
            _load(settings.href, settings.iframe);
            if ($pageslide.is(":hidden")) {
                _start(settings.direction, settings.speed);
            }
        }
        $pageslide.data(settings);
    };
    $.pageslide.close = function(callback) {
        var $pageslide = $("#pageslide"),
            slideWidth = $pageslide.outerWidth(true),
            speed = $pageslide.data("speed"),
            bodyAnimateIn = {},
            slideAnimateIn = {};
        if ($pageslide.is(":hidden") || _sliding) {
            return;
        }
        _sliding = true;
        switch ($pageslide.data("direction")) {
            case "left":
                bodyAnimateIn["margin-left"] = "+=" + 0;//slideWidth cambiado por 0 para no desplazar contenido
                slideAnimateIn["right"] = "-=" + slideWidth;
                $('#menu-launch').removeClass('abierto');
                if ($('#menu-launch').hasClass('lightbackground')) {
                    $('.lateral').css({
                        right: 25 + "px",
                        background: 'url(./images/collapse-dark.png) no-repeat'
                    });
                }else{
                    $('.lateral').css({
                        right: 25 + "px",
                        background: 'url(./images/collapse.png) no-repeat'
                    });
                }
                break;
            default:
                bodyAnimateIn["margin-left"] = "-=" + 0;//slideWidth cambiado por 0 para no desplazar contenido
                slideAnimateIn["left"] = "-=" + slideWidth;
                break;
        }
        $pageslide.animate(slideAnimateIn, speed);
        $body.animate(bodyAnimateIn, speed, function() {
            $pageslide.hide();
            _sliding = false;
            if (typeof callback != "undefined") {
                callback();
            }
        });
    };
    $pageslide.click(function(e) {
        e.stopPropagation();
    });
    $(document).bind("click keyup", function(e) {
        if (e.type == "keyup" && e.keyCode != 27) {
            return;
        }
        if ($pageslide.is(":visible") && !$pageslide.data("modal")) {
            $.pageslide.close();
        }
    });
})(jQuery);