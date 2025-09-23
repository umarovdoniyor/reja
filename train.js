console.log('=========== TRAIN MODE =========== ');
//=========================================================
// B-TASK

/*
  Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
*/

// masalani yechimi:

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
console.log(`Number of digits in the input string: ${result.length}`);
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
