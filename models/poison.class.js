class Poison extends MovableObject{

    height = 80;
    width = 60;

    rX;
    rY;
    rW;
    rH;

    
    offset = {
        top: 10,
        right: 10,
        bottom: 20,
        left: 10
    }

    IMGS = ['assets/img/4. Marcadores/Posión/Animada/1.png',
            'assets/img/4. Marcadores/Posión/Animada/2.png',
            'assets/img/4. Marcadores/Posión/Animada/3.png',
            'assets/img/4. Marcadores/Posión/Animada/4.png',
            'assets/img/4. Marcadores/Posión/Animada/5.png',
            'assets/img/4. Marcadores/Posión/Animada/6.png',
            'assets/img/4. Marcadores/Posión/Animada/7.png',
            'assets/img/4. Marcadores/Posión/Animada/8.png',
    ]

     constructor (x, y) {
        super().loadImg(this.IMGS[0]);
        this.loadImgs(this.IMGS);
        this.x = x;
        this.y = y;
        this.getRealFrame();
        this.animate();
    }

    getRealFrame(){
        this.rX = this.x + this.offset.left;
        this.rY = this.y + this.offset.top;
        this.rW = this.width - this.offset.left - this.offset.right;
        this.rH = this.height - this.offset.top - this.offset.bottom;
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMGS);
        }, 200);
    }
}