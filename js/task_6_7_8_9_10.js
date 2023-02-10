// 6

/*
Синтаксис літерала об'єкта дозволяє створити один об'єкт. 
Проте, часто потрібно створити багато однотипних об'єктів з 
однаковим набором властивостей, але різними значеннями і методами для взаємодії 
з ними. Все це потрібно робити динамічно, під час виконання програми. 
З цією метою використовують класи - спеціальний синтаксис оголошення функції для створення об'єктів.

Оголошення класу починається з ключового слова class, після 
якого стоїть ім'я класу і фігурні дужки - його тіло. Класи прийнято
 називати з великої літери, а у назві відображати тип об'єкта (іменник), що створюється.

class User {
  // Тіло класу
}

const mango = new User();
console.log(mango); // {}

const poly = new User();
console.log(poly); // {}
Результат виклику new User() - це об'єкт, який називається
 екземпляром класу, тому що містить дані і поведінку, що описуються
  класом.
*/
// Використовуючи ключове слово class, оголоси клас Car з порожнім тілом.

// Оголошений клас Car
// Результат виклику new Car() - це порожній об 'єкт



// class Car {

// }




// ______________________________________________

// 7

/*
Для ініціалізації екземпляра в класі є метод constructor. Якщо він неоголошений,
 створюється конструктор за замовчуванням - порожня функція, яка не змінює екземпляр.

class User {
  // Синтаксис оголошення методу класу
  constructor(name, email) {
    // Ініціалізація властивостей екземпляра
    this.name = name;
    this.email = email;
  }
}

const mango = new User("Mango", "mango@mail.com");
console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

const poly = new User("Poly", "poly@mail.com");
console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }
Виклик класу з оператором new призводить до створення нового об'єкта 
і виклику конструктора в контексті цього об'єкта. Тобто this всередині 
конструктора буде посилатися на новостворений об'єкт. Це дозволяє додавати кожному 
об'єкту властивості з однаковими іменами, але різними значеннями.

Властивості name та email називаються публічними властивостями, тому що вони будуть
 власними властивостями об'єкта-екземпляра і до них можна буде отримати доступ, звернувшись 
 через крапку.
*/


// Додай класу Car метод constructor, який приймає три параметри:

//     brand - марка автомобіля.
// model - модель автомобіля.
// price - ціна автомобіля.
// Клас Car повинен створювати об 'єкт з однойменними властивостями brand, model і price,
// значеннями яких повинні бути передані аргументи під час його виклику з оператором new.

// Оголошений клас Car
// Клас Car має метод constructor
// В результаті виклику new Car("Audi", "Q3", 36000) утвориться об 'єкт { brand: "Audi", model: "Q3", price: 36000 }
// В результаті виклику new Car("BMW", "X5", 58900) утвориться об 'єкт { brand: "BMW", model: "X5", price: 58900 }
// В результаті виклику new Car("Nissan", "Murano", 31700) утвориться об 'єкт { brand: "Nissan", model: "Murano", price: 31700 }



// class Car {
//     // Change code below this line
//       constructor(brand, model, price) {
//           this.brand = brand;
//           this.model = model;
//           this.price = price;
//       }
//     // Change code above this line
//   }




// ______________________________________________


// 8

/*
Клас може приймати велику кількість вхідних даних для властивостей
 майбутнього об'єкта. Якщо параметрів багато (більше 2-х), то, як правило, 
 застосовують патерн «Об'єкт параметрів». Ідея цього патерну у тому, щоб передавати 
 як параметр один об'єкт з логічно іменованими властивостями. Значення властивостей такого об'єкта замінять набір аргументів.

class User {
  // Деструктуризуємо об'єкт
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
}

const mango = new User({
  name: "Mango",
  email: "mango@mail.com",
});
console.log(mango); // { name: "Mango", email: "mango@mail.com" }

const poly = new User({
  name: "Poly",
  email: "poly@mail.com",
});
console.log(poly); // { name: "Poly", email: "poly@mail.com" }
*/


// Виконай рефакторинг класу Car таким чином, щоб він приймав один
// параметр - об 'єкт з властивостями brand, model і price. Деструктуризуй об'
// єкт в сигнатурі(підписі)
// конструктора.

