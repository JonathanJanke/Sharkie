class EnhancedProjectile extends MovableObject {

    rX;
    rY;
    rW;
    rH;
    hasHit = false;
    moveInterval;

    constructor(x,y){
        super().loadImg('./assets/img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');
        this.x = x + 100;
        this.y = y + 56;
        this.height = 40;
        this.width = 40;
        this.shoot(this.x, this.y);
    }
    
        offset = {
        top: 10,
        right: 10,
        bottom: 20,
        left: 20
    }

    getRealFrame(){
        this.rX = this.x + this.offset.left;
        this.rY = this.y + this.offset.top;
        this.rW = this.width - this.offset.left - this.offset.right;
        this.rH = this.height - this.offset.top - this.offset.bottom;
    }


    shoot (x,y){

        this.getRealFrame();

        this.x = this.rX;
        this.y = this.rY;
        
        this.moveInterval = setInterval(()=> {
            this.x += 10;
        }, 25)
    }

    stop() {
        clearInterval(this.moveInterval);
    }

}