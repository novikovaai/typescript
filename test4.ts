/*
Необходимо реализовать абстрактный класс Logger с 2-мя методами
абстрактным - log(message): void и printDate - выводящий в log дату.

К нему необходимо сделать реальный класс, который бы имел метод:
logWithDate,выводящий сначала дату, а потом заданное сообщение

*/

abstract class Logger {
    abstract log(message: string): void;

    printDate (date: Date): void {
        this.log(date.toLocaleDateString("ru-RU", {}));
    }

}

class LoggerNotAbstract extends Logger {
    log(message: string): void {
        console.log(message);
    };

    logWithDate(message: string) {
        this.printDate(new Date())
        this.log(message);
    }

}

const test = new LoggerNotAbstract();

test.logWithDate('Сообщение');