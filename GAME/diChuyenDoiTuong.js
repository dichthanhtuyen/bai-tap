
class Character {
    image;
    top;
    left;
    size;
    constructor(image, top, left, size) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
    }
    getCharacter() {
        return `<img width = "${this.size}" height = "${this.size}" src = "${this.image}" style = "top: ${this.top}px; left: ${this.left}px; position:absolute;" />`
    }
    moveRight() {
        this.left += 20;
    }
    moveLeft() {
        this.left -= 20;
    }
    moveUp() {
        this.top -= 20;
    }
    moveDown() {
        this.top += 20;
    }
}

let Shin = new Character('Shin.jpg', 250, 200, 100);

function render() {
    document.getElementById("game").innerHTML = Shin.getCharacter();
}

document.addEventListener("keydown", function (e) {
    switch (e.key) {
        case "ArrowRight":
            Shin.moveRight();
            break;
        case "ArrowLeft":
            Shin.moveLeft();
            break;
        case "ArrowUp":
            Shin.moveUp();
            break;
        case "ArrowDown":
            Shin.moveDown();
            break;
    }
    render();
})
render();


