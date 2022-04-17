$(document).ready(function() {
	$('.img').on('click', function() {
		var src = $(this).attr('src');
		console.log(src);
		$('.modal-content').attr('src', src);
		$('#myModal').show();
	});
	$('.fa-times').on('click', function() {
		$('#myModal').hide();
	});
	$('.fa-caret-right').on('click', function() {
		var next = $(this).next().attr('src');
		console.log(next);
	})
})