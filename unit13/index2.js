var subscribe = document.getElementById('subscribe');
subscribe.addEventListener('click', function() {
	var inputName = document.getElementById('input-name');
	if(inputName.value === ''){
		document.getElementsByClassName('error-name')[0].innerText = 'Name not null !';
	} else if(inputName.value.length < 8){
		document.getElementsByClassName('error-name')[0].innerText = 'More than 8 character !';
	} else{
		document.getElementsByClassName('error-name')[0].innerText = '';
	}
});