function SelectText(e){var t,o,n=e;document.body.createTextRange?((t=document.body.createTextRange()).moveToElementText(n),t.select()):window.getSelection&&0===(o=window.getSelection()).toString().length&&((t=document.createRange()).selectNodeContents(n),o.removeAllRanges(),o.addRange(t))}var fullHeight=function(){$(".js-fullheight").css("height",$(window).height()),$(window).resize(function(){$(".js-fullheight").css("height",$(window).height())})},contentWayPoint=function(){$(".animate-box").waypoint(function(e){"down"!==e||$(this.element).hasClass("animated")||($(this.element).addClass("item-animate"),setTimeout(function(){$("body .animate-box.item-animate").each(function(e){var t=$(this);setTimeout(function(){var e=t.data("animate-effect");t.addClass("fadeIn"===e?"fadeIn animated":"fadeInUp animated"),t.removeClass("item-animate")},200*e,"easeInOutExpo")})},100))},{offset:"120%"})},counter=function(){$(".js-counter").countTo({formatter:function(e,t){return e.toFixed(t.decimals)}})},counterWayPoint=function(){$("#colorlib-counter").length>0&&$("#colorlib-counter").waypoint(function(e){"down"!==e||$(this.element).hasClass("animated")||(setTimeout(counter,400),$(this.element).addClass("animated"))},{offset:"95%"})},owlCarouselFeatureSlide=function(){$(".owl-carousel1").owlCarousel({animateOut:"fadeOut",animateIn:"fadeIn",autoplay:!0,loop:!0,margin:0,nav:!0,dots:!1,autoHeight:!0,responsive:{0:{items:1},600:{items:2},1000:{items:3}},navText:["<i class='icon-arrow-left3 owl-direction'></i>","<i class='icon-arrow-right3 owl-direction'></i>"]}),$(".owl-carousel").owlCarousel({animateOut:"fadeOut",animateIn:"fadeIn",autoplay:!0,loop:!0,margin:0,nav:!1,dots:!0,autoHeight:!0,items:1,navText:["<i class='icon-arrow-left3 owl-direction'></i>","<i class='icon-arrow-right3 owl-direction'></i>"]}),$(".owl-carousel3").owlCarousel({animateOut:"fadeOut",animateIn:"fadeIn",autoplay:!0,loop:!0,margin:0,nav:!1,dots:!1,autoHeight:!0,items:1,navText:["<i class='icon-arrow-left3 owl-direction'></i>","<i class='icon-arrow-right3 owl-direction'></i>"]})};function loadEvents(){console.log("Load events"),fullHeight(),counterWayPoint(),contentWayPoint(),owlCarouselFeatureSlide()}