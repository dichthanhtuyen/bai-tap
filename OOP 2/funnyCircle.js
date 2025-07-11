class Circle {
    x;
    y;
    radius;
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
}

function getRandomHex(){
    return Math.floor(Math.random()*255);
}

function getRandomColor(){
    let r = getRandomHex();
    let g = getRandomHex();
    let b = getRandomHex();
    return `rgb(${r},${g},${b})`;
}

function createCircle(){
let ctx = document.getElementById("myCanvas").getContext("2d");
let radius = Math.floor(Math.random()*80);
let color = getRandomColor();
let x = Math.random()*window.innerWidth;
let y = Math.random()*window.innerHeight;
let circle = new Circle(x, y, radius);
ctx.beginPath();
ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
ctx.strokeStyle = color;
ctx.stroke();
}

function multiCircle(){
    for(let i = 0; i<=30;i++){
        createCircle()
    }
}

multiCircle();
