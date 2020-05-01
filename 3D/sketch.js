/*
	3d graphics starter template
*/

var rotX, rotY, rotZ;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    createP("Scene controls").position(10, 0);

    rotX = createSlider(-TWO_PI, TWO_PI, 0, TWO_PI / 360);
    rotX.position(10, 20);

    rotY = createSlider(-TWO_PI, TWO_PI, 0, TWO_PI / 360);
    rotY.position(10, 40);

    rotZ = createSlider(-TWO_PI, TWO_PI, 0, TWO_PI / 360);
    rotZ.position(10, 60);

}

function draw() {
    background(51);
    
    noStroke();
    lights();
    directionalLight(255, 255, 255, -1, -1, 0);
    pointLight(255, 255, 255, mouseX - width/2, mouseY - height/2, -100);
    
    // floor 
    push();
    translate(0, 200, 0);
    rotateX(PI * 0.5);
    //fill("yellow");
    shininess(0);
    specularMaterial(200, 200, 255);
    plane(1000, 1000);
    pop();


    //ambientMaterial(221, 160, 221);

    rotateX(rotX.value());
    rotateY(rotY.value());
    rotateZ(rotZ.value());

    push();
    fill("tan");
    cone(70, 140);
    pop();

    push();
    translate(0, -100, 0);
    fill(153, 76, 0);
    sphere(70);
    pop();


    push();
    translate(50, -190, 0);
    fill("pink");
    torus(20, 15);
    pop();

    push();
    translate(-50, -190, 0);
    fill("pink");
    torus(20, 15);
    pop();
    
    


    // start composition here
}
