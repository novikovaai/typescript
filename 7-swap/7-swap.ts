// Цель задания: Написать функцию, которая меняет
// местами ключи и значения в переданном объекте.
// Требования к объекту:
// Имеет тип Record<string, number>
// предполагаемый тип, где ключи - строки, а значения - числа),
// соответственно, все ключи должны быть строками, а значения - числами.
// Объект не должен содержать смешанные данные (например, строки в значениях ключей).
// Задача функции://
// Дан объект, например, { A: 1, B: 2 }.
// Функция должна возвращать объект, где ключи и значения поменяны местами,
// то есть для данного примера результат будет { 1: 'A', 2: 'B' }.

function swapKeysAndValues <T extends Record<string, number>> (Data: T): Record<number, string> {
    const result: Record<number, string> = {}
    Object.entries(Data).forEach(([key, value]) => {
        result[value] = key
    })
    return result
}

const obj = { A: 1, B: 2 }
const newObject = swapKeysAndValues(obj)

