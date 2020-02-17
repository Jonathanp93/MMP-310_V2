var narration;
var narration2;

var bunny;
var grayBunny;

var cave3tunnels;
var caveEntrance;
var cave;

var scene = "cave"
var scene = "cave 3 tunnels"
var scene = "cave outside"

function preload() {

    bunny = loadImage('bunny.png');
    grayBunny = loadImage('grayBunny.png');
    cave3tunnels = loadImage('cave_3_tunnels.png');
    caveEntrance = loadImage('cave_entrance.png');

}


// character location.
/*var bunnyX = 370;
var bunnyY = 490;

var grayBunnyX = 500;
var grayBunnyY = 500;*/

//setting


narration = "Now we messed up, which way is it?";
narration2 = "Right is always right!"


function setup() {
    createCanvas(windowWidth, 800);
}



function mousePressed() {
    if (scene == "cave") {
        scene = "cave 3 tunnels";
    } else if (scene == "cave 3 tunnels") {
        scene = "cave outside";
    } else if (scene == "cave outside") {
        scene = "cave";
    }
}





function draw() {

    background("purple");

    // draw characters

/*
    image(bunny,bunnyX,bunnyY);
    image(grayBunny,grayBunnyX,grayBunnyY);*/


    // narration
    fill("white");
    textSize(30);
    textAlign(CENTER, CENTER);
    text(narration, 300, 50, width / 2);

    fill("white");
    textSize(30);
    textAlign(CENTER, CENTER);
    text(narration2, 650, 400);

    if (scene == "cave") {
        background("purple");
        image(bunny,250,500)
        image(grayBunny, 350,500)


        fill("white");
        textSize(30);
        text("told you we should've left earlier!", 350, 250);



    } else if (scene == "cave 3 tunnels") {
        background("black");
        image(bunny, 300,500)
        image(grayBunny, 350,500)
        image(cave3tunnels, 300, 0)


        fill("white");
        textSize(30);
        text("'3 tunnels, which way is it?'", 600, 300);




    } else if (scene == "cave outside") {
        background("#5ce4ff");
        image(bunny, 320, 500)
        image(grayBunny, 350, 500)
        image(caveEntrance, 0, 100)
        fill("green");
        rect(0, 700, windowWidth, 800, 0, 700, windowWidth, 800);




        fill("black");
        textSize(30);
        text("'finally we're out of there!'", 750, 500);

    }

}
