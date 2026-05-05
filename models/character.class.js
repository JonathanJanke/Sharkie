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
            if(this.world.keyboard.RIGHT){
                this.x += 8;
                this.oppositeDirection = false;
            }
            if(this.world.keyboard.LEFT){
                this.x -= 8;
                this.oppositeDirection = true;
            }
            if(this.world.keyboard.UP){
                this.y -= 8;
            }
            if(this.world.keyboard.DOWN){
                this.y += 8;
            }
            this.world.camera_x = -this.x;
        }, 1000 / 60)

        setInterval(()=>{
            let i = this.currentImg % this.SWIM_IMGS.length;
            let path = this.SWIM_IMGS[i];
            this.img = this.imgCache[path];
            this.currentImg++;
        }, 100)
    }
    
    moveLeft() {

    }
    moveRight(){

    }
    moveUp() {

    }
    moveDown() {

    }
};