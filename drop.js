class Drop {
    constructor(x,y) {
        this.radius = random(20,50);
        this.positionX = x;
        this.positionY = y;
        this.image = loadImage("images/drop.png");
    }

    show() {
        imageMode(CENTER);
        image(this.image,this.positionX,this.positionY,this.radius,this.radius);
    }

    velocity() {
        this.positionY = this.positionY + random(20,30);
        if(this.positionY > height) {
            this.positionY = 0;
        }
    }

} 
