class World {
    character = new Character();
    enemies = [
        new squid(),
        new squid(),
        new squid(),
    ];
    barrierH = [new BarrierH()];
    backgroundObjects = [
        new BackgroundObject('./assets/img/3. Background/Dark/1.png')];
    ctx;

    constructor (){
        this.ctx = canvas.getContext('2d');
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, 720, 480);

        
        this.addObjToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjToMap(this.enemies);
        this.addObjToMap(this.barrierH);

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
            this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}