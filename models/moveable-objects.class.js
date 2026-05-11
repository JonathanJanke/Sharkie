class MovableObject {
    x = 120;
    y = 400;
    height = 150;
    width = 100;
    img;
    imgCache = {};
    currentImg = 0;
    oppositeDirection = false;

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
    playAnimation(SWIM_IMGS){
        
            let i = this.currentImg % this.SWIM_IMGS.length;
            let path = this.SWIM_IMGS[i];
            this.img = this.imgCache[path];
            this.currentImg++;
    }

    drawCollissionFrame(ctx, mo){
        
        if(this instanceof Character || this instanceof Squid || this instanceof Boss){
            ctx.beginPath();
            ctx.lineWidth = "2";
            ctx.strokeStyle = "blue";
            ctx.rect(mo.x, mo.y, mo.width, mo.height);
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
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }
}