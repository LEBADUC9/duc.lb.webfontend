var a = 0 ;
var i = 1 ;
for (i = 1; i <= 100; i++ ){
	if(i % 3 == 0 || i % 7 == 0){
		a++;

	}
}
document.write("có"  + a +  "số chia hết cho 3 và 7 nằm trong đoạn từ 1 đến 100");

