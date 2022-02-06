function accionPlay()
{
  if(!medio.paused && !medio.ended) 
  {
    medio.pause();
    play.value='\u25BA'; //\u25BA
    document.body.style.backgroundColor = '#fff';
  }
  else
  {
    medio.play();
    play.value='||';
    document.body.style.backgroundColor = 'grey';
  }
}
function accionReiniciar()
{
  //Usar propiedad .currentTime
  medio.currentTime=0;
  //Reproducir el vídeo
  play.click();
  //Cambiar el valor del botón a ||
}
function accionRetrasar()
{
  //Usar propiedad .curentTime
  if(medio.currentTime<5)
  {
    medio.currentTime=0;
  }else{
    medio.currentTime=medio.currentTime-5;
  }
  //Contemplar que no existen valores negativos
}
function accionAdelantar()
{
  //Contemplar que no existen valores mayores a medio.duration  
  if((medio.currentTime+5)>=medio.duration)
  {
    medio.currentTime=medio.duration;
  }else{
    medio.currentTime=medio.currentTime+5;
  }
}
function accionSilenciar()
{
  //Utilizar medio.muted = true; o medio.muted = false;
  if(medio.muted)
  {
    medio.muted = false;
  }else{
    medio.muted = true;
  }
}
function accionMasVolumen()
{
    debugger;
  //Contemplar que el valor máximo de volumen es 1
  if((medio.volume+0.2)>=1)
  {
      medio.volume=1;
  }else{
      medio.volume=medio.volume+0.2;
  }
}
function accionMenosVolumen()
{
    debugger;
  //Contemplar que el valor mínimo de volumen es 0
  if((medio.volume-0.2)<=0)
  {
      medio.volume=0;
  }else{
      medio.volume=medio.volume-0.2;
  }
}

function iniciar() 
{
  
  medio=document.getElementById('medio');
  play=document.getElementById('play');
  reiniciar=document.getElementById('reiniciar');
  retrasar=document.getElementById('retrasar');
  adelantar=document.getElementById('adelantar');
  silenciar=document.getElementById('silenciar');

  play.addEventListener('click', accionPlay);
  reiniciar.addEventListener('click', accionReiniciar);
  retrasar.addEventListener('click', accionRetrasar);
  adelantar.addEventListener('click', accionAdelantar);
  silenciar.addEventListener('click', accionSilenciar);
  menosVolumen.addEventListener('click', accionMenosVolumen);
  masVolumen.addEventListener('click', accionMasVolumen);
}

window.addEventListener('load', iniciar, false);