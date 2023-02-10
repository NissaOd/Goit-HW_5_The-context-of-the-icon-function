// 11
// ЗАДАЧА: КОНСТРУКТОР РЯДКІВ

/*


class StringBuilder {
    constructor(initialValue) {
        this.value = initialValue;
    }

    getValue() {
        return this.value;
    }

    padEnd(str) {
        this.value = this.value + str;
    }

    padStart(str) {
        this.value = str + this.value;
    }

    padBoth(str) {
        this.value = str + this.value + str;
    }
}
// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="


*/



// __________________________________________





// 12
/*
Інкапсуляція — це концепція, що дозволяє приховати те, як влаштований клас.
 Користувач класу повинен отримувати доступ тільки до публічного інтерфейсу - набору публічних 
 властивостей і методів класу. Решта методів і властивостей (не публічних) повинні бути недоступні.

В класах інкапсуляція реалізується приватними властивостями, доступ до яких можна 
отримати тільки всередині класу.

Припустимо, що пошта користувача повинна бути недоступною для прямої зміни зовні, 
тобто - приватною. Додаючи до імені властивості символ #, ми робимо її приватною.
 Оголошення приватної властивості до ініціалізації в конструкторі - обов'язкове.

class User {
  // Необов'язкове оголошення публічних властивостей
  name;
  // Обов'язкове оголошення приватних властивостей
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  getEmail() {
    return this.#email;
  }

  changeEmail(newEmail) {
    this.#email = newEmail;
  }
}

const mango = new User({
  name: "Mango",
  email: "mango@mail.com",
});
mango.changeEmail("mango@supermail.com");
console.log(mango.getEmail()); // mango@supermail.com
console.log(mango.#email); // Виникне помилка, це приватна властивість
Методи класу також можуть бути приватними, тобто доступні тільки у тілі класу. 
Для цього, перед їхнім ім'ям необхідно поставити символ #.
*/

// Виконай рефакторинг класу Car таким чином, щоб властивість brand була приватною,
// і додай два методи для публічного інтерфейсу, для читання і зміни цієї властивості.

// getBrand() - повертає значення приватної властивості brand.
// changeBrand(newBrand) - змінює значення приватної властивості brand на newBrand.
// Оголошений клас Car
// Властивість brand в класі Car оголошена приватною
// Конструктор класу приймає об 'єкт з властивостями brand, model і price
// В результаті виклику new Car({ brand: "Audi", model: "Q3", price: 36000 })
// утвориться об 'єкт { model: "Q3", price: 36000 }
// В результаті виклику new Car({ brand: "bmw", model: "X5", price: 58900 })
// утвориться об 'єкт { model: "X5", price: 58900 }
// В результаті виклику new Car({ brand: "Nissan", model: "Murano", price: 31700 })
// утвориться об 'єкт { model: "Murano", price: 31700 }
// В екземпляра відсутня публічна властивість brand
// Метод getBrand() повертає значення приватної властивості brand.
// Метод changeBrand("Honda") змінює значення приватної властивості brand на "Honda"


// class Car {
//     // Change code below this line
//       #brand;

//       constructor({ brand, model, price }) {
//           this.#brand = brand;
//           this.model = model;
//           this.price = price;
//       }

//       getBrand() {
//           return this.#brand;
//       }

//       changeBrand(newBrand) {
//           this.#brand = newBrand;
//       }
//     // Change code above this line
//   }




// __________________________________________




// 13

// ЗАДАЧА: СКЛАД 2.0

// Виконай рефакторинг класу Storage, зробивши властивість items приватною.

// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, 
// в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// Оголошений клас Storage
// Об'єкт storage не містить властивості items
// В класі Storage оголошений метод getItems
// В класі Storage оголошений метод addItem
// В класі Storage оголошений метод removeItem
// Властивість items в класі Storage оголошена приватною
// Конструктор класу приймає властивість items
// В результаті виклику new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) 
// значення змінної storage - це об'єкт
// Перший виклик storage.getItems(), відразу після ініціалізації екземпляра,
//  повертає масив ["Nanitoids", "Prolonger", "Antigravitator"]
// Другий виклик, storage.getItems(), після виклику storage.addItem("Droid"),
//  повертає масив ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// Третій виклик storage.getItems(), після виклику storage.removeItem("Prolonger"),
//  повертає масив ["Nanitoids", "Antigravitator", "Droid"]

// class Storage {
//     // Change code below this line
//       #items;

//       constructor(items) {
//           this.#items = items;
//       }

//       getItems() {
//           return this.#items;
//       }

