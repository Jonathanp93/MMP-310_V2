/*
	array example
	3.2.2020
*/

var boatImage, cloudImage, treeImage;

function preload() {
    boatImage = loadImage('sail_boat.png');
    treeImage = loadImage('tree.png');
    cloudImage = loadImage('cloud.png');
}

/* position variables for images */
var cloudX = [0]; // empty array
var cloudY = [50];
var numClouds = 7;

var numTrees = 5;
var treeX = [50];
var treeY = [250];

var numBoat = 5;
var boatX = [0];
var boatY = [350];
var boatSpeedX = [+1];
var boatSpeedY = [+1];

function setup() {
    createCanvas(windowWidth, windowHeight);

    // add cloud positions
    let x = -100;
    for (let i = 0; i < numClouds; i++) {
        cloudX.push(x);
        // update x, distributing number of clouds across canvas
        x += width / numClouds + random(-100, 100);
        cloudY.push(random(height / 3));
    }

    // add tree positions
    let y = 250;
    for (let i = 0; i < numTrees; i++) {
        treeX.push(random(treeImage.width, width - treeImage.width));
        treeY.push(y);
        y += 20;
    }

    // add boat positions 
    for (let i = 0; i < numBoat; i++) {
        boatX.push(random(width));
        boatY.push(height - boatImage.height - random(100));
        boatSpeedX.push(random(1, 3));
        boatSpeedY.push(random(-2, 2));
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
        image(treeImage, treeX[i], treeY[i]);
    }

    // boat
    for (let i = 0; i < numBoat; i++) {
        image(boatImage, boatX[i], boatY[i]);

        // animate
        boatX[i] += boatSpeedX[i] + random(1);
        boatY[i] += boatSpeedY[i] + random(-0.5, 0.5);

        // reset fish
        if (boatX[i] > width) {
            boatX[i] = -boatImage.width;
        }

        // contain y value of fish
        if (boatY[i] < height * 2 / 3 ||
            boatY[i] > height - boatImage.height) {
            boatSpeedY[i] *= -1;
        }
    }



    // draw clouds
    for (let i = 0; i < numClouds; i++) {
        image(cloudImage, cloudX[i], cloudY[i]);

        // animate x
        cloudX[i] += 1;

        // check if cloud is beyond right side of canvas
        if (cloudX[i] > width) {
            // reset cloud back to left side
            cloudX[i] = -cloudImage.width;
        }
    }

}
