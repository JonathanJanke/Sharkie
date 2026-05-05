class World {
    character = new Character();
    enemies = [
        new squid(),
        new squid(),
        new squid(),
    ];
    barrierH = [new BarrierH()];
    backgroundObjects = [
        new BackgroundObject('./assets/img/3. Background/Layers/5. Water/D1.png', 0, 0),
        new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/D1.png', 0, 0),
        new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/D1.png', 0, 0),

        new BackgroundObject('./assets/img/3. Background/Layers/5. Water/D2.png', 1000, 0),
        new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/D2.png', 1000, 0),
        new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/D2.png', 1000, 0),

        new BackgroundObject('./assets/img/3. Background/Layers/5. Water/D1.png', 2000, 0),
        new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/D1.png', 2000, 0),
        new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/D1.png', 2000, 0),

        new BackgroundObject('./assets/img/3. Background/Layers/5. Water/D2.png', 3000, 0),
        new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/D2.png', 3000, 0),
        new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/D2.png', 3000, 0),

        new BackgroundObject('./assets/img/3. Background/Layers/5. Water/D1.png', 4000, 0),
        new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/D1.png', 4000, 0),
        new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/D1.png', 4000, 0),

        new BackgroundObject('./assets/img/3. Background/Layers/5. Water/D2.png', 5000, 0),
        new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/D2.png', 5000, 0),
        new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/D2.png', 5000, 0),
        
        new BackgroundObject('./assets/img/3. Background/Layers/5. Water/D1.png', 6000, 0),
        new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/D1.png', 6000, 0),
        new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/D1.png', 6000, 0),
    ];

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
        this.addObjToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjToMap(this.enemies);
        this.addObjToMap(this.barrierH);

        
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