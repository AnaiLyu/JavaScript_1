  // exercise 1 
let tC = +prompt('Enter the temperature by Celsius and get converted to temperature by Fahrenheit');
let tF = tC * (9/5) + 32;
alert('You entered the temperature by Celsius ' + tC + ', and when translated to Fahrenheit is ' + tF);

// exercise 2
let name = 'Василий';
let admin = name;
alert('Привет, ' + admin + '!');

// exercise 3
console.log(10 + 10 + "10"); //было произведено сложение первых двух чисел и их склеивание со строкой
console.log(10 + "10" + 10); //строка разделила собой возможность сложения чисел, поэтому все сложилось как три строки
console.log(10 + 10 + +"10"); //унарный плюс перед строкой превратил ее в число, далее произошло обычное арифметическое сложение
console.log(10 / -""); //унарный минус перевел пустую строку в минус ноль (-0), и при делении на ноль получаем -Infinity
console.log(10 / +"2,5"); //в строке указана запятая вместо точки, что не позволило превратить строку в число и произвести деление

// exercise 4
let mode = "normal"; //корректное имя переменной
let my_valu3 = 102; //корректное имя переменной
let 3my_value3 = "102"; //имя переменной не может начинаться с цифр
let __hello__ = "world"; //корректное имя переменной
let $$$ = "money"; //корректное имя переменной, но лучше не начинать со знака доллара, так как такие именя резервируются для библиотек
let !0_world = true; //имя переменной не может содержать какие либо символы кроме $ ; _ ; цифр и букв
