class Squid extends MovableObject{
    y = 400;
    health = 40;
    damage = 10;

    rX;
    rY;
    rW;
    rH;

    
    offset = {
        top: 20,
        right: 20,
        bottom: 30,
        left: 20
    }

    removeAfterDeath = false;
    deadAnimationStarted = false;
    got_hit = false;
    SWIM_IMGS = [
        './assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        './assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        './assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        './assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
    ]

    DEAD_IMGS = ['assets/img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
                 'assets/img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
                 'assets/img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
                 'assets/img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png',
        ]

    constructor () {
        super().loadImg('./assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImgs(this.SWIM_IMGS);
        this.loadImgs(this.DEAD_IMGS);

        this.x = 420 + Math.random()*500;
        this.animate();
        this.checkDeath();
    }

    getRealFrame(){
        this.rX = this.x + this.offset.left;
        this.rY = this.y + this.offset.top;
        this.rW = this.width - this.offset.left - this.offset.right;
        this.rH = this.height - this.offset.top - this.offset.bottom;
    }

    animate () {
        this.movingUp = false;

        setInterval(() => {
            if (!this.deadAnimationStarted) {
                this.playAnimation(this.SWIM_IMGS);

                if (!this.movingUp) {
                    this.y -= 4;

                    if (this.y < 0) {
                        this.movingUp = true;
                    }
                } else {
                    this.y += 4;

                    if (this.y >= 440) {
                        this.movingUp = false;
                    }
                }
            }
        }, 200 / 0.75);
    }

    checkDeath() {
        setInterval(() => {
            if (this.health <= 0) {
                if (!this.deadAnimationStarted) {
                    this.deadAnimationStarted = true;
                    this.currentImg = 0;
                }

                if (this.currentImg < this.DEAD_IMGS.length) {
                    this.playAnimation(this.DEAD_IMGS);
                } else {
                    this.img = this.imgCache[this.DEAD_IMGS[this.DEAD_IMGS.length - 1]];
                    this.removeAfterDeath = true;
                }
            }
        }, 100);
    }
} 