function SelectText(t){var e,n,i=t;document.body.createTextRange?((e=document.body.createTextRange()).moveToElementText(i),e.select()):window.getSelection&&0===(n=window.getSelection()).toString().length&&((e=document.createRange()).selectNodeContents(i),n.removeAllRanges(),n.addRange(e))}var fullHeight=function(){$(".js-fullheight").css("height",$(window).height()),$(window).resize(function(){$(".js-fullheight").css("height",$(window).height())})},contentWayPoint=function(){$(".animate-box").waypoint(function(o){"down"===o&&!$(this.element).hasClass("animated")&&($(this.element).addClass("item-animate"),setTimeout(function(){$("body .animate-box.item-animate").each(function(i){var e=$(this);setTimeout(function(){var n=e.data("animate-effect");e.addClass("fadeIn"===n?"fadeIn animated":"fadeInUp animated"),e.removeClass("item-animate")},200*i,"easeInOutExpo")})},100))},{offset:"120%"})},counter=function(){$(".js-counter").countTo({formatter:function(t,o){return t.toFixed(o.decimals)}})},counterWayPoint=function(){$("#colorlib-counter").length>0&&$("#colorlib-counter").waypoint(function(t){"down"===t&&!$(this.element).hasClass("animated")&&(setTimeout(counter,400),$(this.element).addClass("animated"))},{offset:"95%"})},owlCarouselFeatureSlide=function(){$(".owl-carousel1").owlCarousel({animateOut:"fadeOut",animateIn:"fadeIn",autoplay:!0,loop:!0,margin:0,nav:!0,dots:!1,autoHeight:!0,responsive:{0:{items:1},600:{items:2},1e3:{items:3}},navText:["<i class='icon-arrow-left3 owl-direction'></i>","<i class='icon-arrow-right3 owl-direction'></i>"]}),$(".owl-carousel").owlCarousel({animateOut:"fadeOut",animateIn:"fadeIn",autoplay:!0,loop:!0,margin:0,nav:!1,dots:!0,autoHeight:!0,items:1,navText:["<i class='icon-arrow-left3 owl-direction'></i>","<i class='icon-arrow-right3 owl-direction'></i>"]}),$(".owl-carousel3").owlCarousel({animateOut:"fadeOut",animateIn:"fadeIn",autoplay:!0,loop:!0,margin:0,nav:!1,dots:!1,autoHeight:!0,items:1,navText:["<i class='icon-arrow-left3 owl-direction'></i>","<i class='icon-arrow-right3 owl-direction'></i>"]})};function loadEvents(){console.log("Load events"),fullHeight(),counterWayPoint(),contentWayPoint(),owlCarouselFeatureSlide()}