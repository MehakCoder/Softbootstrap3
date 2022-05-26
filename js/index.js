$(document).ready(function(){
  $('.homepage-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  })  
})

$(".product-filters li").on('click', function () {
            
  $(".product-filters li").removeClass("active");
  $(this).addClass("active");

  var selector = $(this).attr('data-filter');

  $(".product-lists").isotope({
      filter: selector,
  });
  
});
$(".product-filters .strawberry").on('click', function () {
            
  $(".product-filters li").removeClass("active");
  $(this).addClass("active");

  var selector = $(this).attr('data-filter');

  $(".product-lists").isotope({
      filter: Strawberry,
  });
  
});

