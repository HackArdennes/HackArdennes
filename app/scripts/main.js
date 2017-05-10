'use strict';

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($('.navbar').offset().top > 50) {
        $('.navbar-fixed-top').addClass('top-nav-collapse');
    } else {
        $('.navbar-fixed-top').removeClass('top-nav-collapse');
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    L.Icon.Default.imagePath = '/images';
    var map = L.map('map', {
        center: [49.76422, 4.70963],
        zoom: 15,
        scrollWheelZoom: false
    });

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([49.76422, 4.70963]).addTo(map)
        .bindPopup('<a href="https://twitter.com/HackArdennes">#HackCV17</a>')
        .openPopup();
});
