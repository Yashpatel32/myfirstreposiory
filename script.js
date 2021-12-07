// const btn = document.querySelector('.login');
// const btn1 = document.querySelector('.login1');
// const show = document.querySelector('.show3');
// const show1 = document.querySelector('.show1');
// const form = document.querySelector('.form-h');
// const hidden = document.querySelector('.hidden');

// btn.addEventListener('click', function () {
//   form.classList.remove('hidden');
//   show.classList.add('hidden');
// });

// btn1.addEventListener('click', function () {
//   show1.classList.remove('hidden');
//   show.classList.add('hidden');
// });

// Udemy videos work

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300],

// const arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];

// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);
// console.log(letters.join(' - '));

// const arr3 = [23, 11, 64];
// console.log(arr3[0]);
// console.log(arr3.at(0));
// // getting last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));
// console.log('yash'.at(0));
// console.log('yash'.at(-1));
// const money = [20, 450, -400, 333, -650, -130, 1070, 300];
// for (const [i, mov] of money.entries()) {
//   if (mov > 0) {
//     console.log(`entry ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`entry ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// }
// money.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`entry ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`entry ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

// const people = ['yash', 'himit', 'bunty', 'chintan'];
// console.log(people.sort());
// console.log(people);

// const account = [100, -100, -50, -20, -284, 764, 863];
// account.sort((a, b) => a - b);

// console.log(account);

// account.sort((a, b) => b - a);
// console.log(account);

// const withdrawals = account.filter(acc => 0 > acc);

// const arr4 = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));
// const x = new Array(7);

// console.log(x);

// x.fill(1, 3, 5);
// x.fill(1);
// console.log(x);

// arr.fill(23, 2, 6);
// console.log(arr);

// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);
// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// flat Map

// const person1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2,
//   pin: 1111,
// };

// const person2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const person3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const person4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const persons = [person1, person2, person3, person4];

// const bankDepositSum = persons
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);

// console.log(bankDepositSum);

// // 2.
// // const numDeposits1000 = persons
// //   .flatMap(acc => acc.movements)
// //   .filter(mov => mov >= 1000).length;

// const numDeposits1000 = persons
//   .flatMap(acc => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

// console.log(numDeposits1000);

// let a = 10;
// console.log(++a);
// console.log(a);

// const { deposits, withdrawals } = persons
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );

// console.log(deposits, withdrawals);

// const convertTitleCase = function (title) {
//   const capitzalize = str => str[0].toUpperCase() + str.slice(1);

//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitzalize(word)))
//     .join(' ');

//   return capitzalize(titleCase);
// };

// console.log(convertTitleCase('this is a very nice title'));
// console.log(convertTitleCase('in the VILLAGE some people is BED'));
// console.log(convertTitleCase('this child is LOOK so cute'));

// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
// console.log(dogSarah);
// console.log(
//   `Sarah's dog is eating too ${
//     dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
//   } `
// );

// const ownersEatTooMuch = dogs
//   .filter(dog => dog.curFood > dog.recFood)
//   .flatMap(dog => dog.owners);
// // .flat();
// console.log(ownersEatTooMuch);
// const ownersEatTooLittle = dogs
//   .filter(dog => dog.curFood < dog.recFood)
//   .flatMap(dog => dog.owners);
// console.log(ownersEatTooLittle);

// console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
// console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// console.log(dogs.some(dog => dog.curFood === dog.recFood));

// const checkEatingOkay = dog =>
//   dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
// console.log(dogs.some(checkEatingOkay));

// console.log(dogs.filter(checkEatingOkay));

// const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
// console.log(dogsSorted);

//

// console.log(Number.parseInt(23));
// console.log(Number.parseInt('23px'));
// console.log(Number.parseInt('y23'));

// console.log(Number.parseFloat('3.33rem'));
// console.log(Number.parseFloat('t3.33rem'));

// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'20t'));
// console.log(Number.isNaN(23 / 0));

// console.log(Number.isFinite(23));
// console.log(Number.isFinite('23'));
// console.log(Number.isFinite(+'23y'));
// console.log(Number.isFinite(23 / 0));

// console.log(Number.isInteger(23));
// console.log(Number.isInteger(23.0));
// console.log(Number.isInteger(+'23yt'));
// console.log(Number.isInteger(23 / 0));

// console.log(Math.sqrt(144));
// console.log(144 ** (1 / 2));
// console.log(125 ** (1 / 3));

// console.log(Math.max(1, 45, 232, 45, 33, 77));
// console.log(Math.max(1, 45, 232, '45yt', 33, 77));
// console.log(Math.min(1, 45, 232, 45, 33, 77));

// console.log(Math.PI * Number.parseFloat('10px') ** 2);
// console.log(Math.trunc(Math.random() * 6) + 1);

// console.log(Math.trunc(23.33));

// console.log(Math.round(23.33));
// console.log(Math.round(33.23));

// console.log(Math.ceil(23.33));
// console.log(Math.ceil(33.23));

// console.log(Math.floor(23.33));
// console.log(Math.floor('33.23'));

// console.log(Math.trunc(-33.33));
// console.log(Math.floor(-33.3));

// console.log((2.3).toFixed(0));
// console.log((2.3).toFixed(3));
// console.log((2.3335).toFixed(3));
// console.log(+(2.3333).toFixed(3));

// console.log(33 / 7); //33 = 7 * 4 + 5
// console.log(33 % 7);

// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);

// console.log(4838430248342043823408394839483204n);
// console.log(BigInt(48384302));

// console.log(10000n + 10000n);
// console.log(36286372637263726376237263726372632n * 10000000n);
// // console.log(Math.sqrt(25n));
// const huge = 20289830237283728378237n;
// const num = 23;
// console.log(huge * BigInt(num));

// console.log(33n > 23);
// console.log(33n === 33);
// console.log(typeof 33n);
// console.log(20n == '20');
// console.log(huge + ' is REALLY big!!!');

// console.log(11n / 3n);
// console.log(10 / 3);

// const future = new Date(2023, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime());
// console.log(new Date(2142256980000));
// console.log(Date.now());
// future.setFullYear(2033);
// console.log(future);

// const future1 = new Date(2037, 10, 19, 15, 23);
// console.log(+future1);
// const calcDaysPassed = (date1, date2) =>
//   Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
// const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
// console.log(days1);

// const datess = [
//   '2019-11-01T13:15:33.035Z',
//   '2019-11-30T09:48:16.867Z',
//   '2019-12-25T06:04:23.907Z',
//   '2020-01-25T14:18:46.235Z',
//   '2020-02-05T16:33:06.386Z',
//   '2020-04-10T14:43:26.374Z',
// ];

// const now = new Date();
// const options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   day: 'numeric',
//   month: 'numeric',
//   year: 'numeric',
//   //   weekday: 'numeric',
// };
// const local = navigator.language;
// console.log(local);

// // datess = new Intl.DateTimeFormat(local, options);
// new Intl.DateTimeFormat(local, options).format(num);
// // console.log(datess).format(now);

// const num1 = 3884764.23;
// const options1 = {
//   style: 'currency',
//   unit: 'celsius',
//   currency: 'EUR',
//   // useGrouping: false,
// };
// console.log('US:      ', new Intl.NumberFormat('en-US', options1).format(num1));
// console.log('Germany: ', new Intl.NumberFormat('de-DE', options1).format(num1));
// console.log('Syria:   ', new Intl.NumberFormat('ar-SY', options1).format(num1));
// console.log(
//   navigator.language,
//   new Intl.NumberFormat(navigator.language, options1).format(num1)
// );
console.log('yash');
alert('HACKED');
