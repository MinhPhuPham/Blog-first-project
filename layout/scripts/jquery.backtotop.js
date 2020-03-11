/*
Template Name: Trealop
Author: <a href="https://www.os-templates.com/">OS Templates</a>
Author URI: https://www.os-templates.com/
Copyright: OS-Templates.com
Licence: Free to use under our free template licence terms
Licence URI: https://www.os-templates.com/template-terms
File: Back to Top JS
*/

jQuery("#backtotop").click(function() {
    jQuery("body,html").animate({
        scrollTop: 0
    }, 600);
});
jQuery(window).scroll(function() {
    if (jQuery(window).scrollTop() > 150) {
        jQuery("#backtotop").addClass("visible");
    } else {
        jQuery("#backtotop").removeClass("visible");
    }
});

// $.fn.scrollEnd = function(callback, timeout) {
//     $(this).scroll(function() {
//         var $this = $(this);
//         if ($this.data('scrollTimeout')) {
//             clearTimeout($this.data('scrollTimeout'));
//         }
//         $this.data('scrollTimeout', setTimeout(callback, timeout));
//     });
// };

// $(window).scroll(function() {
//     $('.row0').fadeOut();
// });

// $(window).scrollEnd(function() {
//     $('.row0').fadeIn();
// }, 700);


// Hide Header on on scroll down
// var didScroll;
// var lastScrollTop = 0;
// var delta = 5;
// var navbarHeight = $('#topbar').outerHeight();

// $(window).scroll(function(event) {
//     didScroll = true;
// });

// setInterval(function() {
//     if (didScroll) {
//         hasScrolled();
//         didScroll = false;
//     }
// }, 250);

// function hasScrolled() {
//     var st = $(this).scrollTop();

//     // Make sure they scroll more than delta
//     if (Math.abs(lastScrollTop - st) <= delta)
//         return;

//     // If they scrolled down and are past the navbar, add class .nav-up.
//     // This is necessary so you never see what is "behind" the navbar.
//     if (st > lastScrollTop && st > navbarHeight) {
//         // Scroll Down
//         $('#topbar').removeClass('topbar-down').addClass('topbar-up');
//     } else {
//         // Scroll Up
//         if (st + $(window).height() < $(document).height()) {
//             $('#topbar').removeClass('topbar-up').addClass('topbar-down');
//         }
//     }

//     lastScrollTop = st;
// }

$(document).ready(function() {

    'use strict';

    var c, currentScrollTop = 0,
        navbar = $('.row0');

    $(window).scroll(function() {
        var a = $(window).scrollTop();
        var b = navbar.height();

        currentScrollTop = a;

        if (c < currentScrollTop && a > b + b) {
            navbar.addClass("scrollUp");
        } else if (c > currentScrollTop && !(a <= b)) {
            navbar.removeClass("scrollUp");
        }
        c = currentScrollTop;
    });

});