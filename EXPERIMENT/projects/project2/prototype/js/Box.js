class Box{
	constructor(_x, _y, _z){
		this.pos = createVector(_x,
							   _y,
							   _z);
		this.rad = 200;
	}
	
	render(){
		
		push();
		translate(this.pos.x,
				 this.pos.y,
				 this.pos.z);
	
		box(this.rad);
		pop();
	}

	
}