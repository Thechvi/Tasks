/** ЗАДАЧА 36 - Случайные числа
 *
 * 1. Cгенерируйте новое 4-значное случайное число.
 * Диапазон для случайного числа 1000 - 9999.
 *
 * 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
 *
 * 3. Если совпадает, вам нужно сгенерировать новое 4-значное число.
 *
 * 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.
 *
 * ВАЖНО: В решении задачи используйте функции:
 *  - для генерации случайного числа в заданном диапазоне
 *  - для добавления случайного числа в массив с возвратом измененного массива
 */

const MIN = 0
const MAX = 10

const myNumber = [2, 6, 7, 9, 11]
const randomNumber = (MIN, MAX) => {

	return Math.floor(Math.random() * (MAX - MIN + 1) + MIN);

};


const newRandomNumber = (arr, MIN, MAX) => {
	const x = randomNumber(MIN, MAX);
	console.log(x);

	for (let i = 0; i < arr.length; i++) {

		if (x === arr[i]) {

			console.log(`This number ${x} is already in the array ${arr}`);

		} else {
			updatedArr = [...arr].push(x);

			return updatedArr;
		}

	}
	return x
}
const result = newRandomNumber(myNumber, MIN, MAX)


console.log(result);