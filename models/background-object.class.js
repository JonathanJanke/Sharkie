class BackgroundObject extends MoveableObject{

    width = 1000;
    height = 480;
    constructor (imagePath, x, y){
        super().loadImg(imagePath);
        this.x = x;
        this.y = y;
    }
}