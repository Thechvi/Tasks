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

const messages = ["Путин", "полное", "хуйло", "русский", "военный корабль", "иди", "на хуй"]

for (let i = 0; i < messages.length; i++) {
	setTimeout(() => {console.log(messages[i]) }, 1000 * (i + 1))
}





