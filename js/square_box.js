
// Returns width of HTML document
// $( document ).css(width);

// $( ".news" ).css( "width", function() {
//   return $( document ).css(width);
// });
// $(".news-box").height($(".news-box").width());

// $( window ).bind("resize", function(){
//     // Change the width of the div
//     $(".news").width( 600 );
//     $(".news-box").height($(".news-box").width());
// });

// $(".news").css("width", 1400);
// $(".news").css("height", 1500);


   var height = $('.news').width()*2/3;
   $('.news').css({'height':height+'px'});
$(window).resize(function(){
   var height = $('.news').width()*2/3;
   $('.news').css({'height':height+'px'});
});