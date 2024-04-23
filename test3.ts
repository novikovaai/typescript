/*
Необходимо сделать корзину (Cart) на сайте,

которая имееет список продуктов (Product), добавленных в корзину

и переметры доставки (Delivery). Для Cart реализовать методы:

Добавить продукт в корзину
Удалить продукт из корзины по ID
Посчитать стоимость товаров в корзине
Задать доставку
Checkout - вернуть что всё ок, если есть продукты и параметры доставки
Product: id, название и цена

Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)
 */

class Product {
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id
        this.name = name
        this.price = price
    }}

class Delivery {
    constructor(date: Date) {
    }
}

class HomeDelivery extends Delivery {
    constructor(address: string, date: Date) {
        super(date);
    }
}

class StoreDelivery extends Delivery {
    constructor(storeId: number) {
        const date: Date = new Date();
        super(date);
    }
}

type DeliveryOptions = HomeDelivery | StoreDelivery

class Cart {
    private products: Product[] = [];
    private delivery: DeliveryOptions;

    public addProduct(product: Product): void {
        this.products.push(product);
    }

    public deleteProductById(id: number): void {
        this.products = this.products.filter((product: Product) => product.id !== id);
    }

    public countSum(): number {
        return this.products.reduce((sum: number, product: Product) => sum + product.price, 0);
    }

    public setDelivery(delivery: DeliveryOptions): void {
        this.delivery = delivery;
    }

    public checkout() {
        if (this.products.length === 0) {
            throw new Error("No products were found");
        }
        if (!this.delivery) {
            throw new Error("Не выбран способ доставки");
        }
        return { success: true };
    }

}

const cart = new Cart();
cart.addProduct(new Product(1, 'Печенье', 10));
cart.addProduct(new Product(2, 'Шоколад', 12));
cart.addProduct(new Product(3, 'Торт', 20));
cart.deleteProductById(1);
cart.setDelivery(new HomeDelivery('', new Date()))
console.log(cart.countSum());
console.log(cart.checkout());
