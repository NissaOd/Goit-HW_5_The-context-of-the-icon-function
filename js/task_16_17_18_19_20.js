// 16
/*
Крім публічних і приватних властивостей майбутнього екземпляра, в класі можна оголосити
 його власні властивості, доступні тільки класові, але не його екземплярам - статичні 
 властивості (static). Вони корисні для зберігання інформації, що стосується класу.

Додамо класу користувача приватну властивість role - його роль, що визначає набір прав, 
наприклад, адміністратор, редактор, звичайний користувач тощо. Можливі ролі користувачів 
будемо зберігати як статичну властивість Roles - об'єкт з властивостями.

Статичні властивості оголошуються в тілі класу. Перед ім'ям властивості додається
 ключове слово static.

class User {
  // Оголошення та ініціалізація статичної властивості
  static Roles = {
    ADMIN: "admin",
    EDITOR: "editor",
  };

  #email;
  #role;

  constructor({ email, role }) {
    this.#email = email;
    this.#role = role;
  }

  get role() {
    return this.#role;
  }

  set role(newRole) {
    this.#role = newRole;
  }
}

const mango = new User({
  email: "mango@mail.com",
  role: User.Roles.ADMIN,
});

console.log(mango.Roles); // undefined
console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

console.log(mango.role); // "admin"
mango.role = User.Roles.EDITOR;
console.log(mango.role); // "editor"
Статичні властивості також можуть бути приватними, тобто доступними тільки всередині класу.
 Для цього ім'я властивості повинно починатися з символу #, так само, як приватні властивості. 
 Звернення до приватної статичної властивості за межами тіла класу викличе помилку.
*/

/*
Виконай рефакторинг класу Car.Додай публічну статичну властивість MAX_PRICE зі
значенням 50000 - максимально
допустима ціна автомобіля.

Додай сетеру price перевірку значення параметра newPrice, що передається.
Якщо воно більше за MAX_PRICE, сеттер нічого не робить, а якщо менше або дорівнює,
то перезаписує ціну автомобіля.

Оголошений клас Car
Клас Car містить статичну властивість MAX_PRICE
Значення статичної властивості MAX_PRICE - це число 50000
Екземпляр не містить властивості MAX_PRICE
В класі Car оголошений гетер price
В класі Car оголошений сетер price
Виклик сетера price в екземпляра класу, зі значенням аргументу меншим
за значення MAX_PRICE, змінює властивість# price
Виклик сетера price в екземпляра класу, зі значенням аргументу більшим
за значення MAX_PRICE, не змінює властивість# price


class Car {
    // Change code below this line
      #price;
      static MAX_PRICE = 50000;
  
    constructor({ price }) {
      this.#price = price;
    }
  
    get price() {
      return this.#price;
    }
  
      set price(newPrice) {
          if (newPrice <= Car.MAX_PRICE) {
              this.#price = newPrice;
          }
    }
    // Change code above this line
  }
  
  const audi = new Car({ price: 35000 });
  console.log(audi.price); // 35000
  
  audi.price = 49000;
  console.log(audi.price); // 49000
  
  audi.price = 51000;
  console.log(audi.price); // 49000

*/
// ______________________________________________________




// 17

/*
В класі можна оголосити не тільки методи майбутнього екземпляра, а також методи,
 доступні тільки класу - статичні методи, які можуть бути як публічні, так і приватні. 
 Синтаксис оголошення аналогічний статичним властивостям, за винятком того, 
 що значенням буде метод.

class User {
  static #takenEmails = [];

  static isEmailTaken(email) {
    return User.#takenEmails.includes(email);
  }

  #email;

  constructor({ email }) {
    this.#email = email;
    User.#takenEmails.push(email);
  }
}

const mango = new User({ email: "mango@mail.com" });

console.log(User.isEmailTaken("poly@mail.com"));
console.log(User.isEmailTaken("mango@mail.com"));
Особливість статичних методів полягає у тому, що під час їх виклику 
ключове слово this посилається на сам клас. Це означає, що статичний метод
 може отримати доступ до статичних властивостей класу, але не до властивостей 
 екземпляра. Логічно, тому що статичні методи викликає сам клас, а не його екземпляри
*/

// Додай класу Car публічний статичний метод checkPrice (price), що приймає ціну 
// автомобіля. Метод повинен порівняти значення параметра price і приватної статичного
//  властивості MAX_PRICE.

// Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок 
// "Error! Price exceeds the maximum".
// В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits".
// Під оголошенням класу ми додали ініціалізацію екземпляра і виклики методів,
//  щоб показати, як буде використовуватися метод checkPrice(price).

// Оголошений клас Car
// Клас Car містить статичний метод checkPrice(price)
// Виклик Car.checkPrice(36000) повертає рядок "Success! Price is within acceptable limits"
// Виклик Car.checkPrice(18000) повертає рядок "Success! Price is within acceptable limits"
// Виклик Car.checkPrice(64000) повертає рядок "Error! Price exceeds the maximum"
// Виклик Car.checkPrice(57000) повертає рядок "Error! Price exceeds the maximum"


// class Car {
//     static #MAX_PRICE = 50000;
//     // Change code below this line
//       static checkPrice(price) {
//           return price > Car.#MAX_PRICE
//               ? "Error! Price exceeds the maximum"
//               : "Success! Price is within acceptable limits";
//       }
//     // Change code above this line
//     constructor({ price }) {
//       this.price = price;
//     }
//   }

//   const audi = new Car({ price: 36000 });
//   const bmw = new Car({ price: 64000 });

//   console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
//   console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// ______________________________________________________




// 18

/*
Ключове слово extends дозволяє реалізувати наслідування класів, коли один клас
 (дочірній, похідний) наслідує властивості та методи іншого класу (батьківського).

class Child extends Parent {
  // ...
}
У виразі class Child extends Parent дочірній клас Child наслідує (розширює) від
 батьківського класу Parent. Це означає, що ми можемо оголосити базовий клас, 
 який зберігає загальні характеристики і методи для групи похідних класів, які 
 наслідують властивості і методи батьківського, але також додають свої унікальні.

Наприклад, у застосунку є користувачі з різними ролями — адміністратор, копірайтер,
контент менеджер тощо. У кожного типу користувача є набір загальних характеристик, 
наприклад, пошта і пароль, але також є й унікальні.

Створивши незалежні класи для кожного типу користувача, ми отримаємо дублювання
 загальних властивостей і методів, і, якщо необхідно змінити, наприклад, назву
  властивості, доведеться проходити по усіх класах, а це незручно і вимагає багато часу.

Замість цього, можна створити загальний клас User, який буде зберігати набір 
загальних властивостей і методів, після чого, створити класи для кожного типу
 користувача, які наслідують цей набір від класу User. За потреби змінити щось спільне,
  достатньо буде змінити тільки код класу User.

class User {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class ContentEditor extends User {
  // Тіло класу ContentEditor
}

const editor = new ContentEditor("mango@mail.com");
console.log(editor); // { email: "mango@mail.com" }
console.log(editor.email); // "mango@mail.com"
Клас ContentEditor наслідує від класу User його конструктор, гетер і сетер email,
 а також однойменну публічну властивість. Важливо пам'ятати, що приватні властивості
  і методи батьківського класу не наслідуються дочірнім класом.
*/

// У застосунку потрібен адміністратор з можливістю додавати пошти користувачів у чорний список.

// Оголоси клас Admin, який наслідує від класу User
// Додай класу Admin публічну статичну властивість AccessLevel (рівень доступу),
//  значення якої — це об'єкт {BASIC: "basic", SUPERUSER: "superuser"}
// Оголошений клас Admin
// Клас Admin наслідує від класу User
// Клас Admin містить публічну статичну властивість AccessLevel
// Звернення до Admin.AccessLevel.BASIC повертає рядок "basic"
// Звернення до Admin.AccessLevel.SUPERUSER повертає рядок "superuser"


// class User {
//     constructor(email) {
//       this.email = email;
//     }

//     get email() {
//       return this.email;
//     }

//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   // Change code below this line
//   class Admin extends User {
//       static AccessLevel = {
//           BASIC: "basic",
//           SUPERUSER: "superuser",
//       }
//   }

// ______________________________________________________


// 19

/*
Насамперед в конструкторі дочірнього класу необхідно викликати спеціальну 
функцію super(аргументи) - це псевдонім конструктора батьківського класу. 
В іншому випадку, при спробі звернутися до this в конструкторі дочірнього класу, 
виникне помилка. Під час виклику конструктора батьківського класу передаємо необхідні 
йому аргументи для ініціалізації властивостей.

class User {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class ContentEditor extends User {
  constructor({ email, posts }) {
    // Виклик конструктора батьківського класу User
    super(email);
    this.posts = posts;
  }
}

const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
console.log(editor); // { email: 'mango@mail.com', posts: [] }
console.log(editor.email); // 'mango@mail.com'
*/

