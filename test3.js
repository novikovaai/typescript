"use strict";
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
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Delivery {
    constructor(date) {
    }
}
class HomeDelivery extends Delivery {
    constructor(address, date) {
        super(date);
    }
}
class StoreDelivery extends Delivery {
    constructor(storeId) {
        const date = new Date();
        super(date);
    }
}
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    deleteProductById(id) {
        this.products = this.products.filter((product) => product.id !== id);
    }
    countSum() {
        return this.products.reduce((sum, product) => sum + product.price, 0);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkout() {
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
cart.setDelivery(new HomeDelivery('', new Date()));
console.log(cart.countSum());
console.log(cart.checkout());
