/*input: nhập vào 3 số M N K từ bàn phím
output: tính tổng các số chia hết cho K trong khoảng từ N đến M*/
var n = prompt("mời bạn nhập số tự nhiên n:");
var m = prompt("mời bạn nhập số tự nhiên m:");
var k = prompt("mời bạn nhập số tự nhiên k:");

while (! isNaturalNumber (n) || ! isNaturalNumber (m) || ! isNaturalNumber (k)) {
	var n = prompt("mời bạn nhập lại số tự nhiên n:");
	var m = prompt("mời bạn nhập lại số tự nhiên m:");
	var k = prompt("mời bạn nhập lại số tự nhiên k:");
}
var s = 0;
for(var i = parseInt(n); i <= parseInt(m); i++){
	if(i % parseInt(k)==0){
		s = s + i ;
	}
}
document.write("tổng là:" + s);

function isNaturalNumber(n){
    n = n.toString(); // force the value incase it is not
    var n1 = Math.abs(n),
    	n2 = parseInt(n, 10);
    return !isNaN(n1) && n2 === n1 && n1.toString() === n; //boolean
}