//       addItem(newItem) {
//           this.#items.push(newItem);
//       }

//       removeItem(itemToRemove) {
//           this.#items = this.#items.filter(item => item !== itemToRemove);
//       }
//   }
//   // Change code above this line
//   const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
//   storage.addItem("Droid");
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
//   storage.removeItem("Prolonger");
//   console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]



// __________________________________________




// 14
// ЗАДАЧА: КОНСТРУКТОР РЯДКІВ 2.0
/*
Виконай рефакторинг класу StringBuilder, зробивши властивість value приватною.

Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

Оголошений клас StringBuilder

Властивість value в класі StringBuilder оголошена приватною

В класі StringBuilder оголошений метод getValue

В класі StringBuilder оголошений метод padEnd

В класі StringBuilder оголошений метод padStart

В класі StringBuilder оголошений метод padBoth

В результаті виклику new StringBuilder('.') значення змінної builder - це об'єкт

Об'єкт builder не містить властивості value

Перший виклик builder.getValue(), відразу після ініціалізації екземпляра, повертає рядок .

Другий виклик builder.getValue(), після виклику builder.padStart("^"), повертає рядок ^.

Третій виклик builder.getValue(), після виклику builder.padEnd("^"), повертає рядок ^.^

Четвертий виклик builder.getValue(), після виклику builder.padBoth("="), повертає рядок =^.^=

*/

/*
class StringBuilder {
  // Change code below this line
    #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value += str;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
*/

// __________________________________________



// 15

/*
Гетери та сетери — це коротший синтаксис оголошення методів для взаємодії з властивостями. Геттер і сетер імітують звичайну публічну властивість класу, але дозволяють змінювати інші властивості зручнішим способом. Геттер виконується при спробі отримати значення властивості, а сетер - при спробі його змінити.

Гетери та сетери доречно використовувати для простих операцій читання і зміни значення властивостей, особливо приватних, як їх публічний інтерфейс. Для роботи з властивістю, яка зберігає масив або об'єкт, вони не підійдуть.

class User {
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  // Геттер email
  get email() {
    return this.#email;
  }

  // Сеттер email
  set email(newEmail) {
    this.#email = newEmail;
  }
}
Ми оголосили гетер і сетер email, поставивши перед ім'ям властивості ключові
 слова get і set. Всередині цих методів ми або повертаємо значення приватної властивості #email, 
 або змінюємо її значення. Геттер і сетер застосовуються в парі та повинні називатися однаково.

const mango = new User({ name: "Mango", email: "mango@mail.com" });
console.log(mango.email); // mango@mail.com
mango.email = "mango@supermail.com";
console.log(mango.email); // mango@supermail.com
Звертаючись до mango.email, викликається гетер get email() {...} і виконується його код. 
При спробі запису mango.email = "mango@supermail.com" викликається сетер
 set email(newEmail) {...} і рядок "mango@supermail.com" буде значенням параметра newEmail.

Перевага в тому, що це методи, а значить, під час запису можна виконати додатковий код,
 наприклад, з будь-якими перевірками, на відміну від виконання цієї ж операції безпосередньо 
 з властивістю.

set email(newEmail) {
  if(newEmail === "") {
    console.error("Помилка! Пошта не може бути порожнім рядком!");
    return;
  }

  this.#email = newEmail;
}
*/

// Виконай рефакторинг класу Car. Зроби властивості model і price приватними, а також #brand. 
// Стандартизуй публічний інтерфейс класу, замінивши вже оголошені методи на гетери та сетери brand,
//  model і price, для взаємодії з приватними властивостями.

// Оголошений клас Car
// В класі Car оголошена приватна властивість brand
// В класі Car оголошена приватна властивість model
// В класі Car оголошена приватна властивість price
// Конструктор класу приймає об'єкт з властивостями brand, model і price
// В класі Car оголошений гетер brand
// В класі Car оголошений сетер brand
// В класі Car оголошений гетер model
// В класі Car оголошений сетер model
// В класі Car оголошений гетер price
// В класі Car оголошений сетер price


class Car {
    // Change code below this line
    #
    brand;#
    model;#
    price;

    constructor({ brand, model, price }) {
        this.#brand = brand;
        this.#model = model;
        this.#price = price;
    }

    get brand() {
        return this.#brand;
    }

    set brand(newBrand) {
        this.#brand = newBrand;
    }

    get model() {
        return this.#model;
    }

    set model(newModel) {
        this.#model = newModel;
    }

    get price() {
        return this.#price;
    }

    set price(newPrice) {
            this.#price = newPrice;
        }
        // Change code above this line
}