var numCircles = 10;
var slider;
var colorSlider;
var changeColor = r,
    g, b;

var r = 0;
var g = 55;
var b = 215;

var backColor = 125;
var hueSlider;

var boatImage, cloudImage, treeImage;

function preload() {
    boatImage = loadImage('sail_boat.png');
    treeImage = loadImage('tree.png');
    cloudImage = loadImage('cloud.png');
}

var numClouds = 7;
var clouds = []; // empty array 

var numTrees = 5;
var trees = [];

var numBoat = 5;
var boats = [];



function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    pattern();

/*    var button = createButton("Generate Pattern");
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
    colorSlider.input(changeCircleColor);*/

    var hueLabel = createElement("label", "Change BG color");
    hueLabel.position(450, 270);

    hueSlider = createSlider(5, 255, backColor);
    hueSlider.position(450, 300);
    hueSlider.input(updateHue);
    
     // add cloud positions
    let x = -100;
    for (let i = 0; i < numClouds; i++) {
        let y = random(height / 3);

        let cloud = new Cloud(x, y, cloudImage);
        clouds.push(cloud);

        // update x, distributing number of clouds across canvas
        x += width / numClouds + random(-100, 100);
    }

    // add tree positions
    let y = 250;
    for (let i = 0; i < numTrees; i++) {

        let x = random(treeImage.width, width - treeImage.width);

        let tree = new Thing(x, y, treeImage);
        trees.push(tree);

        y += 20;
    }

    // add boat positions 
    for (let i = 0; i < numBoat; i++) {
        let boat = new Boat(boatImage);
        boats.push(boat);
    }

}





function updateHue() {
    backColor = hueSlider.value();

}



/*
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


*/



function pattern() {
    colorMode(HSB, 360, 100, 100);
    background(backColor, 87, 100);
    // beach color
    noStroke();
    fill('green');
    rect(0, height / 2, width, height / 2);

    // ocean 
    fill('darkblue');
    rect(0, height * 2 / 3, width, height / 3);

    // trees
    for (let i = 0; i < numTrees; i++) {
        trees[i].pattern();
    }

    // boats
    for (let i = 0; i < numBoat; i++) {
        boats[i].pattern();
        boats[i].update();
    }

    // draw clouds
    for (let i = 0; i < numClouds; i++) {
        clouds[i].pattern();
        clouds[i].update();
    }


}
