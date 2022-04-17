var back = document.getElementById('back');
window.addEventListener('scroll', function () {
	if(document.documentElement.scrollTop >= 300){
		back.style.display = 'block';
	}
	if(document.documentElement.scrollTop < 300){
		back.style.display = 'none';
	}
})
back.addEventListener('click',function(){
	document.documentElement.scrollTop = 0;
})