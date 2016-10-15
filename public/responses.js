$(document).ready(function(){
	resizeDiv();
});

window.onresize = function(event) {
	resizeDiv();
}

function resizeDiv() {
	vpw = $(window).width();
	vph = $(window).height();
	console.log(vpw);
	console.log(vph);
	$('.parent').css({'height': vph + 'px'});
	$('.parent').css({'width': vpw + 'px'});
	$('.coke').css({'height': vph + 'px'});
	$('.coke').css({'height': vph/3 + 'px'});
}

$('#imr1').click(function(){window.location.replace("http://139.59.22.162/responses/week1");});
$('#imr2').click(function(){window.location.replace("http://139.59.22.162/responses/week2");});
$('#imr3').click(function(){window.location.replace("http://139.59.22.162/responses/week3");});
$('#imr4').click(function(){window.location.replace("http://139.59.22.162/responses/week4");});
$('#imr5').click(function(){window.location.replace("http://139.59.22.162/responses/week5");});
$('#imr6').click(function(){window.location.replace("http://139.59.22.162/responses/week6");});
$('#imr7').click(function(){window.location.replace("http://139.59.22.162/responses/week7");});