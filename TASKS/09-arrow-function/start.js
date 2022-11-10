/** ЗАДАЧА 9 - Стрелочная функция
 *
 * 1. Объявите переменную и присвойте ей стрелочную функцию
 *
 * 2. У функции не должно быть параметров
 *
 * 3. Явно верните из функции строку "Привет, мир!"
 *
 * 4. Вызовите функцию и выведите результат в консоль
 *
 * 5. Перепишите функцию так, чтобы результат возвращался неявно
 */

const personOne = {
	name: 'Boby',
	age: 2
}

function increasePersonAge(person) {
	
	personOne.age += 1
	return person
}
increasePersonAge(personOne)

console.log(personOne.age)