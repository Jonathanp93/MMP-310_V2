// create player variables
var player1;
var player2;

var p1IdleImage, p1attackImage;
var p2IdleImage, p2attackImage;


// global to prevent spamming actions
var actionHappened = false;


function preload() {
    p1IdleImage = loadImage("gladiator_idle.png");
    p2IdleImage = loadImage("gladiator_idle_p2.png");

    p1attackImage = loadImage("axe_attack.png");
    p2attackImage = loadImage("sword_attack_p2.png");
}


// add graphics vars, sound vars and preload here

function setup() {
    createCanvas(windowWidth, 700);
    noStroke();
    // initialize players and set controls
    player1 = new Player(200, 200, p1IdleImage, p1attackImage);
    // enter control keys up down left right action
    // http://keycode.info/
    player1.controls(87, 83, 65, 68, 69);

    player2 = new Player(400, 200, p2IdleImage, p2attackImage);
    // fill in controls
    player2.controls(38, 40, 37, 39, 32);
}

function draw() {
    // draw the background
    background("tan");

    // update player movement/actions
    player1.update();
    player2.update();

    // attack logic

    // dectect if each players action area collides with other player
    var player1Colliding = player1.collide(player2);
    var player2Colliding = player2.collide(player1);

    // reset action
    if (actionHappened && !player1Colliding && !player2Colliding) {
        actionHappened = false;
    }

    // if players are colliding and no action happened in the last frame, detect which player is performing action

    if (!actionHappened) {
        if (player1.isPerformingAction && player2.isPerformingAction && player1Colliding && player2Collding) {
            // actions cancel each other out (?)
            // visualize
            fill('blue');
            rect(0, 0, width, height); // drawing bg color for example
            actionHappened = true;
        } else if (player1.isPerformingAction && player1Colliding) {
            // player1 scores action
            fill('green');
            rect(0, 0, width, height); // drawing bg color for example
            actionHappened = true;
            player2.health -= 1;
        } else if (player2.isPerformingAction && player2Colliding) {
            // player2 scores action
            fill('red');
            rect(0, 0, width, height); // drawing bg color for example
            actionHappend = true;
            player1.health -= 1;
        }
    }



    player1.draw();
    player2.draw();



    // draw health of each player
    fill('red');
    rect(10, 10, 10 * 5, 10);
    rect(width - 100, 10, 10 * 5, 10);

    fill('green');
    rect(10, 10, player1.health * 5, 10);
    rect(width - 100, 10, player2.health * 5, 10);

}
