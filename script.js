"use strict";

// exercise 1

let a = 1, b = 1, c, d;

// пример 1
c = ++a;
alert(c); //ответ 2, потому что оператор инкремента в префиксной форме приорететнее орепарора присваивания, следовательно 1+1=2;

// пример 2
d = b++;
alert(d); //ответ 1, потому что сначала происходит присваивание 1 в d, а затем +1 к b;

// пример 3
c = (2 + ++a);
alert(c); //ответ 5, потому что произошло прибавление +1 к а, затем сложение и присваение a=2 (2+(2+1))=5

// пример 4
d = (2 + b++);
alert(d); //ответ 4, потому что произошло сложение b=2 2+2=4, а затем привабление +1 в b;

alert(a); //ответ 3, потому что в примере 1 и 3 было увеличение переменной +1, 1+1+1=3
alert(b); //ответ 3, потому что в примере 2 и 4 было увеличение переменной +1, 1+1+1=3


/*
в префиксной форме инкремент приорететней чем в постфиксной
во всех примерах где ++ используется слева от 
переменной сначала происходид прибавление +1, 
а затем происходит сложение или присваивание.
*/
/*
на практике видно что в префиксной 
форме сначала происходит +1 и затем остальные 
операции, вто время как в постфиксной форме, в 
примерах, происходит сложение и присвоение, и 
только потом прибавление +1
*/


// exercise 2

let a = 2;
let x = 1 + (a *= 2);
console.log(a); //ответ 4, потому что a=2 и умножение в скобках 2*2=4
console.log(x); //ответ 5, потому что сначала произошло действие в скобках 2*2=4, затем сложение 4+1=5, и присвоение х=5;

// exercise 3

let a = parseInt(prompt('введите целое число'));
let b = parseInt(prompt('введите целое число'));

if(a>=0 && b>=0){
	alert(a - b);
} else if(a<0 && b<0){
	alert(a * b);
} else if(a<0 || b<0){
	alert(a + b);
} else{
	alert('не введены целые числа');	
}

// exercise 4

let someNumber1 = parseInt(prompt('ввод первой цифры'));
let someNumber2 = parseInt(prompt('ввод второй цифры'));


function mult(numb1, numb2) {
	return numb1 * numb2;
}
let multResult = mult(someNumber1, someNumber2);
console.log(someNumber1 + ' * ' + someNumber2 + ' = ' + multResult);

function divis(numb1, numb2) {
	if (someNumber2 == 0) {
		return -0;
	}
	return numb1 / numb2;
}
let divisResult = divis(someNumber1, someNumber2);
console.log(someNumber1 + ' / ' + someNumber2 + ' = ' + divisResult);

function add(numb1, numb2) {
	return numb1 + numb2;
}
let addResult = add(someNumber1, someNumber2);
console.log(someNumber1 + ' + ' + someNumber2 + ' = ' + addResult);

function subtr(numb1, numb2) {
	return numb1 - numb2;
}
let subtrResult = subtr(someNumber1, someNumber2);
console.log(someNumber1 + ' - ' + someNumber2 + ' = ' + subtrResult);


// exercise 5

function mathOperation(arg1, arg2, operation) {
	switch (operation) {
		case "m":
			return mult(arg1, arg2);
		case "d":
			return divis(arg1, arg2);
		case "a":
			return add(arg1, arg2);
		case "s":
			return subtr(arg1, arg2);
	}
}
console.log(mathOperation(5, 4, 'm'));
console.log(mathOperation(5, 4, 'd'));
console.log(mathOperation(5, 4, 'a'));
console.log(mathOperation(5, 4, 's'));