// Додай класу Admin метод constructor, який приймає один параметр - об'єкт налаштувань 
// з двома властивостями email і accessLevel. Додай класу Admin публічну властивість accessLevel,
//  значення якої буде передаватися під час виклику конструктора.

// Щоб показати, як буде використовуватися клас Admin, ми додали ініціалізацію
//  екземпляра під оголошенням класу.

// Оголошений клас Admin
// Клас Admin наслідує від класу User
// Клас Admin містить публічну статичну властивість AccessLevel
// Клас Admin містить метод constructor з параметром у вигляді об'єкта {email, accessLevel}
// В класі Admin в конструкторі для властивості email використовується
//  звернення до конструктора батьківського класу
// Звернення до Admin.AccessLevel.BASIC повертає рядок "basic"
// Звернення до Admin.AccessLevel.SUPERUSER повертає рядок "superuser"

/*
class User {
    email;
  
    constructor(email) {
      this.email = email;
    }
  
    get email() {
      return this.email;
    }
  
    set email(newEmail) {
      this.email = newEmail;
    }
  }
  
  class Admin extends User {
    // Change code below this line
      constructor({ email, accessLevel }) {
          super(email);
          this.accessLevel = accessLevel;
      }
  
    static AccessLevel = {
      BASIC: "basic",
      SUPERUSER: "superuser",
    };
  
    // Change code above this line
  }
  
  const mango = new Admin({
    email: "mango@mail.com",
    accessLevel: Admin.AccessLevel.SUPERUSER,
  });
  
  console.log(mango.email); // "mango@mail.com"
  console.log(mango.accessLevel); // "superuser"

*/

// ______________________________________________________


// 20

/*
В дочірньому класі можна оголошувати методи, які будуть доступні тільки його екземплярам.

// Уявімо, що вище є оголошення класу User

class ContentEditor extends User {
  constructor({ email, posts }) {
    super(email);
    this.posts = posts;
  }

  addPost(post) {
    this.posts.push(post);
  }
}

const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
console.log(editor); // { email: 'mango@mail.com', posts: [] }
console.log(editor.email); // 'mango@mail.com'
editor.addPost("post-1");
console.log(editor.posts); // ['post-1']
*/

/*
Додай класу Admin наступні властивості і методи.

Публічну властивість blacklistedEmails для зберігання чорного списку поштових 
адрес користувачів. Значення за замовчуванням — це порожній масив.
Публічний метод blacklist(email) для додавання пошти у чорний список. 
Метод повинен додавати значення параметра email в масив, що зберігається 
у властивості blacklistedEmails.
Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку. 
Метод повинен перевіряти наявність значення параметра email в масиві,
 що зберігається у властивості blacklistedEmails, і повертати true або false.
Після оголошення класу ми додали ініціалізацію екземпляра і виклики методів у
 тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

Оголошений клас Admin
Клас Admin наслідує від класу User
Клас Admin містить публічну властивість blacklistedEmails
Клас Admin містить публічний метод blacklist
Клас Admin містить публічний метод isBlacklisted
Після виклику mango.blacklist("poly@mail.com") значення властивості blacklistedEmails - 
це масив ["poly@mail.com"]
Виклик mango.isBlacklisted("mango@mail.com") повертає false
Виклик mango.isBlacklisted("poly@mail.com") повертає true
*/

class User {
    email;

    constructor(email) {
        this.email = email;
    }

    get email() {
        return this.email;
    }

    set email(newEmail) {
        this.email = newEmail;
    }
}
class Admin extends User {
    // Change code below this line
    blacklistedEmails = [];

    static AccessLevel = {
        BASIC: "basic",
        SUPERUSER: "superuser",
    };

    constructor({ email, accessLevel }) {
        super(email);
        this.accessLevel = accessLevel;
    }

    blacklist(email) {
        this.blacklistedEmails.push(email);
    }

    isBlacklisted(email) {
        return this.blacklistedEmails.some(element => element === email);
    }

    // Change code above this line
}

const mango = new Admin({
    email: "mango@mail.com",
    accessLevel: Admin.AccessLevel.SUPERUSER,
});