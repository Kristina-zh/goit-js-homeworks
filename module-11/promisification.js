'use strict'

// Задание 1
// Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд. Значением исполнившегося промиса должно быть то кол-во миллисекунд которое передали во время вызова функции delay.

const logger = time => console.log(`Resolved after ${time}ms`);

new Promise((res, rej) => {
    setTimeout(logger, ms)
      res();
    }, ms)

const delay = ms => {
  return new Promise((res, rej) => {
    setTimeout(resolve, ms);
  })
};

// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms








// Задание 2
// Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию callback, а принимала всего два параметра allUsers и userName и возвращала промис.

// const users = [
//   { name: 'Mango', active: true },
//   { name: 'Poly', active: false },
//   { name: 'Ajax', active: true },
//   { name: 'Lux', active: false },
// ];

// const toggleUserState = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   );

//   callback(updatedUsers);
// };

// const logger = updatedUsers => console.table(updatedUsers);

// /*
//  * Сейчас работает так
//  */
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);

// /*
//  * Должно работать так
//  */
// toggleUserState(users, 'Mango').then(logger);
// toggleUserState(users, 'Lux').then(logger);




// Задание 3
// Перепиши функцию makeTransaction() так, чтобы она не использовала callback-функции onSuccess и onError, а принимала всего один параметр transaction и возвращала промис.

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const makeTransaction = (transaction, onSuccess, onError) => {
//   const delay = randomIntegerFromInterval(200, 500);

//   setTimeout(() => {
//     const canProcess = Math.random() > 0.3;

//     if (canProcess) {
//       onSuccess(transaction.id, delay);
//     } else {
//       onError(transaction.id);
//     }
//   }, delay);
// };

// const logSuccess = (id, time) => {
//   console.log(`Transaction ${id} processed in ${time}ms`);
// };

// const logError = id => {
//   console.warn(`Error processing transaction ${id}. Please try again later.`);
// };

// /*
//  * Работает так
//  */
// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
// /*
//  * Должно работать так
//  */
// makeTransaction({ id: 70, amount: 150 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 71, amount: 230 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 72, amount: 75 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 73, amount: 100 })
//   .then(logSuccess)
//   .catch(logError);


// const cell = document.querySelectorAll('td');
// const button = document.querySelector('button');

// let maxNumber = +cell[0].textContent;
// let newIndex = 0;

// cell.forEach((el, index) => {
//   if(+el.textContent > maxNumber) {
//     maxNumber = +el.textContent;
//     newIndex = index;
//   }
// });

// button.addEventListener('click', () => {
//   cell[newIndex].style.backgroundColor = 'red';
// });

// Даны два селекта. В первом находятся страны,
// во втором - города. Сделайте так, чтобы когда
// выбирается определенная страна - в другом селекте
// появлялись города этой страны. В абзац ниже пишите
// выбранную страну и город через запятую.

// const cityArr = {
//     'aus': ['Мельбурн', 'Сидней', 'Аделаида', 'Брисбен', 'Хобарт'],
//     'jap': ['Токио', 'Киото', 'Осака', 'Иокогама'],
//     'sar': ['Кейптаун', 'Йоханесбург'],
//  }
