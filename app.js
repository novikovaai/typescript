"use strict";
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
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 3] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 10] = "FAILED";
})(StatusCode || (StatusCode = {}));
const res = {
    message: 'Платеж успешен',
    statusCode: 1
};
//1 - успех
//2 - в процессе
//3 - отклонен
if (res.statusCode === StatusCode.SUCCESS) {
    console.log('Успешно');
}
