var settings = {
	items : 2,
	navigaton:true,
	loop:true,
	margin:2
}

$(".owl-carousel").owlCarousel(settings);
window.scrollTo(0,0);

$('.count-box').countdown('2019/01/01', function(event) {
  $(".count-box h1").text(event.strftime('%D Giorni %H:%M:%S'));

}).on('update.countdown',function(){
  	$(".count-box").css('box-shadow','4px 3px 77px 9px rgba(129,212,250,1)');
  	setTimeout(()=>{
  		$(".count-box").css('box-shadow','none');
  	},900);
  })

  /*
  $(".circle").css('box-shadow','4px 3px 77px 9px rgba(129,212,250,1)');
  setTimeout(function(){
  	$(".circle").css('box-shadow','none');
  },1000);*/



