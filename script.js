let canvas;
let ctx;
let character = new Character();
let enemies = [
    new squid(),
    new squid(),
    new squid(),
];

function init () {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    
}