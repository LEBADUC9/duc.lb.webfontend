var a = document.getElementsByClassName('content__box')[0];
a.addEventListener('mouseover', function(){
	a.style.backgroundColor = "blue";
})
a.addEventListener('mouseout', function(){
	a.style.backgroundColor = "white";
})
var b = document.getElementsByClassName('content__box')[1];
b.addEventListener('mouseover', function(){
	b.style.backgroundColor = "blue";
})
b.addEventListener('mouseout', function(){
	b.style.backgroundColor = "white";
})
var c = document.getElementsByClassName('content__box')[2];
c.addEventListener('mouseover', function(){
	c.style.backgroundColor = "blue";
})
c.addEventListener('mouseout', function(){
	c.style.backgroundColor = "white";
})
var d = document.getElementsByClassName('content__box')[3];
d.addEventListener('mouseover', function(){
	d.style.backgroundColor = "blue";
})
d.addEventListener('mouseout', function(){
	d.style.backgroundColor = "white";
})
var e = document.getElementsByClassName('content__box')[4];
e.addEventListener('mouseover', function(){
	e.style.backgroundColor = "blue";
})
e.addEventListener('mouseout', function(){
	e.style.backgroundColor = "white";
})
var f = document.getElementsByClassName('content__box')[5];
f.addEventListener('mouseover', function(){
	f.style.backgroundColor = "blue";
})
f.addEventListener('mouseout', function(){
	f.style.backgroundColor = "white";
})
var g = document.getElementsByClassName('content__box')[6];
g.addEventListener('mouseover', function(){
	g.style.backgroundColor = "blue";
})
g.addEventListener('mouseout', function(){
	g.style.backgroundColor = "white";
})
var btnCheckAll = document.getElementById('checkAll');
btnCheckAll.addEventListener('click', function(){
	var inputCheck = document.getElementsByTagName('input');
	for(var i = 0; i < inputCheck.length; i++){
		inputCheck[i].checked = true;
	}
});
var btnUnCheckAll = document.getElementById('unCheckAll');
btnUnCheckAll.addEventListener('click', function(){
	var inputCheck = document.getElementsByTagName('input');
	for(var i = 0; i < inputCheck.length; i++){
		inputCheck[i].checked = false;
	}
});