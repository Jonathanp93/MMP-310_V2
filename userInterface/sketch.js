var numCircles = 10;
var slider;
var colorSlider;
var changeColor = r,g,b;

var r = 0;
var g = 55;
var b = 215;

var backColor = r,g,b;
var hueSlider;





function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    pattern();

    var button = createButton("Generate Pattern");
    button.position(50, 250);
    button.mousePressed(pattern);

    var saveButton = createButton("Save Image");
    saveButton.position(150, 250);
    saveButton.mousePressed(saveImage);

    var label = createElement("label", "update circles:");
    label.position(50, 225);

    slider = createSlider(5, 200, numCircles);
    slider.position(50, 300);
    slider.input(updateCircleNumber);

    var label = createElement("label", "update circle color:");
    label.position(250, 270);

    colorSlider = createSlider(5, 255, changeColor);
    colorSlider.position(250, 300);
    colorSlider.input(changeCircleColor);

    var hueLabel = createElement("label", "Change BG color");
    hueLabel.position(450, 270);

    hueSlider = createSlider(5, 255, backColor);
    hueSlider.position(450, 300);
    hueSlider.input(updateHue);

    
    
function draw(){
    colorMode(HSB, 53, 87, 100);
    background(backColor);
}

}


function updateHue() {
    backColor = hueSlider.value();
   
}



function changeCircleColor() {

    r = this.value();
    pattern();
}




function updateCircleNumber() {

    numCircles = this.value();
    pattern();

}


function saveImage() {
    save("pattern.png");

}





function pattern() {
    background("backHue");

    for (let i = 0; i < numCircles; i++) {
        let x = i * width / numCircles + random(50);
        let y = random(height);
        let s = random(100, 200);

        fill(r, g, b);
        ellipse(x, y, s);


    }

}
