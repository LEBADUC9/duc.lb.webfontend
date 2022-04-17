function countdown(){
	var now = new Date();
	var future = Date.parse('Jan 22, 2023 00:00:00')

	var dif = future - now;
	console.log(future - now);
	var day = Math.floor(dif / (24*60*60*1000));
	var hour = Math.floor(dif / (60*60*1000));
	var min = Math.floor(dif / (60*1000));
	var sec = Math.floor(dif / (1000));

	var d = day;
	var h = hour - d * 24;
	var m = min - h * 60 - d *24 *60;
	var s = sec - m * 60 - h *60 *60 - d *24 *60 *60;

	document.getElementById('d').innerHTML = d + 'Ngày';
	document.getElementById('h').innerHTML = h + 'Giờ';
	document.getElementById('m').innerHTML = m + 'Phút';
	document.getElementById('s').innerHTML = s + 'Giây';
}

setInterval(countdown, 1000)