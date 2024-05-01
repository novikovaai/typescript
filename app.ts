//еобходимо написать функцию сортировки любых//
// объектов, которые имеют id по убыванию и по возрастанию

interface objectsWithId {
    id: number
}



function sortObjectsById <T extends objectsWithId> (arrayOfObjects: T[], SortOrder: 'desc' | 'asc' = 'asc' ): T[] {
    if (SortOrder === 'desc') {
        return arrayOfObjects.sort((a, b) => b.id - a.id)
    } else
        return arrayOfObjects.sort((a, b) => a.id - b.id)
}

const data = [
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Надя' },
];

console.log(sortObjectsById(data))
console.log(sortObjectsById(data, 'desc'))


// const num: Array<number> = [0, 1, 2, 3, 4, 5];
// async function test1() {
//     const a = await new Promise<number>((resolve, reject) => {
//         resolve(1);
//     })
// }
//
// const check: Record<string, boolean> = {
//     drive: true,
//     kpp: false
// }

// function toString1<T>(something: T): string | undefined {
//     if (something) {
//         return something.toString();
//     } else
//         return undefined;
// }
//
// console.log(toString1([[1, 2, 3, 4]]))