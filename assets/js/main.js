//Elementos
const relogio = document.querySelector('.relogio');
const btn_iniciar = document.querySelector('.iniciar');
const btn_pausar = document.querySelector('.pausar');
const btn_zerar = document.querySelector('.zerar');

//Variáveis
let timer;
let segundos = 0;
let isRunning = false;

//Funcões
function getTimeFromFormat(segundos){
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-BR', {hour12: false, timeZone: 'UTC'});
};

function startTime(){
  clearInterval(timer);
  timer = setInterval(() => {
    segundos++;
    relogio.innerHTML = getTimeFromFormat(segundos);
  }, 1000)
};

//eventos
document.addEventListener('click', (event) => {
  if(event.target == btn_iniciar){
    clearInterval(timer);
    relogio.classList.remove('pausado');
    startTime();
  }

  if(event.target == btn_pausar){
    clearInterval(timer);
    relogio.classList.add('pausado');
  }

  if(event.target == btn_zerar){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
  }
})