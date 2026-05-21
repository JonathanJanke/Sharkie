class PoisonBar extends DrawableObject {
IMAGES_HEALTH = [
    'assets/img/4. Marcadores/orange/0_ copia.png',
    'assets/img/4. Marcadores/orange/20_ copia.png',
    'assets/img/4. Marcadores/orange/40_ copia.png',
    'assets/img/4. Marcadores/orange/60_ copia.png',
    'assets/img/4. Marcadores/orange/80_ copia.png',
    'assets/img/4. Marcadores/orange/100_ copia.png',
]

percentage = 0;

constructor(){
    super();
    this.loadImgs(this.IMAGES_HEALTH);
    this.x = 100;
    this.y = 50;
    this.width = 160;
    this.height = 60;
    this.setPercentage(0);
}

setPercentage(percentage){
    this.percentage = percentage;
    let path = this.IMAGES_HEALTH[this.resolveImageIndex()];
    this.img = this.imgCache[path];
    }

    resolveImageIndex(){
        if (this.percentage == 5) {
            return 5;
        } else if (this.percentage == 4) {
            return 4;
        } else if (this.percentage == 3) {
            return 3;
        } else if (this.percentage == 2) {
            return 2;
        } else if (this.percentage == 1) {
            return 1;
        } else {
            return 0;
        }
    }
}
