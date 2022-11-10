/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */


const car1 = {
	carBrand: 'Toyota',
	price: 10000,
	isAvailableForSale: true
};
const car2 = {
	carBrand: 'Mazda',
	price: 11000,
	isAvailableForSale: true
};
const car3 = {
	carBrand: 'Nissan',
	price: 12000,
	isAvailableForSale: true
};
const car4 = {
	carBrand: 'Dodge',
	price: 30000,
	isAvailableForSale: true
};

const typeCar = [car1, car2, car3];

console.table(typeCar)

