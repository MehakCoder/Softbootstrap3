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

