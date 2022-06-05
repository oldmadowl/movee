$(function(){

  $('.cars__tabs-btn').on('click', function(e) {
    e.preventDefault()

    $('.cars__tabs-btn').removeClass('cars__tabs-btn--active')
    $(this).addClass('cars__tabs-btn--active');

    $('.cars__tabs-item').removeClass('cars__tabs-item--active');
    $($(this).attr('href')).addClass('cars__tabs-item--active');

  });


  $('.cars__slider').slick({
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/slide-left.svg" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/slide-right.svg" alt=""></button>',
  });

  $('.feedback__item-rate').rateYo({
    rating: 5,
    starWidth: '15px',
    ratedFill: '#FF352B',
    spacing: '0.5px',
    numStars: 5,
    readOnly: true,
  });

  $('.book__form-checkbox').styler();


});