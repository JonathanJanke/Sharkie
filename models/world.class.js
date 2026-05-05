class World {
    character = new Character();
    level = level1;
    ctx;
    keyboard;
    camera_x = -0;

    constructor (){
        this.ctx = canvas.getContext('2d');
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, 720, 480);
        
        this.ctx.translate(this.camera_x, 0);
        this.addObjToMap(this.level.backgroundObjects);
        this.addToMap(this.character);
        this.addObjToMap(this.level.enemies);
        this.addObjToMap(this.level.barrierH);

        
        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        })
    }

    addObjToMap(obj){
        obj.forEach(o => {
            this.addToMap(o);
        })
    }


    addToMap(mo){
        if (mo.oppositeDirection){
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }

        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        if(mo.oppositeDirection){
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }
}