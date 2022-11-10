/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */
let arr = [1, 3, 4, 56, 7, 8, 54];

for (let i = 0; i < arr.length; i++) {
	setTimeout(() => {
		console.log(arr[i])
	}, 1000 * (i + 1));
}