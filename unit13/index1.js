var arrImg = document.getElementsByClassName('slide-item');
document.getElementsByClassName('slide-item')[0].classList.add('active');
var index = 0;


	var next = document.getElementById('next');
	next.addEventListener('click', nextSlide);

function nextSlide() {
	for(var i = 0; i< arrImg.length; i++){
			if(document.getElementsByClassName('slide-item')[i].classList.contains('active')){
				index = i;
				document.getElementsByClassName('slide-item')[i].classList.remove('active');
				document.getElementsByClassName('dot')[i].classList.remove('active-dot');
			}
		}
		if(index == arrImg.length - 1){
			index = 0;
		}else{
			index = index + 1;
		}
		document.getElementsByClassName('slide-item')[index].classList.add('active');
		document.getElementsByClassName('dot')[index].classList.add('active-dot');
}
setInterval(nextSlide, 5000);

var previous = document.getElementById('previous');
previous.addEventListener('click', function (){
	for(var i = 0; i< arrImg.length; i++){
		if(document.getElementsByClassName('slide-item')[i].classList.contains('active')){
			index = i;
			document.getElementsByClassName('slide-item')[i].classList.remove('active');
			document.getElementsByClassName('dot')[i].classList.remove('active-dot');
		}
	}
	if(index == 0){
		index = arrImg.length - 1;
	}else{
		index = index - 1;
	}
	document.getElementsByClassName('slide-item')[index].classList.add('active');
	document.getElementsByClassName('dot')[index].classList.add('active-dot');
});
var dot = document.getElementsByClassName('dot');
function dotClick(argument) {
	for(var i = 0; i< arrImg.length; i++){
		document.getElementsByClassName('slide-item')[i].classList.remove('active');
			document.getElementsByClassName('dot')[i].classList.remove('active-dot');
		}
	document.getElementsByClassName('slide-item')[argument].classList.add('active');
	document.getElementsByClassName('dot')[argument].classList.add('active-dot');
}

dot[0].addEventListener('click', dotClick(0));
dot[1].addEventListener('click', function() {
	for(var i = 0; i< arrImg.length; i++){
		document.getElementsByClassName('slide-item')[i].classList.remove('active');
			document.getElementsByClassName('dot')[i].classList.remove('active-dot');
		}
	document.getElementsByClassName('slide-item')[1].classList.add('active');
	document.getElementsByClassName('dot')[1].classList.add('active-dot');
})
dot[2].addEventListener('click', function() {
	for(var i = 0; i< arrImg.length; i++){
		document.getElementsByClassName('slide-item')[i].classList.remove('active');
			document.getElementsByClassName('dot')[i].classList.remove('active-dot');
		}
	document.getElementsByClassName('slide-item')[2].classList.add('active');
	document.getElementsByClassName('dot')[2].classList.add('active-dot');
})
dot[3].addEventListener('click', function() {
	for(var i = 0; i< arrImg.length; i++){
		document.getElementsByClassName('slide-item')[i].classList.remove('active');
			document.getElementsByClassName('dot')[i].classList.remove('active-dot');
		}
	document.getElementsByClassName('slide-item')[3].classList.add('active');
	document.getElementsByClassName('dot')[3].classList.add('active-dot');
})
dot[4].addEventListener('click', function() {
	for(var i = 0; i< arrImg.length; i++){
		document.getElementsByClassName('slide-item')[i].classList.remove('active');
			document.getElementsByClassName('dot')[i].classList.remove('active-dot');
		}
	document.getElementsByClassName('slide-item')[4].classList.add('active');
	document.getElementsByClassName('dot')[4].classList.add('active-dot');
})
dot[5].addEventListener('click', function() {
	for(var i = 0; i< arrImg.length; i++){
		document.getElementsByClassName('slide-item')[i].classList.remove('active');
			document.getElementsByClassName('dot')[i].classList.remove('active-dot');
		}
	document.getElementsByClassName('slide-item')[5].classList.add('active');
	document.getElementsByClassName('dot')[5].classList.add('active-dot');
})
dot[6].addEventListener('click', function() {
	for(var i = 0; i< arrImg.length; i++){
		document.getElementsByClassName('slide-item')[i].classList.remove('active');
			document.getElementsByClassName('dot')[i].classList.remove('active-dot');
		}
	document.getElementsByClassName('slide-item')[6].classList.add('active');
	document.getElementsByClassName('dot')[6].classList.add('active-dot');
})
dot[7].addEventListener('click', function() {
	for(var i = 0; i< arrImg.length; i++){
		document.getElementsByClassName('slide-item')[i].classList.remove('active');
			document.getElementsByClassName('dot')[i].classList.remove('active-dot');
		}
	document.getElementsByClassName('slide-item')[7].classList.add('active');
	document.getElementsByClassName('dot')[7].classList.add('active-dot');
})
dot[8].addEventListener('click', function() {
	for(var i = 0; i< arrImg.length; i++){
		document.getElementsByClassName('slide-item')[i].classList.remove('active');
			document.getElementsByClassName('dot')[i].classList.remove('active-dot');
		}
	document.getElementsByClassName('slide-item')[8].classList.add('active');
	document.getElementsByClassName('dot')[8].classList.add('active-dot');
})
dot[9].addEventListener('click', function() {
	for(var i = 0; i< arrImg.length; i++){
		document.getElementsByClassName('slide-item')[i].classList.remove('active');
			document.getElementsByClassName('dot')[i].classList.remove('active-dot');
		}
	document.getElementsByClassName('slide-item')[9].classList.add('active');
	document.getElementsByClassName('dot')[9].classList.add('active-dot');
})


