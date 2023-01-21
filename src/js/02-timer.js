// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const startBtn = document.querySelector('button[data-start]');
const daysValueRef = document.querySelector('[data-days]');
const hoursValueRef = document.querySelector('[data-hours]');
const minutesValueRef = document.querySelector('[data-minutes]');
const secondsValueRef = document.querySelector('[data-seconds]');
const currentDate = Date.now();
let timerId = null;
let isActive = true;
let userSelectedDate = 0;
let dateDifference = 0;
const COUNT_DOWN_INTERVAL = 1000;
const STOP_COUNT = 1000;

startBtn.addEventListener('click', countdown)

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      userSelectedDate = new Date(selectedDates[0]).getTime();
      isActive = true;
      checkDate(userSelectedDate);
   
    },
    onOpen(){
      clearInterval(timerId)

    }
  };

flatpickr("#datetime-picker", options);
function checkDate(){
  if(currentDate >= userSelectedDate){
    Notiflix.Notify.warning('You selected incorrect date');

  }
}
function countdown(){
  if(isActive){
    dateDifference = userSelectedDate - currentDate;
    timerId = setInterval(() => {
    dateDifference -= COUNT_DOWN_INTERVAL;
    convertMs(dateDifference);
    stopTimer()
   
   }, 1000)
   isActive = false;
   
  }

}

function stopTimer(){
  if(dateDifference <= STOP_COUNT){
    clearInterval(timerId)

  }
}
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    viewUpdate({ days, hours, minutes, seconds }) 

  }

  function addLeadingZero(value) {
    
   return value.toString().padStart(2, '0');
    
   };  

 function viewUpdate({ days, hours, minutes, seconds }){
  daysValueRef.textContent = addLeadingZero(days);
  hoursValueRef.textContent = addLeadingZero(hours);
  minutesValueRef.textContent = addLeadingZero(minutes);
  secondsValueRef.textContent = addLeadingZero(seconds);
 }

