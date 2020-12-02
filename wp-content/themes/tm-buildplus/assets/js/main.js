/*--------------------------------------------------------------
 Custom js
 --------------------------------------------------------------*/
jQuery(document).ready(function ($) {
    'use strict';

    // Menu mobile
    var snapper = new Snap({
        element: document.getElementById('page'),
        dragger: document.getElementsByClassName('page'),
        disable: 'right',
        slideIntent: 10,
    });

    if($('#open-left').length > 0) {
        var addEvent = function addEvent(element, eventName, func) {
            if (element.addEventListener) {
                return element.addEventListener(eventName, func, false);
            } else if (element.attachEvent) {
                return element.attachEvent("on" + eventName, func);
            }
        };
        addEvent(document.getElementById('open-left'), 'click', function () {
            snapper.open('left');
        });
    }

    // mini-cart
    var $mini_cart = $('.mini-cart');
    $mini_cart.on('click', function (e) {
        $(this).addClass('open');
    });

    $(document).on('click', function (e) {
        if ($(e.target).closest($mini_cart).length == 0) {
            $mini_cart.removeClass('open');
        }
    });

    // search in menu
    var $search_btn = $('.search-box > i'),
        $search_form = $('form.search-form');

    $search_btn.on('click', function () {
        $search_form.toggleClass('open');
    });

    $(document).on('click', function (e) {
        if ($(e.target).closest($search_btn).length == 0
            && $(e.target).closest('input.search-field').length == 0
            && $search_form.hasClass('open')) {
            $search_form.removeClass('open');
        }
    });

    // Counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // ScrollUp
    if ($tm.back_to_top == 1) {

        $.scrollUp({
            scrollName: 'scrollUp',      // Element ID
            scrollDistance: 300,         // Distance from top/bottom before showing element (px)
            scrollFrom: 'top',           // 'top' or 'bottom'
            scrollSpeed: 300,            // Speed back to top (ms)
            easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
            animation: 'fade',           // Fade, slide, none
            animationSpeed: 200,         // Animation speed (ms)
            scrollText: '<i class="fa fa-angle-up"></i>', // Text for element, can contain HTML
        });
    }
    
    // Headroom
    if ($tm.nav_sticky_enable == 1) {

        var $nav = $('#site-navigation');
        if ($nav.length > 0) {
            $nav.headroom();
        }
    }

});

// Menu toggle in Sidebar
jQuery(document).ready(function ($) {
    'use strict';

    jQuery('.sidebar .menu-item-has-children').each(function () {
        jQuery(this).append('<span class="mobile-menu-expand fa fa-angle-down"></span>');
    });

    jQuery('.mobile-menu-expand').on('click', function () {
        jQuery(this).parent().find('ul:first').slideToggle();
        jQuery(this).tmToggleClass('fa-angle-down', 'fa-angle-up');
    });

    jQuery.fn.tmToggleClass = function (t1, t2) {
        if (this.hasClass(t1)) {
            this.removeClass(t1);
            this.addClass(t2);
        } else {
            this.removeClass(t2);
            this.addClass(t1);
        }
        return this;
    };

});