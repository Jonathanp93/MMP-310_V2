var numCircles = 10;
var slider;
var colorSlider;
var changeColor = r, g, b;

var r = 0;
var g = 128;
var b = 255;





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
    background("purple");

    for (let i = 0; i < numCircles; i++) {
        let x = i * width / numCircles + random(50);
        let y = random(height);
        let s = random(100, 200);

        fill(r);
        ellipse(x, y, s);


    }

}
