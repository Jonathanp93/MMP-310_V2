// create player variables
var player1;
var player2;

// global to prevent spamming actions
var actionHappened = false;

// add graphics vars, sound vars and preload here
preload() {

    this.walk = loadSpriteSheet('images/collosseum/walk.png', 299, 437, 3);
    this.stand = loadSpriteSheet('images/collosseum/idle.png', 414, 506, 1);
    this.attack = loadSpriteSheet('images/collosseum/attack.png', 533, 510, 2);
    /*this.map = new Map();*/

    /*this.characterKnight.idle2 = loadSpriteSheet('images/collosseum/knight_idle', 416, 448, 3);
    this.characterKnight.walk = loadSpriteSheet('images/collosseum/knight_walk', 416, 432, 3);
    this.characterKnight.attack = loadSpriteSheet('images/collosseum/knight_attack', 414, 477, 2);
    this.map = new Map();*/
    //	this.map.preload('data/jonathan.json');

    //	this.bg = loadSound('sounds/nelson/retromusic4.m4a');


    //	this.walkSound = loadSound('sounds/nelson/walking.wav');


    //	this.walkSound.playMode();


    //        this.woodsSheet = loadSpriteSheet('images/Nelson/background.png', 224, 224, 2);
    //	var npcSheet = loadSpriteSheet('images/Nelson/monster1.png', 48, 204, 4);
    //	this.npc = new NPC(500, 500, npcSheet);
    //	var npcSheet = loadSpriteSheet('images/Nelson/monster2.png', 192, 352, 5);
    //	this.npc = new NPC(800, 800, npcSheet);
    //	var npcSheet = loadSpriteSheet('images/Nelson/monster3.png', 192, 282, 4);
    //	this.npc = new NPC(600, 600, npcSheet);
    //make sure to change name of npcsheetand this.npc
}



function setup() {
    createCanvas(600, 400);
    noStroke();

    const animations = {
        walking: loadAnimation(this.walk),
        standing: loadAnimation(this.stand),
        attack: loadAnimation(this.attack),
    }

    // initialize players and set controls
    player1 = new Player(animations, 200, 200);
    // enter control keys up down left right action
    // http://keycode.info/
    player1.controls(87, 83, 65, 68, 69);

    player2 = new Player(animations, 400, 200);
    // fill in controls
    player2.controls(38, 40, 37, 39, 32);
}

function draw() {
    // draw the background
    background("tan");

    textAlign(CENTER);
    textSize(30);
    text('move the character with arrows', width / 2, 100);

    // update player movement/actions


    /* user input - move character around */


    var isWalking = false;



    player1.update(); {

        if (keyIsDown(RIGHT_ARROW)) {
            this.character.speedX = 5;
            isWalking = true;
        } else if (keyIsDown(LEFT_ARROW)) {
            this.character.speedX = -5;
            isWalking = true;
        } else {
            this.character.speedX = 0;
        }

        if (keyIsDown(DOWN_ARROW)) {
            this.character.speedY = 5;
            isWalking = true;
        } else if (keyIsDown(UP_ARROW)) {
            this.character.speedY = -5;
            isWalking = true;
        } else {
            this.character.speedY = 0;
        }

    }

    player2.update(); {

        if (keyIsDown(68)) {
            this.character2.speedX = 1;
            isWalkingPlayer2 = true;
        } else if (keyIsDown(65)) {
            this.character2.speedX = -1;
            isWalkingPlayer2 = true;
        } else {
            this.character2.walk.speedX = 0;
        }


        if (keyIsDown(83)) {
            this.character2.walk.speedY = 5;
            isWalkingPlayer2 = true;
        } else if (keyIsDown(87)) {
            this.character2.speedY = -5;
            isWalkingPlayer2 = true;
        } else {
            this.character2.walk.speedY = 0;
        }
    }

    if (isWalking) {
        this.character.changeAnimation('walking');

    } else if (keyIsDown(32)) {
        this.character.changeAnimation('attack');

    } else {
        this.character.changeAnimation('standing');
    }


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



    player1.draw("idle.png");
    player2.draw();


    // draw health of each player
    fill('red');
    rect(10, 10, 10 * 5, 10);
    rect(width - 100, 10, 10 * 5, 10);

    fill('green');
    rect(10, 10, player1.health * 5, 10);
    rect(width - 100, 10, player2.health * 5, 10);

}
