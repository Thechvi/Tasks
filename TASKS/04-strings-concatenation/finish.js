/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

const myName = 'Vitali';

const myLastName = 'Chabatar';

const myProfession = 'Enginеer';

const myCase = 'My name is ' + myName + ' ' + myLastName + ' and ' + 'I am' + ' ' + myProfession;

console.log(myCase);

const myCase2 = `My name is ${myName} ${myLastName} and I am ${myProfession}`;

console.log(myCase2);
