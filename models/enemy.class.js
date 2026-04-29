class squid extends MoveableObject{
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
        let startFW = setInterval(() => {
            this.y -= 4;
            
            let i = this.currentImg % this.SWIM_IMGS.length;
            let path = this.SWIM_IMGS[i];
            this.img = this.imgCache[path];
            this.currentImg++;
            if(this.y < 0){clearInterval(start); startBW = setInterval(() => {
                this.y += 4;
                let i = this.currentImg % this.SWIM_IMGS_BW.length;
                let path = this.SWIM_IMGS_BW[i];
                this.img = this.imgCache[path];
                this.currentImg++;
                if(this.y > 399){
                    clearInterval(startBW);
                    this.y = 400;
                    this.animate();
                }
            }, 200/0.75)};
        }, 200/0.75);
    }
}