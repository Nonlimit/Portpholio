$(document).ready(function() {
'use strict'
  $(".owl-carousel").owlCarousel({
    margin: 30,
    loop: !0,
    items: 3,
    lazyLoad: !0
  }),
  $(".content-header p").waypoint(function() {
    $(".first-section .browser").css("visibility", "visible").addClass("animated bounceInLeft")
  }), $(".icon-text .zmdi-settings").waypoint(function() {
    $(".second-section .browser").css("visibility", "visible").addClass("animated bounceInRight")
  }), $(".third-section").waypoint(function() {
    $(".blocks").css("visibility", "visible").addClass("animated fadeInUp")
  }), $(".four-section").waypoint(function() {
    $(".block-price.left").css("visibility", "visible").addClass("animated fadeInLeft"), $(".block-price.center").css("visibility", "visible").addClass("animated fadeInUp"), $(".block-price.right").css("visibility", "visible").addClass("animated fadeInRight")
  });
let bLazy = new Blazy()

let close = document.querySelector('.zmdi-close')
let menu = document.querySelector('.zmdi-menu')
let ul = document.querySelector('.header-fixed-nav-list')
let visibleClose = close.style.display = 'block'

close.addEventListener('click', () => {
  close.style.display = 'none'
  menu.style.display = 'block'
  ul.style.display = 'none'
})
menu.addEventListener('click', () => {
  close.style.display = 'block'
  menu.style.display = 'none'
  ul.style.display = 'flex'
})

});
