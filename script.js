/*
let num1 = +prompt('сумма в грн');
let euro = 30;
let dollar = 26;

let sumE = num1 / euro;
let sumD = num1 / dollar;
alert('сумма euro ' + sumE.toFixed(2));
alert('сумма dollar ' + sumD.toFixed(2));
*/


/*
let currentAnswer = 0;

let userAnswer = prompt('зимой и летом одним цветом? \nвведите ответ').toLowerCase();
if (userAnswer == 'елка'){
	alert('правельный ответ')
	currentAnswer++;
}

userAnswer = prompt('да? \nвведите ответ').toLowerCase();
if (userAnswer == 'да'){
	alert('правельный ответ')
	currentAnswer++;
}

userAnswer = prompt('нет? \nвведите ответ').toLowerCase();
if (userAnswer == 'нет'){
	alert('правельный ответ')
	currentAnswer++;
}

alert('правельных ответов ' + currentAnswer)
*/

/*
let count = +prompt('количество повторений');
for (var i = 1; i <= count; i++) {
	console.log('привет ' + i);
}
*/

let answer = parseInt(Math.random() * 100);
console.log(answer);
let count = 0;

while (true) {
	let userAnswer = parseInt(prompt('vvod tselogo chisla, \ndlia vihods luybaia bykva.'));
	if (answer == userAnswer) {
		alert('Congrats!! \nygadano c ' + count + ' popitki');
		break;
	} else if(answer < userAnswer) {
		alert('menshe');
		count++;
	} else if(answer > userAnswer) {
		alert('bolshe');
		count++;
	} else if (isNaN(userAnswer)){
		alert('ne korektnii vvod chisla ili zhelanie viiti');
		break;
	}
}























































