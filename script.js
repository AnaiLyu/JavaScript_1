"use strict";

//задание 1
for (var i = 0; i <= 10; i++) {
	if (i == 0) {
		console.log(i + ' – это ноль')
	} else if (i % 2) {
		console.log(i + ' – нечетное число')
	} else {
		console.log(i + ' – четное число')
	}
}

//задание 2
const post = {
	author: "John", //вывести этот текст
	postId: 23,
	commments : [
		{
			userId: 10,
			userName: "Alex",
			text: "lorem ipsum",
			rating: {
				likes: 10,
				dislikes: 2//вывести это число
			}
		},
		{
			userId: 5, //вывести это число
			userName: "Jane",
			text: "lorem ipsum 2", //вывести этот текст
			rating: {
				likes: 3,
				dislikes: 1
			}
		},
	]
}

console.log(post.author);
console.log(post.commments[0].rating.dislikes);
console.log(post.commments[1].userId);
console.log(post.commments[1].text);

//задание 3

const products = [
	{
		id: 3,
		price: 200,
	},
	{
		id: 4,
		price: 900,
	},
	{
		id: 1,
		price: 1000,
	},
];

const discount = products.map(function(num) {
	return num.price / 2;
});

console.log(discount);


//задание 4

const product = [
	{
		id: 3,
		price: 127,
		pfotos: [
			"1.jpg",
			"2.jpg",
		]
	},
	{
		id: 5,
		price: 499,
	},
	{
		id: 10,
		price: 26,
		pfotos: [
			"3.jpg",
		]
	},
	{
		id: 8,
		price: 78,
	},
];

const filterByPhoto = product.filter(function(img) {
	return img.pfotos
});

console.log(filterByPhoto);

const sortByPrice = product.sort(function(a, b) {
	return a.price - b.price;
});

console.log(sortByPrice);


//задание 6

let x = 'x';
for (let i = 0; i <= 20; i++) {
	console.log(x);
}





