$(document).ready(function() {
	$('.block6_tag1-content').hide();
	$('.block6_tag1-content-hide').hide();
	$('.block6_tag1-content-show').on('click', function() {
		$(this).parent().next().toggle();
		$(this).siblings().toggle();
		$(this).toggle();
	});
	$('.block6_tag1-content-hide').on('click', function() {
		$(this).parent().next().toggle();
		$(this).siblings().toggle();
		$(this).toggle();
	});
	$('#formDemo').validate({
		rules:{
			name:"required",
			mail:"mail",
		},
		messages:{
			name:"Enter your name",
			mail:"Enter your mail",
		}
	});
	$('.fa-bars').on('click',function () {
		$('.menu2').toggle();
		$('.fa-bars').toggle();
		$('.fa-times').toggle();
	});
	$('.fa-times').on('click',function () {
		$('.menu2').toggle();
		$('.fa-bars').toggle();
		$('.fa-times').toggle();
	})
});