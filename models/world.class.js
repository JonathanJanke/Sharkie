class World {
    character = new Character();
    level = level1;
    ctx;
    keyboard;
    camera_x = -0;
    projectile = [];

    constructor (){
        this.ctx = canvas.getContext('2d');
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    run(){
        setInterval(() => {
            this.checkCollisions();
            this.shootProjectile();
        }, 200);
    }

    checkCollisions(){
            this.level.enemies.forEach((enemie) => {
                if(this.character.isColliding(enemie)){
                    console.log('Collision with character',enemie);
                }
            })
    }

    draw() {
        this.ctx.clearRect(0, 0, 720, 480);
        
        this.ctx.translate(this.camera_x, 0);
        this.addObjToMap(this.level.backgroundObjects);
        this.addToMap(this.character);
        this.addObjToMap(this.level.enemies);
        this.addObjToMap(this.level.barrierH);
        this.addObjToMap(this.projectile);

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
            mo.flipImg(this.ctx, mo);
        }
        
        mo.drawCollissionFrame(this.ctx, mo);

        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);

        if(mo.oppositeDirection){
            mo.unflipImg(this.ctx, mo);
        }
    }

    shootProjectile () {
        if(this.keyboard.Q == true){
            let projectile = new Projectile(this.character.x, this.character.y);
            this.projectile.push(projectile);
        }
        if(this.keyboard.E == true){
        }
    }

}