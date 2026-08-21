class Boss  extends MovableObject{

    height = 400;
    width= 340;

    health = 80;
    damage = 40;
    chasing = false;
    biting = false;            // whether boss is currently performing a bite animation/action
    lastBite = 0;              // timestamp of last bite
    biteCooldown = 1000;       // ms between bites

    rX;
    rY;
    rW;
    rH;

    SWIM_IMGS = [
        './assets/img/2.Enemy/3 Final Enemy/2.floating/1.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/2.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/3.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/4.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/5.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/6.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/7.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/8.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/9.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/10.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/11.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/12.png',
        './assets/img/2.Enemy/3 Final Enemy/2.floating/13.png',
    ]

    HURT_IMGS = ['./assets/img/2.Enemy/3 Final Enemy/1.hurt/1.png',
                 './assets/img/2.Enemy/3 Final Enemy/1.hurt/2.png',
                 './assets/img/2.Enemy/3 Final Enemy/1.hurt/3.png',
                 './assets/img/2.Enemy/3 Final Enemy/1.hurt/4.png'
    ]

    DEAD_IMGS = ['assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
                 'assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
                 'assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
                 'assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
                 'assets/img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png',
    ]

    BITE_IMGS= ['./assets/img/2.Enemy/3 Final Enemy/3.attack/1.png',
                './assets/img/2.Enemy/3 Final Enemy/3.attack/2.png',
                './assets/img/2.Enemy/3 Final Enemy/3.attack/3.png',
                './assets/img/2.Enemy/3 Final Enemy/3.attack/4.png',
                './assets/img/2.Enemy/3 Final Enemy/3.attack/5.png',
                './assets/img/2.Enemy/3 Final Enemy/3.attack/6.png',
        ]

    offset = {
        top: 160,
        right: 30,
        bottom: 80,
        left: 40
    }

    constructor() {
        super().loadImg(this.SWIM_IMGS[0]);
        this.loadImgs(this.SWIM_IMGS);
        this.x = 3600;
        this.y = 100;
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
            if (this.biting) {
                this.playAnimation(this.BITE_IMGS);
            } else {
                this.playAnimation(this.SWIM_IMGS);
            }
        }, 100)
    }

    followCharacter(character) {
        if (character.x > 3000) {
            this.chasing = true;
            const directionX = Math.sign(character.x - this.x);
            const directionY = Math.sign(character.y - this.y);

            if (Math.abs(character.x - this.x) > 15) {
                this.x += directionX * 4;
            }

            if (Math.abs(character.y - this.y) > 15) {
                this.y += directionY * 2;
            }

            this.oppositeDirection = directionX > 0;

            // Use bounding-box collision to determine biting instead of a small raw coordinate threshold.
            if (this.getRealFrame) this.getRealFrame();
            if (character.getRealFrame) character.getRealFrame();

            if (this.isColliding && this.isColliding(character)) {
                const now = new Date().getTime();
                if (now - this.lastBite > this.biteCooldown) {
                    // perform bite: damage player and trigger bite animation state briefly
                    character.hit(this.damage);
                    this.lastBite = now;
                    this.biting = true;
                    setTimeout(() => { this.biting = false; }, 500);
                }
            } else {
                this.biting = false;
            }
        } else {
            this.chasing = false;
        }
    }
}