$(document).ready(function(){

$('body').scrollspy({target: '.bs-docs-sidebar',
                     offset: 40 });

$("#sidebar").affix({offset: {top: 100}});
 
  var owl = $(".homeCarousel");
 
  owl.owlCarousel({
      navigation : false,
      singleItem:true,
      lazyLoad : true,
      autoPlay: 3000
  });

});
