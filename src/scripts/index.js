import '../styles/index.scss';
import $ from "jquery";

$(document).ready(function($) {
    $('.tabs__content').hide();
    $('.tabs__content:first').show();
    $('.tabs__list-item:first').addClass('active');
    $('.tabs__list-item').click(function(event) {
      $('.tabs__list-item').removeClass('active');
      $(this).addClass('active');
      $('.tabs__content').hide();
  
      var selectTab = $(this).find('a').attr("href");
  
      $(selectTab).fadeIn();
    });
  });
  
console.log('webpack starterkit');
