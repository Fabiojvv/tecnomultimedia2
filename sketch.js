//-------------------------- CONFIGURACIÓN -----------------------------------------
let mic;
let amp;
let sonidoOn = false;
let ampMin = 0.01;
let ampMax = 0.03;

// Analizar el nivel de volumen para determinar si el sonido es grave o agudo
let grave = amp > ampMin && amp < ampMax;
let agudo = amp > ampMax;

//........................ clases 
let tam = 30;
let fondo;
let formas;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100, 100); //HSB (color, saturación y brillo)
  
  mic = new p5.AudioIn();
  mic.start();
  userStartAudio(); // para el navigador
  
  fondo = new Fondo(tam);
  formas = new Formas();
}

function draw() {
  amp = mic.getLevel();
  sonidoOn = amp > ampMin;
  fondo.dibujaFondo();
  fondo.dibujaFiltros();
  formas.dibujarFormas();
}


