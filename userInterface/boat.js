class Boat extends Thing {
	constructor(img) {

		let x = random(width);
		let y = height - img.height - random(100);

		super(x, y, img);

		this.xSpeed = random(boatMinSpeed, boatMaxSpeed);
		this.ySpeed = random(-2, 2);
	}

	update() {
		this.x += this.xSpeed + random(boatMinSpeed, boatMaxSpeed);
		this.y += this.ySpeed + random(-0.5, 0.5);

		// reset x position
		if (this.x > width) {
			this.x = -this.img.width;
		}

		// contain boat y 
		if (this.y < height * 2/3 ||
			this.y > height - boatImage.height) {
			this.ySpeed *= -1;
		}
	}
}