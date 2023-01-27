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
let delay = 0;

let promisePosition = 0;
let promiseStep = 0;
let increment = 0;
let promiseData = {
  position,
  delay,
}
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
    delay = Number(userData.step);
   createPromise(position, delay).then((resolve) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${promiseData.position} in ${promiseData.delay}ms`)
   },
   (reject) => {
    Notiflix.Notify.warning(`❌ Rejected promise ${promiseData.position} in ${promiseData.delay}ms`)
   });
    
 // delaying rest of promiises
  intervalId = setInterval(() =>{
        createPromise(position, delay).then((resolve) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${promiseData.position} in ${promiseData.delay}ms`)
         },
         (reject) => {
          Notiflix.Notify.warning(`❌ Rejected promise ${promiseData.position} in ${promiseData.delay}ms`)
         });}, 


        Number(userData.step));


 }, Number(userData.delay))

}


function createPromise(position, delay){
  
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      promisePosition +=1;
      promiseStep = Number(userData.step);

      if(shouldResolve){
          resolve (promiseData.position = promisePosition, promiseData.delay = promiseDelay + promiseStep*increment);
        } else {
          reject (promiseData.position = promisePosition, promiseData.delay = promiseDelay + promiseStep*increment);
        }
        increment += 1;
        if(
          promisePosition === Number(userData.amount) 
          ){
          clearInterval(intervalId)}


    })    

}
