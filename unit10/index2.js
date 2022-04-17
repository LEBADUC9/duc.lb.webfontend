var n = prompt ("mời bạn nhập số tự nhiên: ");
while (! isNaturalNumber (n)) {
	n = prompt ("mời bạn nhập lại một số tự nhiên: ");
}
var s = 0;
do{
	s = s + parseInt(n) ;
	n-- ;
}while (n > 0);
document.write("kết quả là: " + s);

function isNaturalNumber(n){
    n = n.toString(); // force the value incase it is not
    var n1 = Math.abs(n),
    	n2 = parseInt(n, 10);
    return !isNaN(n1) && n2 === n1 && n1.toString() === n; //boolean
}

