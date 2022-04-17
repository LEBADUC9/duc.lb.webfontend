var fontSize = 16;
var text = document.getElementById('text')
var macDinh = document.getElementById('macDinh');
macDinh.addEventListener('click', function() {
	text.style.fontSize = 16 + 'px';
})
var tang = document.getElementById('tang');
tang.addEventListener('click', function() {
	fontSize = fontSize * 1.4;
	text.style.fontSize = fontSize + 'px';
})
var giam = document.getElementById('giam');
giam.addEventListener('click', function() {
	fontSize = fontSize * 0.6;
	text.style.fontSize = fontSize + 'px';
})