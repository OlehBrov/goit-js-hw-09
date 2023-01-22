import Notiflix from 'notiflix';

refs = {
  form: document.querySelector('.form'),
  submitBtn: document.querySelector('button')
}

const userData = {};
let promiseCounter = 1;
let timeOutId = null;
let intervalId = null;

refs.form.addEventListener('input', storeData);
refs.submitBtn.addEventListener('click', onSubmit)

function storeData(e){
 userData[e.target.name] = e.target.value;
 console.log(userData.delay)

}
console.log(userData)
console.log(userData.delay)

function onSubmit(e){
  e.preventDefault();
  // if(userData.amount < promiseCounter) {
  //   return;
  // }

timeOutId = setTimeout (() => {
  delayedPromise()
  }, userData.delay);

if (userData.amount === promiseCounter){
  clearInterval(intervalId)
};

  intervalId = setInterval(() => {
    intervalPromise
  }, userData.step); 
 
}

function delayedPromise(){
  createPromise(promiseCounter, userData.step);
  promiseCounter += 1;
  clearTimeout(timeOutId)
}

function intervalPromise(){
  createPromise(promiseCounter, userData.step);
  promiseCounter += 1;
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`); 
  } else {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  }
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });