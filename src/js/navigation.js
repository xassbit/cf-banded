var $ = require('jquery');

$(document).ready(function () {
    'use strict';
    $('.cf-nav-hamburger').on('click', function () {
        $(this).next().toggleClass('active');
        if ($('.cf-single-col').css('-webkit-filter') === 'blur(5px)' || $('.cf-single-col').css('filter') === 'blur(5px)') {
            $('.cf-single-col, .cf-left-col, .cf-right-col').css('-webkit-filter', 'none');
            $('.cf-single-col, .cf-left-col, .cf-right-col').css('filter', 'none');
        } else {
            $('.cf-single-col, .cf-left-col, .cf-right-col').css('-webkit-filter', 'blur(5px)');
            $('.cf-single-col, .cf-left-col, .cf-right-col').css('filter', 'blur(5px)');
        }
    });
});
