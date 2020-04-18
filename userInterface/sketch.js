var numCircles = 10;
var slider;

var r = "red";
var g = "green";
var b = "blue";


var changeColor = r,
    g, b;



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
    label.position(250, 250);

    slider = createSlider(5, 200, changeColor);
    slider.position(250, 300);
    slider.input(changeColor);


}


function changeColor() {

    changeColor = this.value();
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

        fill("r,g,b");
        ellipse(x, y, s);
    }



}
