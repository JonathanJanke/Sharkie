class Character extends MoveableObject {
    
    height = 150;
    width= 150;
    y = 350;
    x = 100;
    world;

    SWIM_IMGS = [
        './assets/img/1.Sharkie/3.Swim/1.png',
        './assets/img/1.Sharkie/3.Swim/2.png',
        './assets/img/1.Sharkie/3.Swim/3.png',
        './assets/img/1.Sharkie/3.Swim/4.png',
        './assets/img/1.Sharkie/3.Swim/5.png',
        './assets/img/1.Sharkie/3.Swim/6.png'
    ]

    constructor () {

        super().loadImg('./assets/img/1.Sharkie/3.Swim/1.png');
        this.loadImgs(this.SWIM_IMGS);

        this.animate();
    }
    animate () {
        setInterval(()=>{
            if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x){
                this.x += 8;
                this.oppositeDirection = false;
            }
            if(this.world.keyboard.LEFT && this.x > 100){
                    this.x -= 8;
                    this.oppositeDirection = true;
            }
            if(this.world.keyboard.UP && this.y > -66){
                this.y -= 8;
            }
            if(this.world.keyboard.DOWN && this.y < 360){
                this.y += 8;
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60)

        setInterval(()=>{
            this.playAnimation(this.SWIM_IMGS);
        }, 100)
    }
};