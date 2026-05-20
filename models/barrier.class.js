class BarrierH extends MovableObject {

    rX;
    rY;
    rW;
    rH;
    
        offset = {
        top: 10,
        right: 10,
        bottom: 20,
        left: 20
    }
        constructor () {
        super().loadImg('./assets/img/3. Background/Barrier/3.png');

        this.x = 280;
        this.y = 330;
    }

    getRealFrame(){
        this.rX = this.x + this.offset.left;
        this.rY = this.y + this.offset.top;
        this.rW = this.width - this.offset.left - this.offset.right;
        this.rH = this.height - this.offset.top - this.offset.bottom;
    }

}