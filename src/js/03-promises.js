import Notiflix from 'notiflix';

Notiflix.Notify.init({fontSize: '18px',});


const form = document.querySelector('.form');
const submitBtn = document.querySelector('button');

let userData = {
  delay: 0,
};
let positionCounter = 0;
let intervalId = null;
const delay = userData.delay;
let delayTime = Number(userData.delay);



form.addEventListener('input', userInputSave);
submitBtn.addEventListener('click', buildPromises)

function userInputSave(e){
  userData[e.target.name] = e.target.value;
}

function buildPromises(e){
  e.preventDefault();
  setTimeout(() => {

    createPromise(userData.amount, userData.step);
    
  }, userData.delay)
}


function createPromise(position, delay){
  return new Promise((resolve, reject) => {
        intervalId = setInterval(() => {
        positionCounter +=1;
        delayTime += Number(delay);

        const shouldResolve = Math.random() > 0.3;
          if(shouldResolve){
            resolve (Notiflix.Notify.success(`✅ Fulfilled promise ${positionCounter} in ${delayTime}ms`));
          } else {
            reject(Notiflix.Notify.warning(`❌ Rejected promise ${positionCounter} in ${delayTime}ms`));
          }
          
          
          if(positionCounter === Number(userData.amount) || Number(position) === positionCounter){
            clearInterval(intervalId)}
        },delay)
    })    
  }
  

  createPromise(4, 2500).then(
  result => {Notiflix.Notify.success(result)}, 
  error => {Notiflix.Notify.warning(error)})