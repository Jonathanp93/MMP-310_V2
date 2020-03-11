var scene = "caveEntrance"


/*var bunnyImage
var grayBunnyImage
var cave3tunnelsImage
var caveOutsideImage*/

function preload() {

    bunny = loadImage('bunny.png');
    grayBunny = loadImage('grayBunny.png');
    cave3tunnels = loadImage('cave_3_tunnels.png');
    caveOutside = loadImage('cave_entrance.png');

}



function setup() {
    createCanvas(windowWidth, 800);
}



function mousePressed() {
    if (scene == "caveEntrance") {
        scene == "cave";
    } else if (scene == "cave") {
        scene == "cave 3 tunnels";
    } else if (scene == "cave3tunnels") {
        scene == "caveEntrance";
    }
}

function cave() {
    background("purple")
    fill("black");
    rect(0, 700, windowWidth, 700, 0, 700, windowWidth, 700);
    image(bunny, 250, 500)
    image(grayBunny, 350, 500)
}


function cave3tunnels() {
    background("black")
    image(cave3tunnels, 300, 0)
    image(bunny, 420, 450)
    image(grayBunny, 500, 450)

}


function caveEntrance() {
    background("#5ce4ff")
    image(caveOutside, 0, 100)
    image(bunny, 300, 500)
    image(grayBunny, 200, 500)
    fill("green");
    stroke("green");
    rect(0, 700, windowWidth, 800, 0, 700, windowWidth, 800);
}


function narration(story) {
    fill('white');
    textSize(30);
    textAlign(CENTER, CENTER);
    text(story, width / 4, 20, width / 2);
}


function bunny(x, y) {
    image(bunny, x, y);
}


function grayBunny(x, y) {
    image(grayBunny, x, y);
}

var currentSetting = "cave";

function draw() {

    background("purple");




    if (currentSetting == "caveEntrance") {

        caveEntrance();
        image(bunny, 300, 500)
        image(grayBunny, 200, 500)
        narration("Once upon a time, there were two bunnies searching for adventure.");


    } else if (currentSetting == "cave") {

        cave();
        image(bunny, 250, 500)
        image(grayBunny, 350, 500)
        narration("The two bunny's had gotten lost searching for treasure.");

    } else if (currentSetting == "cave3tunnels") {

        cave3tunnels();
        image(cave3tunnels, 300, 0)
        image(bunny, 420, 450)
        image(grayBunny, 500, 450)
        narration("Which way do we go!");

    } else if (currentSetting == "caveEntrance") {

        caveEntrance();
        image(bunny, 400, 500)
        image(grayBunny, 300, 500)
        narration("Next time we're coming with a map!");
    }


}
