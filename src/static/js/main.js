$(document).ready(function(){
  
  //scroll
  $('.js-scroll').click(function(e){
    e.preventDefault();
    let anchor = $(this).attr("href"),
        scroll_el = $(anchor);
    if ($(scroll_el).length != 0) { 
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top}, 250); 
    }
  });
  
  //order btn
  $('.js-order-btn').on('click', function(){
    $('#js-popup .js-popup-title').text('Отправить заявку');
    $('#js-popup .js-hide-input').val('Заявка');
    $('#js-popup').fadeIn(250);
  });
  
  //callback btn
  $('.js-callback-btn').on('click', function(){
    $('#js-popup .js-popup-title').text('Связаться с нами');
    $('#js-popup .js-hide-input').val('Связаться с нами');
    $('#js-popup').fadeIn(250);
  });
  
  //close popup
  $('.js-close-popup').on('click', function(){
    $('.js-popup').fadeOut(250);
  });
  
  //submit
  $('.js-form-val').on('submit', function(e){
    e.preventDefault();
    let form = $(this),
        fields = $(form).find('.js-val'),            
        valid = true;
    
    $.each($(fields), function(){
      if (!$.trim($(this).val())){
        $(this).addClass('error');
        valid = false;            
      } else {
        $(this).removeClass('error');
      }
    });
    
    if (valid){
      $.ajax({
        url: "php/mail.php",
        type: "POST",
        response: "HTML",
        data: $(this).serialize(),    
        success: function(data) {
          $('#js-popup').fadeOut(250);                    
          $('#js-confirm').fadeIn(250);                    
        },
        error: function() {
          console.log("Не возможно отправить");
        }
      });
    }
  });
  $('.js-val').on('keypress', function(){
    $(this).removeClass('error');
  });
  
  //fix header
  $(window).on('scroll', function(){
    if( $(window).scrollTop() >  $('#js-hero').innerHeight()){
      $('#js-header-fix').addClass('fix');
    } else{
      $('#js-header-fix').removeClass('fix');
    }
  });
  
  //show all menu
  $('#js-short-menu').on('click', function(){
    $('#js-header-fix').toggleClass('open');
  });
});