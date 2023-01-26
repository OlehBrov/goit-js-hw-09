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
let increment = 0;

form.addEventListener('input', userInputSave);
submitBtn.addEventListener('click', buildPromises)

function userInputSave(e){
  userData[e.target.name] = e.target.value;
}

function buildPromises(e){
  e.preventDefault();
  setTimeout(() => {
    // delaying first promise
      promiseDelay = Number(userData.delay)
    step = Number(userData.step);
   createPromise(position, step);
    
 // delaying rest of promiises
  intervalId = setInterval(() =>{
      delay = Number(userData.step)
        createPromise(position, delay)}, Number(userData.step));
 }, Number(userData.delay))

}


function createPromise(position, delay){
  
  //check, if the function isn't initiated by button to set up internal timeout
  let internalDelay = 0;
  if(userData.amount === 0 && userData.delay === 0 && userData.step === 0){
    internalDelay = delay;
    promisePosition = position-1;
    promiseDelay = delay;
  }     
  //////////////////////////////////////
  setTimeout(() => {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      promisePosition +=1;
      promiseStep = Number(userData.step);

      if(shouldResolve){
          resolve (Notiflix.Notify.success(`✅ Fulfilled promise ${promisePosition} in ${promiseDelay + promiseStep*increment}ms`));
        } else {
          reject(Notiflix.Notify.warning(`❌ Rejected promise ${promisePosition} in ${promiseDelay + promiseStep*increment}ms`));
        }
        increment += 1;
        if(promisePosition === Number(userData.amount) || promisePosition === position){
          clearInterval(intervalId)}


    })    
  }, internalDelay);

}

  //to run function without button >>

  // createPromise(4, 3000).then(
  // result => {(result)}, 
  // error => {(error)})