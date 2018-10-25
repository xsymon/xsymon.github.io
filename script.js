//Controllo comparsa e scomparsa del banner di sconto di inizio pagina
fixedBarHeight = $("#fixed-bar").height();

$banner = $("#discount-banner");
$(window).scroll(function(){
	if($(document).scrollTop()==0){
		$banner.insertBefore('#fixed-bar');
		$('#offer-hero').css('paddingTop','unset');
		$('#fixed-bar').css('position','static');
	}else{
		$('#offer-hero').css('paddingTop',fixedBarHeight);
		$('#discount-banner').remove();
		$('#fixed-bar').css('position','fixed');
	}
});

//Controlla l'apparizione della barra blu nel div dell'offerta cliccata sotto l'hero
$("#offer-nav > div").click(function(event){
	$("#offer-nav > div").removeClass("selected");
	$(this).addClass("selected");
});

const carousel = new Siema({
	selector: '.siema',
  	duration: 200,
  	easing: 'ease-out',
  	perPage: 1,
  	startIndex: 0,
  	draggable: true,
  	multipleDrag: true,
  	threshold: 20,
  	loop: false,
  	rtl: false
});
$(".prev").on('click',()=>{
	carousel.prev();
});
$(".next").on('click',()=>{
	carousel.next();
});

const carousel2 = new Siema({
	selector: '.siema2',
  	duration: 200,
  	easing: 'ease-out',
  	perPage: 5,
  	startIndex: 0,
  	draggable: true,
  	multipleDrag: true,
  	threshold: 20,
  	loop: false,
  	rtl: false
});

const carousel3 = new Siema({
	selector: '.siema3',
  	duration: 200,
  	easing: 'ease-out',
  	perPage: 5,
  	startIndex: 0,
  	draggable: true,
  	multipleDrag: true,
  	threshold: 20,
  	loop: false,
  	rtl: false
});

