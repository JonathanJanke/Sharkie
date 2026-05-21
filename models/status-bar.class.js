class StatusBar extends DrawableObject {
IMAGES_HEALTH = [
    'assets/img/4. Marcadores/green/Life/0_health.png',
    'assets/img/4. Marcadores/green/Life/20_health.png',
    'assets/img/4. Marcadores/green/Life/40_health.png',
    'assets/img/4. Marcadores/green/Life/60_health.png',
    'assets/img/4. Marcadores/green/Life/80_health.png',
    'assets/img/4. Marcadores/green/Life/100_health.png',
]

percentage = 100;

constructor(){
    super();
    this.loadImgs(this.IMAGES_HEALTH);
    this.x = 100;
    this.y = 0;
    this.width = 180;
    this.height = 60;
    this.setPercentage(100);
}

setPercentage(percentage){
    this.percentage = percentage;
    let path = this.IMAGES_HEALTH[this.resolveImageIndex()];
    this.img = this.imgCache[path];
    }

    resolveImageIndex(){
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 0) {
            return 1;
        } else {
            return 0;
        }
    }
}
