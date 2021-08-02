$(".social-contact i").hover(function(){
  $(this).addClass("hover-text");
},function(){
  $(this).removeClass("hover-text");
});

$(".footer-menu").hover(function(){
  $(this).addClass("hover-text");
},function(){
  $(this).removeClass("hover-text");
});

$(".contact-menu").hover(function(){
  $(this).addClass("hover-navitem");
  $(".navbar-dark .navbar-nav .contact-menu .nav-link").css("color","hsl(0, 0%, 100%)");
},function(){
  $(this).removeClass("hover-navitem");
  $(".navbar-dark .navbar-nav .contact-menu .nav-link").css("color","hsl(212, 27%, 19%)");
})

$(".link-more").hover(function(){
  $(this).children("hr").css("opacity","0.8");
},function(){
  $(this).children("hr").css("opacity","0.25");
})
