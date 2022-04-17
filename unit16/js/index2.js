$(document).ready(function() {
	$('.fa-bars').on('click', function() {
		$('.menu').show()
		$('.fa-bars').hide()
		$('.fa-times').show()
	})
	$('.fa-times').on('click', function() {
		$('.menu').hide()
		$('.fa-bars').show()
		$('.fa-times').hide()
	})
});