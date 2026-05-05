class Level {
    enemies;
    barrierH;
    backgroundObjects;
    level_end_x = 6350;

    constructor (enemies, barrierH, backgroundObjects) {
        this.enemies = enemies;
        this. barrierH = barrierH;
        this.backgroundObjects = backgroundObjects;
    }
}