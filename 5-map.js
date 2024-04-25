"use strict";
class MyMap {
    constructor() {
        this.bucketListLength = 10;
        this.bucketList = Array.from({ length: this.bucketListLength }, () => []);
    }
    ;
    getHash(key) {
        const strKey = key.toString();
        let hash = 0;
        for (let i = 0; i < strKey.length; i++) {
            hash += strKey.charCodeAt(i);
        }
        return hash;
    }
    chooseBucket(key) {
        return this.getHash(key) % this.bucketList.length + 1;
    }
    add(key, value) {
        const bucket = this.chooseBucket(key);
        this.bucketList[bucket].push([key, value]);
        return this;
    }
    delete(key) {
        const bucket = this.chooseBucket(key);
        if (this.bucketList[bucket].length > 0) {
            this.bucketList[bucket] = this.bucketList[bucket].filter(item => item[0] !== key);
        }
    }
    get(key) {
        const bucket = this.chooseBucket(key);
        let value;
        for (let element of this.bucketList[bucket]) {
            if (element[0] === key) {
                value = element[1];
                break;
            }
        }
        return value;
    }
    clear() {
        this.bucketList = Array.from({ length: this.bucketListLength }, () => []);
    }
}
let weatherMap = new MyMap();
weatherMap.add('London', 20);
weatherMap.add('Berlin', 25);
// Пример получения данных
console.log(weatherMap.get('London')); // Выведет 20
