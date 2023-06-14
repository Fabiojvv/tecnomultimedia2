class Fondo {
    constructor(tam){
      this.tam = tam;
    }
  
    dibujaFondo() {

      let y = height - amp * height; //amplitud del noise
      let MovY = map(y, 0, height, 0.0054, 0.01); //brillo del noise

      let MovX = map(amp, ampMax, ampMin , 0.005, 0.010); //colores del noise
      if (grave) {
        // Sonido grave
        MovX += 1;
      } if (agudo) {
        // Sonido agudo
        MovX -= 1; }
      
     //........................................................................dibujo
      for (let x = 0; x < width; x+= tam) {
        for (let y = 0; y < height; y+=tam) {
          push();
          let ValorTinte = noise(x * MovX, y * MovX);
          let ValorBrillo = noise(x * MovY, y * MovY);
  
          let brillo = map(ValorBrillo, 0.2, 0.8, 100, 30);
          let tinte = map(ValorTinte, 0.2, 0.8, 0, 255);

          if(sonidoOn){noStroke();
            fill(tinte, 100, brillo);
            rect(x, y, tam, tam);
          } else{
            noStroke();
            fill(tinte, 100, brillo);
            rect(x, y, tam, tam);
          }
          pop();
        }
      }
    }
  
    dibujaFiltros() {
     //.................................... Si.
      let LETSGO;

      if (grave) {
        // Sonido grave
        LETSGO += 1;
      }
      if (agudo) {
        // Sonido agudo
        LETSGO -= 1;  
      }
       
      LETSGO = constrain(amp, ampMin, ampMax);
      let opacidad2 = map(LETSGO, ampMin, ampMax, 40, 15); //opacidad de los colores secundarios
      let opacidad = map(LETSGO,ampMin, ampMax, 30, 55); //opacidad de los colores primarios
      
      //...................................................................................................dibujo
      push();
      //colores secundarios
      noStroke();
      fill(36, 100, 100, opacidad2); //Naranja
      rect(0, 0, tam * 10, tam * 10);
  
      fill(110, 100, 100, opacidad2); //verde
      rect(width - tam * 10, 0, tam * 10, tam * 10);
  
      fill(280, 100, 100, opacidad2); //morado
      rect(0, height - tam * 10, tam * 10, tam * 10);
  
      fill(180, 100, 100, opacidad2); //celeste
      rect(width - tam * 10, height - tam * 10, tam * 10, tam * 10);
      pop();
  
      push(); // colores primarios
      rectMode(CENTER);
      noStroke();
      fill(210, 100, 100, opacidad); //azul
      rect(width / 2 - tam * 3, height / 2 - tam * 4, tam * 10, tam * 10);
  
      fill(0, 100, 100, opacidad); //rojo
      rect(width / 2 + tam * 3, height / 2 - tam * 2, tam * 10, tam * 10);
  
      fill(60, 100, 100, opacidad); //amarillo
      rect(width / 2 - tam, height / 2 + tam * 4, tam * 10, tam * 10);
      pop();
    }
  }
  