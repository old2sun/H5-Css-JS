
let d = new Date();
let year = d.getFullYear();
let day = d.getDate();
let month = d.getMonth();


// 前一个、后一个
function sele() {

	year += 1;

	year -= 1;

	month += 1;

	month -= 1;
}




let dayNum = 0;
// 判断当前月有多少天
if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {

	dayNum = 31;

} else if (month == 4 || month == 6 || month == 9 || month == 11) {

	dayNum = 30;

} else if (month == 2 && year) {

	dayNum = 29;

} else {

	dayNum = 28;

}


// 判断闰年
if(year % 100 == 0 && year % 400 == 0  ) {
	

} else if (year % 100 != 0 && year % 4 == 0) {

}



console.log(year)












