class Character extends MovableObject {
    
    height = 150;
    width= 150;
    y = 350;
    x = 100;

    health = 100;

    rX;
    rY;
    rW;
    rH;

    coins = 0;
    poison_collected = 0;
    world;
    colliding = false;
    deadAnimationStarted = false;

    SWIM_IMGS = [
        './assets/img/1.Sharkie/3.Swim/1.png',
        './assets/img/1.Sharkie/3.Swim/2.png',
        './assets/img/1.Sharkie/3.Swim/3.png',
        './assets/img/1.Sharkie/3.Swim/4.png',
        './assets/img/1.Sharkie/3.Swim/5.png',
        './assets/img/1.Sharkie/3.Swim/6.png'
    ]

    HURT_IMGS = [
        'assets/img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'assets/img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'assets/img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'assets/img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        'assets/img/1.Sharkie/5.Hurt/1.Poisoned/5.png',
    ]

    DEAD_IMGS = [
        './assets/img/1.Sharkie/6.dead/1.Poisoned/1.png',
        './assets/img/1.Sharkie/6.dead/1.Poisoned/2.png',
        './assets/img/1.Sharkie/6.dead/1.Poisoned/3.png',
        './assets/img/1.Sharkie/6.dead/1.Poisoned/4.png',
        './assets/img/1.Sharkie/6.dead/1.Poisoned/5.png',
        './assets/img/1.Sharkie/6.dead/1.Poisoned/6.png',
        './assets/img/1.Sharkie/6.dead/1.Poisoned/7.png',
        './assets/img/1.Sharkie/6.dead/1.Poisoned/8.png',
        './assets/img/1.Sharkie/6.dead/1.Poisoned/9.png',
        './assets/img/1.Sharkie/6.dead/1.Poisoned/10.png',
        './assets/img/1.Sharkie/6.dead/1.Poisoned/11.png',
        './assets/img/1.Sharkie/6.dead/1.Poisoned/12.png',
    ]

    offset = {
        top: 70,
        right: 30,
        bottom: 40,
        left: 50
    }

    constructor () {

        super().loadImg('./assets/img/1.Sharkie/3.Swim/1.png');
        this.loadImgs(this.SWIM_IMGS);
        this.loadImgs(this.HURT_IMGS);
        this.loadImgs(this.DEAD_IMGS);

        this.animate();
    }

    getRealFrame(){
        this.rX = this.x + this.offset.left;
        this.rY = this.y + this.offset.top;
        this.rW = this.width - this.offset.left - this.offset.right;
        this.rH = this.height - this.offset.top - this.offset.bottom;
    }

    animate () {
        setInterval(()=>{
            if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x){
                if(this.colliding === true){
                    this.x += 0;
                }else{      
                console.log(this.rX);
                this.x += 8;
                this.oppositeDirection = false;
                }
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
            if (this.isDead()) {
                if (!this.deadAnimationStarted) {
                    this.deadAnimationStarted = true;
                    this.currentImg = 0;
                }

                if (this.currentImg < this.DEAD_IMGS.length - 1) {
                    this.playAnimation(this.DEAD_IMGS);
                } else {
                    this.img = this.imgCache[this.DEAD_IMGS[this.DEAD_IMGS.length - 1]];
                }
            } else if(this.isHurt()) {
                this.playAnimation(this.HURT_IMGS);
            }else {
                this.playAnimation(this.SWIM_IMGS);
            }
        }, 100)

    }
};