var settings = {
	items : 2,
	navigaton:true,
	loop:true,
	margin:2
}

$(".owl-carousel").owlCarousel(settings);
window.scrollTo(0,0);

$('.count-box').countdown('2019/01/01', function(event) {
  $(".count-date").text(event.strftime('%D Giorni %H:%M:%S a capodanno'));
});
