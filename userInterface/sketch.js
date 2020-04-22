var numCircles = 10;
var slider;
var colorSlider;
var changeSpeed = r,
    g, b;

var r = 0;
var g = 55;
var b = 215;

var backColor = 255;
var hueSlider;

var boatMinSpeed = -0.5;
var boatMaxSpeed = 2;
var boatSpeedSlider;


var grassY;
var grassSlider;

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



    var saveButton = createButton("Save Image");
    saveButton.position(50, 200);
    saveButton.mousePressed(saveImage);


    var grassLabel = createElement("label", "Grass Y");
    grassLabel.position(50, 270);

    grassSlider = createSlider(135,255, grassY);
    grassSlider.position(50, 300);
    grassSlider.input(updateGrass);



    var boatSpeedLabel = createElement("label", "Change Boat Speed:");
    boatSpeedLabel.position(250, 270);

    boatSpeedSlider = createSlider(5, 255, changeSpeed);
    boatSpeedSlider.position(250, 300);
    boatSpeedSlider.input(updateBoatSpeed);



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


function updateGrass() {
	grassY = grassSlider.value();

	for (let i = 0; i < numTrees; i++) {
		trees[i].y = random(height/3, grassY);
	}
}


function updateBoatSpeed() {
    boatMinSpeed = boatSpeedSlider.value();
    boatMaxSpeed = boatMinSpeed * 2;

    for (let i = 0; i < numBoat; i++) {
        boat[i].xSpeed = random(boatMinSpeed, boatMaxSpeed);
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





function draw() {
    colorMode(HSB, 360, 100, 100);
    background(backColor, 87, 100);
    // grass color
    noStroke();
    fill('green');
    rect(0, grassY, width, height / 2);

    // ocean 
    fill('darkblue');
    rect(0, height * 2 / 3, width, height / 3);

    // trees
    for (let i = 0; i < numTrees; i++) {
        trees[i].draw();

    }

    // boats
    for (let i = 0; i < numBoat; i++) {
        boats[i].draw();
        boats[i].update();
    }

    // draw clouds
    for (let i = 0; i < numClouds; i++) {
        clouds[i].draw();
        clouds[i].update();
    }


}