// Оголошений клас Car
// Клас Car має метод constructor
// В результаті виклику new Car({ brand: "Audi", model: "Q3", price: 36000 })
// утвориться об 'єкт { brand: "Audi", model: "Q3", price: 36000 }
// В результаті виклику new Car({ brand: "BMW", model: "X5", price: 58900 })
// утвориться об 'єкт { brand: "BMW", model: "X5", price: 58900 }
// В результаті виклику new Car({ brand: "Nissan", model: "Murano", price: 31700 })
// утвориться об 'єкт { brand: "Nissan", model: "Murano", price: 31700 }


// class Car {
//     // Change code below this line
//       constructor({ brand, model, price }) {
//       this.brand = brand;
//       this.model = model;
//       this.price = price;
//     }
//     // Change code above this line
//   }



// _______________________________________________



// 9

/*
Для роботи з властивостями майбутнього екземпляра використовуються
 методи класу. Методи - це просто функції, але з однією відмінністю - вони
  доступні екземпляру класу.

class User {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }

  // Метод getEmail
  getEmail() {
    return this.email;
  }

  // Метод changeEmail
  changeEmail(newEmail) {
    this.email = newEmail;
  }
}
*/

// Додай класу Car два методи.

// getPrice() - повертає значення властивості price з об 'єкта, який буде 
// його викликати.
// changePrice(newPrice) - оновлює значення властивості price в об 'єкта,
// який буде його викликати на newPrice.
// В класі Car оголошений метод getPrice
// Метод getPrice повертає значення властивості price екземпляра класу,
// який його викликає
// В класі Car оголошений метод changePrice
// Метод changePrice змінює значення властивості price екземпляра класу,
// який його викликає



// class Car {
//     constructor({ brand, model, price }) {
//       this.brand = brand;
//       this.model = model;
//       this.price = price;
//     }
//     // Change code below this line
//       getPrice() {
//           return this.price;
//       }

//       changePrice(newPrice) {
//           this.price = newPrice;
//       }
//     // Change code above this line
//   }



// ______________________________________________



// 10

// ЗАДАЧА: СКЛАД

// Напиши клас Storage, який буде створювати об 'єкти для управління складом товарів. Клас очікує 
// тільки один аргумент - початковий масив
// товарів, який записується у властивість items об 'єкта, що створюється.

// Оголоси наступні методи класу:

//     getItems() - повертає масив поточних товарів у властивості items об 'єкта, який викликає цей метод.
// addItem(newItem) - приймає новий товар newItem і додає його в масив товарів у властивості items
// об 'єкта, який викликає цей метод.
// removeItem(itemToRemove) - приймає товар itemToRemove і видаляє його з масиву товарів 
// у властивості items об 'єкта, який викликає цей метод.
// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності,
//  в якій твій код перевірятимуть тести.Будь ласка, нічого там не змінюй.

// Оголошений клас Storage
// В класі Storage оголошений метод getItems
// В класі Storage оголошений метод addItem
// В класі Storage оголошений метод removeItem
// Метод getItems повертає значення властивості items екземпляра класу, який його викликає
// Метод addItem змінює властивість items екземпляра класу, який його викликає
// Метод removeItem змінює властивість items екземпляра класу, який його викликає
// В результаті виклику new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значення змінної 
// storage - це об 'єкт
// Об 'єкт storage містить властивість items
// Перший виклик storage.getItems(), відразу після інціалізаціі екземпляра, 
// повертає масив["Nanitoids", "Prolonger", "Antigravitator"]
// Другий виклик, storage.getItems(), після виклику storage.addItem("Droid"),
//  повертає масив["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// Третій виклик storage.getItems(), після виклику storage.removeItem("Prolonger"),
//  повертає масив["Nanitoids", "Antigravitator", "Droid"]


class Storage {
    constructor(items) {
        this.items = items;
    }

    getItems() {
        return this.items;
    }

    addItem(newItem) {
        this.items.push(newItem);
    }

    removeItem(itemToRemove) {
        this.items.splice(this.items.findIndex(item => item === itemToRemove), 1);
    }
}

// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]