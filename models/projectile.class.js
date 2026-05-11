class Projectile extends MovableObject {

    constructor(x,y){
        super().loadImg('./assets/img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = x + 100;
        this.y = y + 56;
        this.height = 40;
        this.width = 40;
        this.shoot(this.x, this.y);
    }

    shoot (x,y){
        this.x = x;
        this.y = y;
        
        setInterval(()=> {
            this.x += 10;
        }, 25)
    }

}