class MovableObject {
    x = 120;
    y = 400;
    height = 150;
    width = 100;
    img;
    imgCache = {};
    currentImg = 0;
    oppositeDirection = false;
    lastHit = 0;

    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImgs(arr){
        arr.forEach((path) => {   
            let img = new Image();
            img.src = path;
            this.imgCache[path] = img;
        });
    }
    playAnimation(images){
        let i = this.currentImg % images.length;
        let path = images[i];
        this.img = this.imgCache[path];
        this.currentImg++;
    }

    drawCollissionFrame(ctx, mo){
        
        if(this instanceof Character || this instanceof Squid || this instanceof Boss){
            ctx.beginPath();
            ctx.lineWidth = "2";
            ctx.strokeStyle = "blue";
            this.getRealFrame();
            ctx.rect(this.rX, this.rY, this.rW, this.rH);
            ctx.stroke();
            }
        }

    flipImg(ctx, mo){
        ctx.save();
        ctx.translate(mo.width, 0);
        ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }
    
    unflipImg(ctx, mo){
        mo.x = mo.x * -1;
        ctx.restore();
    }

    isColliding(mo){
        return this.rX + this.rW > mo.rX &&
            this.rY + this.rH > mo.rY &&
            this.rX < mo.rX + mo.rW &&
            this.rY < mo.rY + mo.rH;
    }

    hit(damage) {
        this.health -= damage;
        if (this.health < 0) {
            this.health = 0;
        }else{
            this.lastHit = new Date().getTime();
        }
    }

    isHurt (){
        let timepassed = new Date().getTime() - this.lastHit; // Differenc in ms
        timepassed = timepassed / 1000; // Differenc in s
        return timepassed < 1;
    }

    isDead(){
        return this.health <= 0;
    }
}