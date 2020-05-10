/*
	adding sound to 3d particle system
	5.7.2020
*/

var music;
var powerups = [];
var explosion ;

function preload() {
    music = loadSound("Dexter_Britain_-_11_-_Wonderland_Instrumental.mp3")
    powerups.push(loadSound("Powerup8.wav"));
    powerups.push(loadSound("Powerup29.wav"));
    
    explosion.push(loadSound("Explosion16.wav"));
    
}

function keyPressed() {
    if (keyCode == 32) {
        if (music.isPlaying()) {
            music.pause();
           
           
        } else {
            music.play();
        }

    }
    
    //limit 4 before crash because of sound effects
    if (keyCode == 13) {
        particleSystem.add();

    }

}


let particleSystem;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    noStroke();
    particleSystem = new System(createVector(0, 0, 0));
    img = loadImage("iceCreamConeTexture.jpg");
}

function draw() {
    background("purple");

    // drag to rotate up and down, scroll to zoom in and out
    orbitControl();
    
    // ice cream portal
    push();
    stroke("lightgreen");
    noFill();
    torus(275, 30);
    pop();

    directionalLight(220, 220, 255, 1, 1, -1);
    pointLight(255, 255, 255, mouseX - width / 2, mouseY - height / 2, 150);


    /*particleSystem.add();*/
    particleSystem.update();

}
