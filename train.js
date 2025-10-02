console.log('=========== TRAIN MODE =========== ');
//=========================================================
// E-TASK:

/*Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
MASALAN: getReverse("hello") return qilsin "olleh"*/
function getReverse(str) {
  return str.split('').reverse().join('');
}

// Example usage:
const examplelString = 'hello';
const result = getReverse(examplelString);
console.log(result);
//=========================================================
// D-TASK

/*
  Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin

MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;
*/

// masalani yechimi
/*
function checkContent(str1, str2) {
  // normalize to lowercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1.length !== str2.length) return false;

  // Turn strings into arrays, sort, and join back
  const sorted_str1 = str1.split('').sort().join('');
  const sorted_str2 = str2.split('').sort().join('');

  return sorted_str1 === sorted_str2;
}

// Test case
console.log(checkContent('mitgroup', 'gmtiprou'));
*/
//=========================================================
// C-TASK

/*
  Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
*/

// masalani yechimi
/* 
class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  // helper function for time
  logWithTime(message) {
    const time = new Date().toLocaleString();
    console.log(`[${time}] da ${message}`);
  }

  // Show current stock
  qoldiq() {
    this.logWithTime(
      `Qoldiq: Non = ${this.non}, Lagmon = ${this.lagmon}, Cola = ${this.cola} mavjud`
    );
  }

  // Sell an item
  sotish(item, amount) {
    if (this[item] !== undefined) {
      if (this[item] >= amount) {
        this[item] -= amount;
        this.logWithTime(`${amount} ta ${item} sotildi.`);
      } else {
        this.logWithTime(`Kechirasiz, ${item} yetarli emas.`);
      }
    } else {
      this.logWithTime(`Bunday mahsulot yo'q: ${item}`);
    }
  }

  // Receive new stock
  qabul(item, amount) {
    if (this[item] !== undefined) {
      this[item] += amount;
      this.logWithTime(`${amount} ta ${item} qabul qilindi.`);
    } else {
      this.logWithTime(`Bunday mahsulot yo'q: ${item}`);
    }
  }
}

const shop = new Shop(4, 5, 2);
shop.qoldiq();
shop.sotish('non', 3);
shop.qabul('coljjjja', 4);
shop.qoldiq();
*/
//=========================================================
// B-TASK

/*
  Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
*/

// masalani yechimi:
/*
const example_input = 'ad2a54y79wet0sfgb9';

function countDigits(input) {
  const letters = []; // just in case, if needed later
  const numbers = [];
  for (let char of input) {
    if (char >= '0' && char <= '9') {
      numbers.push(Number(char));
    } else {
      letters.push(char);
    }
  }
  return numbers;
}

const result = countDigits(example_input);
console.log(`Number of digits in the input string: ${result.length}`);*/
//=========================================================
/*
// A-TASK:

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

// masalani yechimi:

function countLetter(letter, word) {
  let count = 0;
  if (typeof word === 'string' && typeof letter === 'string') {
    word = word.toLowerCase().split('');
    letter = letter.toLowerCase();
    console.log('word: ', word);
    // for (const ele of word) {
    //   if (letter === ele) {
    //     count++;
    //   }
    // }
    word.forEach((el) => {
      if (letter === el) count++;
    });
    return count;
  } else {
    return 'Please, insert a letter for the first argument and a string for the second argument to get a result';
  }
}

const result = countLetter('G', 'engineeEEr');

console.log('result:', result);
*/
