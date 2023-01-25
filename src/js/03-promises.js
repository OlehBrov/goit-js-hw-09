import Notiflix from 'notiflix';

Notiflix.Notify.init({fontSize: '18px',});


const form = document.querySelector('.form');
const submitBtn = document.querySelector('button');

let userData = {
  amount: 0,
  delay: 0,
  step: 0,
};
let position = 0;
let intervalId = null;
let promiseDelay = 0;

let step = 0;
let promisePosition = 0;
let promiseStep = 0;

form.addEventListener('input', userInputSave);
submitBtn.addEventListener('click', buildPromises)

function userInputSave(e){
  userData[e.target.name] = e.target.value;
}

function buildPromises(e){
  e.preventDefault();
  setTimeout(() => {
    if(Number(userData.delay) !== 0){
      promiseDelay = Number(userData.delay)

    }
    step = Number(userData.step);
   createPromise(position, step);
    
  }, userData.delay - userData.step)


}


function createPromise(position, delay){
  let increment = 0;
  return new Promise((resolve, reject) => {
   
    intervalId = setInterval(() => {
      const shouldResolve = Math.random() > 0.3;
      promisePosition +=1;
      promiseStep = delay;
      promiseDelay = promiseDelay === 0 ? delay : promiseDelay;
      if(shouldResolve){
          resolve (Notiflix.Notify.success(`✅ Fulfilled promise ${promisePosition} in ${promiseDelay + promiseStep*increment}ms`));
        } else {
          reject(Notiflix.Notify.warning(`❌ Rejected promise ${promisePosition} in ${promiseDelay + promiseStep*increment}ms`));
        }
        if(promisePosition === Number(userData.amount) || promisePosition === position){
          clearInterval(intervalId)}
          
          increment += 1;

      },delay)
    })    

}

  

  // createPromise(4, 3000).then(
  // result => {(result)}, 
  // error => {(error)})