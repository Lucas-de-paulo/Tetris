const COLUMN = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;

function startGame() {
    myGame.start();
}

const myGame = {
    canvas: document.createElement('canvas'),
    start: function() {
        this.canvas.height = ROWS*BLOCK_SIZE;
        this.canvas.width = COLUMN*BLOCK_SIZE;
        this.ctx = this.canvas.getContext("2d");
        this.ctx.scale(BLOCK_SIZE,BLOCK_SIZE);
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}

startGame();