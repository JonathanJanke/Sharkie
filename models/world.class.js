class World {
    character = new Character();
    level = level1;
    ctx;
    keyboard;
    camera_x = -0;
    projectiles = [];
    statusBar = new StatusBar();
    poisonBar = new PoisonBar();
    coins = [new Coin(400, 100), new Coin(800, 200), new Coin(1200, 300), new Coin(1600, 150)
    ];
    poisons = [new Poison(500, 150), new Poison(900, 250), new Poison(1300, 350), new Poison(1700, 200)
    ];

    constructor (){
        this.ctx = canvas.getContext('2d');
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
        this.run();
        this.avoidStack();
    }

    setWorld() {
        this.character.world = this;
    }

    run(){
        setInterval(() => {
            this.checkCollisions();
            this.shootProjectile();
            if(this.projectiles.length > 0){
                this.checkHit();
            }
        }, 200);
    }

    checkCollisions(){
            this.level.enemies.forEach((enemie) => {
                if(this.character.isColliding(enemie)){
                    if (enemie instanceof Boss && !this.character.isHurt()) {
                        this.character.hit(enemie.damage);
                        this.statusBar.setPercentage(this.character.health);
                    }
                    else if (!this.character.isHurt()){
                        this.character.hit(enemie.damage);
                        this.statusBar.setPercentage(this.character.health);
                    }
                }
            })  
            this.level.barrierH.forEach((barrier) => {
                if(this.character.isColliding(barrier)){
                    this.character.rX += 0;
                    this.character.colliding = true;
                }else{
                    this.character.colliding = false;
                }
            })

            this.coins.forEach((coin) => {
                if(this.character.isColliding(coin)){
                    if(this.character.health < 91){
                        this.coins.splice(this.coins.indexOf(coin), 1);
                        this.character.coins += 1;
                        this.character.health += 10;
                        this.statusBar.setPercentage(this.character.health);
                }
                }
            })
            this.poisons.forEach((poison) => {
                if(this.character.isColliding(poison)){
                    if(this.character.health > 0){
                        this.poisons.splice(this.poisons.indexOf(poison), 1);
                        this.character.poison_collected += 1;
                        this.poisonBar.setPercentage(this.character.poison_collected);
                    }
                }
            })
    }

    checkHit () {
        this.projectiles = this.projectiles.filter((projectile) => {
            if (projectile.hasHit) {
                projectile.stop();
                return false;
            }

            projectile.getRealFrame();
            let hit = false;

            for (const enemy of this.level.enemies) {
                enemy.getRealFrame();

                if (projectile.isColliding(enemy)) {
                    console.log('Hit, enemy health: ' + enemy.health);
                    enemy.got_hit = true;
                    enemy.health -= 20;
                    projectile.hasHit = true;
                    projectile.stop();
                    hit = true;
                    break;
                }
            }

            return !hit;
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, 720, 480);
        
        this.ctx.translate(this.camera_x, 0);
        this.addObjToMap(this.level.backgroundObjects);
        
        this.ctx.translate(-this.camera_x, 0); //Back
        this.addObjToMap(this.statusBar);
        this.addObjToMap(this.poisonBar);
        this.ctx.translate(this.camera_x, 0); // Forward

        this.addToMap(this.character);
        this.addObjToMap(this.coins);
        this.addObjToMap(this.poisons);
        this.addObjToMap(this.level.enemies);
        this.addObjToMap(this.level.barrierH);
        this.addObjToMap(this.projectiles);

        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        })
    }

    addObjToMap(obj){
    if (Array.isArray(obj)) {
        obj.forEach(o => this.addToMap(o));
    } else {
        this.addToMap(obj);
    }
}


    addToMap(mo){
        if (mo.getRealFrame) {
            mo.getRealFrame();
        }

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
            this.projectiles.push(projectile);
        }
        if(this.keyboard.E == true){
        }
    }

    avoidStack(){
        setInterval(() => {
        this.level.enemies.forEach((enemie) => {
            this.level.enemies.forEach((enemy) => {
                if (enemie.isColliding(enemy) && enemie != enemy) {
                    if (enemie.x < enemy.x) {
                        enemie.x -= 60;}
                        else{
                        enemie.x += 60;}
                }
            });
        });
        }, 1000)
    }
}