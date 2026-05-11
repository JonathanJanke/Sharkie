class Squid extends MovableObject{
    y = 400;
    SWIM_IMGS = [
        './assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        './assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        './assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        './assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
    ]
    SWIM_IMGS_BW = [
        './assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
        './assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        './assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        './assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
    ]

    constructor () {
        super().loadImg('./assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImgs(this.SWIM_IMGS);

        this.x = 380 + Math.random()*500;
        this.animate();
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