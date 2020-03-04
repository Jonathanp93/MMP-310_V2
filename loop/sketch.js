var bunny
var grayBunny


function preload(){
    bunny = loadImage("bunny.png");
    grayBunny = loadImage("grayBunny.png");
    
}

function setup() {
    createCanvas(windowWidth, 600);
    drawCharacters();
}

function mouseClicked() {
    //	drawCharacters();
   /* console.log(mouseX, width / 2);*/


    if (mouseX < width / 2) {
        // user clicked left
    } else {
        // user clicked right
        drawCharacters();
    }
}

function drawCharacters() {
        var r = random(200);
        var g = random(150, 255);
        var b = random(210); 
        background(r,g,b);

    for (let x = 10; x < width; x += 100){
        image(bunny, x, random(100),random(500));
        image(grayBunny, x - 50 , random(100));
      /*  
        var r = random(200);
        var g = random(150, 255);
        var b = random(200); 


        var s = random(10, 50); // size 
        var y = random(height / 3, height * 2 / 3);*/

        /*fill(r, g, b);
        */


        /*ellipse(x + 25, y, 75); // face
        fill("white");
        triangle(x, y + 10, x + 20, y + 20, x + 40, y + 10, 100); //mouth
        rect(x + s/2, y - 20, s, s/2); // right eye
        rect(x - s/2, y - 20, s, s/2); // left eye
        */
    }
}
