class Squid extends MovableObject{
    y = 400;
    health = 40;
    damage = 5;

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

    got_hit = false;
    SWIM_IMGS = [
        './assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        './assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        './assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        './assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
    ]

    constructor () {
        super().loadImg('./assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImgs(this.SWIM_IMGS);

        this.x = 420 + Math.random()*500;
        this.health = 20;
        this.animate();
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
        }, 200 / 0.75);
    }
}