$(document).ready(function(){
	resizeDiv();
});

window.onresize = function(event) {
	resizeDiv();
}

function resizeDiv() {
	vpw = $(window).width();
	vph = $(window).height();
	$('.rgbcontainer').css({'height': vph + 'px'});
	$('.rgbcontainer').css({'width': vpw + 'px'});
}

$('#imr1').click(function(){
	window.location.replace("http://139.59.22.162/responses/home");
});

$('#imr2').click(function(){
	window.location.replace("http://139.59.17.245/group-project-1");
});