$(function() {

   $('.prodlist-content__filter-btn').on('click', function() {
    
      $('.prodlist-content__filter-btn').removeClass('prodlist-content__filter-btn--active');
      $(this).addClass('prodlist-content__filter-btn--active');
  });

  $('.button-list').on('click', function() {
      $('.prodlist-content__item').addClass('prodlist-content__item--list');
  });

  $('.button-grid').on('click', function() {
      $('.prodlist-content__item').removeClass('prodlist-content__item--list');
  });


  $(".star").rateYo({
    readOnly: true,
    starWidth: "12px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "8px"
  });

 $(".filter-price__input").ionRangeSlider({
        type: "double",
         prefix: "$",
         onStart: function (data) {
           $('.filter-price__from').text(data.from);
           $('.filter-price__to').text(data.to);
         },
         onChange: function (data) {
           $('.filter-price__from').text(data.from);
           $('.filter-price__to').text(data.to);
         },
       
    });


 $('.top-slider__top').slick({
    arrows: false,
    dots:true
 });
 var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');
 
  var config = {
    controls: {
      scope: 'local'
    }
  };
 
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
});