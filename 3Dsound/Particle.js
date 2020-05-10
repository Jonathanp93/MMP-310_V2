class Particle {
	constructor(position) {
		this.position = position.copy();
		this.lifespan = 300;
		this.speed = createVector(random(-2, 2), 2, random(-2, 2));
		this.acceleration = createVector(0.01, 0.1, 0);
		this.rotation = createVector(0, 0.5, 0.1);
		this.rotationSpeed = createVector(random(0.01), random(0.01), random(0.01));

		this.color = createVector(random(20), random(20), random(50, 100));
		this.colorSpeed = createVector(0, 1, 0);
	}

	update() {
		this.position.add(this.speed);
		this.speed.add(this.acceleration);
		this.color.add(this.colorSpeed);
		this.rotation.add(this.rotationSpeed);
		this.lifespan -= 1;
        
        
        // torus through hoop 
		if (this.position.y < 250 / 2){
			this.speed.y *= -1;
			this.acceleration.x *= -1;
            random(powerups).play();
            
			
            }
        
        if (this.position.z < 300 / 2){
			this.speed.z *= -1;
			this.acceleration.x *= 1;
            /*random(powerups).play();*/
			
            }
        
        if (this.position.x < 100 / 2){
			this.speed.x *= -1;
			this.acceleration.x *= -1;
            /*explosion.play();*/
			
            }
	}
    

	display() {
		push();

		// move context to particle position
		translate(this.position.x, this.position.y, this.position.z);
		rotateX(this.rotation.x);
		rotateY(this.rotation.y);
		rotateZ(this.rotation.z);

		// ambientMaterial(this.color.x, this.color.y, this.color.z);
		// specularMaterial(this.color.x, this.color.y, this.color.z, 200);
		shininess(50);
		emissiveMaterial(this.color.x, this.color.y, this.color.z, 255);

		// start composition

		// cone
    /*rotateX(rotX.value());
    rotateY(rotY.value());
    rotateZ(rotZ.value());*/

    push();
    texture(img);
    cone(70, 140);
    pop();

    push();
    translate(0, -100, 0);
    ambientMaterial(153, 76, 0);
    sphere(70);
    pop();


    push();
    translate(50, -190, 0);
    normalMaterial();
    torus(20, 15);
    pop();

    push();
    translate(-50, -190, 0);
    normalMaterial();
    torus(20, 15);
    pop();
    
    


		/*for (let x = -5; x < 5; x += 1.5) {
			push();
			translate(x, 0, 0);
			box(1, 2);	
			pop();
		}
		pop();
*/

		// end composition
		/*pop();*/
	}

	isDead() {
		return this.lifespan < 0;
	}
}