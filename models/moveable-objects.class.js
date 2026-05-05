class MoveableObject {
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
}