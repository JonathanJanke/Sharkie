let canvas;
let keyboard = new Keyboard();
enemies = level1.enemies;

function init () {
    canvas = document.getElementById('canvas');
    world = new World(canvas);
}

document.addEventListener("keydown", (e) => {
    if(e.keyCode == 87){
        keyboard.UP = true;
    }
    if(e.keyCode == 68){
        keyboard.RIGHT = true;
    }
    if(e.keyCode == 65){
        keyboard.LEFT = true;
    }
    if(e.keyCode == 83){
        keyboard.DOWN = true;
    }
    if(e.keyCode == 81){
        keyboard.Q = true;
        enemies.forEach((enemy) => {enemy.got_hit = false;})
    }
    if(e.keyCode == 69){
        keyboard.E = true;
        enemies.forEach((enemy) => {enemy.got_hit = false;})
    }
})

document.addEventListener("keyup", (e) => {
    if(e.keyCode == 87){
        keyboard.UP = false;
    }
    if(e.keyCode == 68){
        keyboard.RIGHT = false;
    }
    if(e.keyCode == 65){
        keyboard.LEFT = false;
    }
    if(e.keyCode == 83){
        keyboard.DOWN = false;
    }
    if(e.keyCode == 81){
        keyboard.Q = false;
    }
    if(e.keyCode == 69){
        keyboard.E = false;
    }
})