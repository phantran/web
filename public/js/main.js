$(function() {
  'use strict';

  var window_height = window.innerHeight;

  $('.fullscreen').css('height', window_height);

  if (document.getElementById('default-select')) {
    $('select').niceSelect();
  }

  $('.toggle_icon').on('click', function() {
    $('body').toggleClass('open');
  });
});

window.addEventListener(onresize, event => {
  $('.navbar-toggler').click();
});

$(document).on('click', function() {
  $('.collapse').collapse('hide');
});
