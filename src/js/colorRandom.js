const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const
  refs = {
    btnStart: document.querySelector('button[data-action="start"]'),
    btnStop: document.querySelector('button[data-action="stop"]'),
   body: document.querySelector('body'),
  };
let timerId = null;
  const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.btnStart.addEventListener('click', colorRandom);

function colorRandom() {
refs.btnStart.disabled=true;
  timerId = setInterval(() => {
  refs.body.style.background = colors[randomIntegerFromInterval(0, colors.length-1)]   
    
  }, 1000)
  
};
refs.btnStop.addEventListener('click', colorRandomStop);
function colorRandomStop() {
  clearInterval(timerId);
  refs.btnStart.disabled = false
}
// function btnDisabled() {
//   if (refs.btnStart === "on") { refs.btnStart.disabled = true } else { refs.btnStart.disabled = false };
//  }
