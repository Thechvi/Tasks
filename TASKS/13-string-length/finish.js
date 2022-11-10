/** ЗАДАЧА 13 - Длина строки
 *
 * 1. Создайте переменную и присвойте ей любую строку
 *
 * 2. Виведите в консоль длину этой строки
 */

const myString = 'Learning JS'
console.log(myString.length) // solution example

// const x = function(value, multiplier = 1) {
// 	return value * multiplier
// };

// console.log(x(10, 5))
const newPost = (post, addedAt = Date()) => {
	return {
		...post,
		addedAt
	}
}

const firstPost = {
	id: 1,
	author: 'Vitali'
}

const myPost = newPost(firstPost)
console.table(myPost)