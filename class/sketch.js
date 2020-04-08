/*
	class example
	3.9.2020
*/

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

function draw() {
    background('lightblue');

    // beach color
    noStroke();
    fill('green');
    rect(0, height / 2, width, height / 2);

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
