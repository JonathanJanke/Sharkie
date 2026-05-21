class Boss  extends MovableObject{

    height = 400;
    width= 340;

    health = 80;
    damage = 40;

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
            this.playAnimation(this.SWIM_IMGS);
        }, 100)
    }
}