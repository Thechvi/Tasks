/** ЗАДАЧА 1 - Объявление переменной
 *
 * 1. Объявите переменную "myCountry" и присвойте ей значение -
 * строку с вашей страной
 *
 * 2. В дальнейшем не планируется присваивание нового значения этой переменной
 *
 * 3. Выведите значение переменной в консоль
 */

// до вызова функции
let menu = {
	width: 200,
	height: 300,
	title: "My menu"
};

function multiplyNumeric(obj) {
	for (let key in obj) {
		if (typeof obj[key] == 'number') {
			obj[key] *= 2
		}
	}

};
multiplyNumeric(menu);

console.log(menu)
