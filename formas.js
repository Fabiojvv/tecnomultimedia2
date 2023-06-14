class Formas {
  constructor() {
    this.boardSize = tam; // Tamaño del tablero
    this.tileSize; // Tamaño de cada casilla del tablero
    this.shapes = []; // Arreglo de figuras geométricas
    this.minSize = 10; // Tamaño mínimo figuras
    this.maxSize = 30; // Tamaño máximo figuras
    this.indiceFigura = 0; // Índice de la figura actual
    this.ultimoCambioF = 0; // Tiempo del último cambio de figura
    this.tiempoDeCambio = 1000; // Intervalo de cambio de figura en milisegundos
    this.shapeSizeInicial = 50; // Tamaño inicial de la elipse
    this.Dzl = 6;
    this.setup();
  }

  setup() {
    this.tileSize = this.boardSize;
    // Generar las figuras geométricas
    this.generateShapes();
  }

  dibujarFormas() {
    push();
   
    let voz = 30 - amp * 50; //variable para la amplitud del noise
    this.shapeSizeInicial = voz*0.01;
    // Cambia el tamaño de las formas segun la amplitud
     let tamf = map (this.shapeSizeInicial, 0.01, 1, 25, 10);

    // Dibujar el tablero de ajedrez
    for (let i = 0; i < this.boardSize; i++) {
      for (let j = 0; j < this.boardSize; j++) {
        let x = i * tam + this.Dzl;
        let y = j * tam + this.Dzl;

        // Obtener la figura geométrica actual
        let index = i + j * this.boardSize;
        let currentShape = this.shapes[index];
        // Dibujar la figura geométrica en la casilla
        if(voz == - 15){;}
        this.drawShape(currentShape, x, y, tamf);

      }
    }

    // Cambiar la figura cada 3 segundos
    if (millis() - this.ultimoCambioF > this.tiempoDeCambio) {
      this.ultimoCambioF = millis();
      this.indiceFigura = (this.indiceFigura + 1) % this.shapes.length;
      this.generateShapes();
    }
    pop();
  }

  generateShapes() {
    this.shapes = []; // Limpiar el arreglo de figuras
    for (let i = 0; i < this.boardSize * this.boardSize; i++) {
      // Generar una figura geométrica aleatoria (0: elipse, 1: triángulo, 2: cuadrado)
      let shape = floor(random(9));
      this.shapes.push(shape);
    }
  }

  drawShape(shape, x, y, size) {
    let shapeSize = size * 0.7; // Tamaño base de la figura
  
    let xOffset = (size - shapeSize) / 2; // Desplazamiento en x
    let yOffset = (size - shapeSize) / 2; // Desplazamiento en y
  
    // Establecer relleno negro
    fill(0);
    
    // Dibujar la figura en la casilla
    switch (shape) {
      case 0: // Elipse
        ellipse(x + xOffset + shapeSize / 2, y + yOffset + shapeSize / 2, shapeSize, shapeSize);
        break;
      case 1: // Triángulo
        triangle(x + xOffset, y + yOffset + shapeSize, x + xOffset + shapeSize / 2, y + yOffset, x + xOffset + shapeSize, y + yOffset + shapeSize);
        break;
      case 2: // Cuadrado
        rect(x + xOffset, y + yOffset, shapeSize, shapeSize);
        break;
      case 3: // Rombos
        beginShape();
        vertex(x + xOffset + shapeSize / 2, y + yOffset);
        vertex(x + xOffset + shapeSize, y + yOffset + shapeSize / 2);
        vertex(x + xOffset + shapeSize / 2, y + yOffset + shapeSize);
        vertex(x + xOffset, y + yOffset + shapeSize / 2);
        endShape(CLOSE);
        break;
      case 4: // Óvalo horizontal
        ellipse(x + xOffset + shapeSize / 2, y + yOffset + shapeSize / 2, shapeSize, shapeSize * 0.5);
        break;
      case 5: // Diamante
        beginShape();
        vertex(x + xOffset + shapeSize / 2, y + yOffset);
        vertex(x + xOffset + shapeSize, y + yOffset + shapeSize / 2);
        vertex(x + xOffset + shapeSize / 2, y + yOffset + shapeSize);
        vertex(x + xOffset, y + yOffset + shapeSize / 2);
        endShape(CLOSE);
        break;
      case 6: // Ovalo vertical
        ellipse(x + xOffset + shapeSize / 2, y + yOffset + shapeSize / 2, shapeSize * 0.6, shapeSize);
        break;
      case 7: // cuadrado sin fondo
        push();
        fill(0, 0);
        strokeWeight(4);
        rect(x + xOffset, y + yOffset, shapeSize, shapeSize);
        pop();
        break;
      case 8: // Triángulo
        push();
        fill(0, 0);
        strokeWeight(4);
        triangle(x + xOffset, y + yOffset + shapeSize, x + xOffset + shapeSize / 2, y + yOffset, x + xOffset + shapeSize, y + yOffset + shapeSize);
        pop();
        break;
    }
  }
}
