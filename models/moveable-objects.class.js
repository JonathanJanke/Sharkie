class MoveableObject {
    x = 120;
    y = 400;
    height = 150;
    width = 100;
    img;
    imgCache = {};
    currentImg = 0;

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
}