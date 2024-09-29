let particles = [];
let numParticles;
let allowedNum = 0;


function setup() {
    const canvas = createCanvas(windowWidth, windowHeight);
    canvas.id('particle-canvas');
    canvas.style('z-index', '-1');
    frameRate(30);

    numParticles = windowWidth > 768 ? 40 : 27;
    textAlign(CENTER, CENTER); 
    textSize(20);
    for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
    }
}


function mousePressed() {
    
    let element = document.elementFromPoint(mouseX, mouseY);
  
  
  if (element && ( element.tagName !== 'CANVAS' && element.tagName !== 'DIV' && element.tagName !== 'BODY' ) ) {
    
    return;
  }
  
    if (mouseButton === LEFT && allowedNum < 15 ) {
        particles.push(new Particle(createVector(mouseX, mouseY)));
        numParticles++;
        allowedNum++;
    }

    if (allowedNum === 15) {
        showFlag('cool effect')
    }
}

function draw() {
    background(240);

    for (let particle of particles) {
        particle.update();
        particle.show();
    }
}

class Particle {
    constructor(pos = createVector(random(width), random(height))) {
        this.pos = pos;
        this.vel = createVector(random(-1, 1), random(-1, 1));
        this.size = random(15, 30);
        this.colorOffset = random(0, 255);
        this.letter = random(['G', 'O', 'L', 'E']);
    }

    update() {
        this.pos.add(this.vel);
        this.edges();
    }

    edges() {
        if (this.pos.x > width || this.pos.x < 0) {
            this.vel.x *= -1;
        }
        if (this.pos.y > height || this.pos.y < 0) {
            this.vel.y *= -1;
        }
    }

    show() {
        noStroke();
        let r = map(sin(frameCount * 0.01 + this.colorOffset), -1, 1, 100, 255);
        let g = map(sin(frameCount * 0.02 + this.colorOffset), -1, 1, 100, 255);
        let b = map(sin(frameCount * 0.03 + this.colorOffset), -1, 1, 100, 255);
        fill(r, g, b);

        textSize(this.size); 
        text(this.letter, this.pos.x, this.pos.y);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}



function showFlag(flagText) {
    
    if (!discovered.includes(flagText)) {

        $('#flag-text').text(flagText);
        $('#flag-modal').modal('show');
        counter++;
        $('#flags-found').text('Flags found: ' + counter + '/10');

        discovered.push(flagText)
    }

}