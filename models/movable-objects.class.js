class MovableObject extends DrawableObject{
    oppositeDirection = false;
    lastHit = 0;

    playAnimation(images){
        let i = this.currentImg % images.length;
        let path = images[i];
        this.img = this.imgCache[path];
        this.currentImg++;
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