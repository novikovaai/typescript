// const skills : string[] = ['Dev', 'DevOps'];
//
// for (const skill of skills) {
//     // console.log(skill.toLowerCase())
// }
//
// const res = skills
//     .filter((s: string) => s !== 'DevOps')
//     .map(s => s + '! ')
//     .reduce((a, b) => a + b)
//
// // console.log(res)
//
// const skill : [number, string] = [1, 'Dev']
// const id = skill[0];
// const skillName = skill[1];
// skill.push('dsf');
// // console.log(skill)
// // console.log(skill.pop())

enum StatusCode {
    SUCCESS = 1,
    IN_PROCESS = 3,
    FAILED = 10

}
const res = {
    message: 'Платеж успешен',
    statusCode: 1
};

//1 - успех
//2 - в процессе
//3 - отклонен

if (res.statusCode === StatusCode.SUCCESS) {
    console.log('Успешно')
}