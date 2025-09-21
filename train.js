console.log('=========== TRAIN MODE =========== ');
console.log('Jack Ma maslahatlari');

const list = [
  'yaxshi talaba boling',
  'togri boshliq boling va koproq hato qiling',
  'uzingizga ishlashni boshlang',
  'siz kuchli bolgan narsalarni qiling',
  'yoshlarga investitsiya qiling',
  'endi dam oling, foydasi yoq endi',
];

// ================= Callback ========================
/*
function maslahatBering(a, callback) {
  if (typeof a !== 'number') callback('insert a number', null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setTimeout(() => {
      callback(null, list[5]);
    }, 5000);
  }
}

console.log('passed here 0');
maslahatBering(66, (err, data) => {
  if (err) console.log('ERROR: ', err);
  else {
    console.log('javob: ', data);
  }
});
console.log('passed here 1');
*/
// ================= Async function ========================

async function maslahatBering(a) {
  if (typeof a !== 'number') throw new Error('insert a number');
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(list[5]);
      }, 5000);
    });
  }
}

// then/catch
// console.log('passed here 0');
// maslahatBering(25)
//   .then((data) => console.log('javob: ', data))
//   .catch((err) => console.log('ERROR: ', err));
// console.log('passed here 1');

// async/ await
// async function run() {
//   let javob = await maslahatBering(20);
//   console.log(javob);
//   javob = await maslahatBering(70);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();
