class MyMap {

    bucketList: Array<Array<any>>;
    bucketListLength: number = 10;

    constructor() {

        this.bucketList = Array.from({ length: this.bucketListLength }, () => []);

    };


    getHash(key: any): number {
        const strKey = key.toString();
        let hash = 0;
        for (let i:number = 0; i < strKey.length; i++) {
           hash += strKey.charCodeAt(i)
        }
        return hash;
    }

    chooseBucket(key: any): number {
        return this.getHash(key) % this.bucketList.length + 1
    }

    add(key: any, value: any): MyMap {
        const bucket: number = this.chooseBucket(key);
        this.bucketList[bucket].push([key, value]);
        return this;
    }
    delete(key: any) {
        const bucket: number = this.chooseBucket(key);
        if (this.bucketList[bucket].length > 0){
            this.bucketList[bucket] = this.bucketList[bucket].filter(item => item[0] !== key);
        }

    }
    get(key: any): any {
        const bucket: number = this.chooseBucket(key);
        let value: any
        for (let element of this.bucketList[bucket]) {
            if (element[0] === key) {
                value = element[1];
                break
            }
        }
        return value
    }

    clear(): void {
        this.bucketList = Array.from({ length: this.bucketListLength }, () => []);
    }
}

let weatherMap = new MyMap();
weatherMap.add('London', 20);
weatherMap.add('Berlin', 25);
// Пример получения данных
console.log(weatherMap.get('London')); // Выведет 20
