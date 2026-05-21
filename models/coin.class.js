class Coin extends DrawableObject{

    height = 60;
    width = 60;

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

     constructor (x, y) {
        super().loadImg('assets/img/4. Marcadores/1. Coins/1.png');
        this.x = x;
        this.y = y;
        this.getRealFrame();
    }

    getRealFrame(){
        this.rX = this.x + this.offset.left;
        this.rY = this.y + this.offset.top;
        this.rW = this.width - this.offset.left - this.offset.right;
        this.rH = this.height - this.offset.top - this.offset.bottom;
    }
}