class squid extends MoveableObject{
    
    SWIM_IMGS = [
        './assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        './assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        './assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        './assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
    ]

    constructor () {
        super().loadImg('./assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImgs(this.SWIM_IMGS);

        this.x = 380 + Math.random()*500;
        this.animate();
    }
    animate () {
        setInterval(() => {
            this.y -= 4;
            
            let i = this.currentImg % this.SWIM_IMGS.length;
            let path = this.SWIM_IMGS[i];
            this.img = this.imgCache[path];
            this.currentImg++;
        }, 200/0.75);
    }
}