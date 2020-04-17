var numCircles = 10;
var slider;



function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    pattern();

    var button = createButton("Generate Pattern");
    button.position(50, 50);
    button.mousePressed(pattern);

    var saveButton = createButton("Save Image");
    saveButton.position(150, 50);
    saveButton.mousePressed(saveImage);

    var label = createElement("label", "update circles:");
    label.position(50, 125);

    slider = createSlider(5, 200, numCircles);
    slider.position(50, 100);
    slider.input(updateCircleNumber);






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
        let x = i * width/numCircles + random(50);
        let y = random(height);
        let s = random(100, 200);

        fill("yellow");
        ellipse(x, y, s);
    }



}
