$(document).ready(function() {
	var add = $('#add');
	$('#add').on('click', function(){
		if($('#input').val() ==("")){
			$('#error').text('* Hãy nhập nội dung ! *');
		} else{
			$('#error').text('');
			var title = $('#input').val();
			$('.list_task').append('<p class="task">' + title +'<i class="close fas fa-window-close"></i></p>');
			$('#input').val('');
			$('.list_task').on('click', '.close', function () {
				$(this).parent().remove();
			})
			$('.list_task').on('click','.task', function() {
				$(this).css({
					'background-color':'#606260',
					'color':'#fff',
					'text-decoration': 'line-through',
				})
				$(this).prepend('<i class="done fas fa-check"></i>');
			})
		}
	})
})