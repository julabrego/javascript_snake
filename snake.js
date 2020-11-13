function Snake() {
    this.x = 0;
    this.y = 0;
    this.maxSpeed = 250;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];

    this.draw = function(){
        ctx.fillStyle = "#FFFFFF";

        for (let i=0; i<this.tail.length; i++){
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }

        ctx.fillRect(this.x, this.y, scale, scale);
    }

    this.update = function() {
        for (let i=0; i<this.tail.length -1; i++){
            this.tail[i] = this.tail[i+1];
        }

        this.tail[this.total - 1] = { x: this.x, y: this.y }


        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x > canvas.width) {
            this.x = 0;
        }

        if(this.x < 0) {
            this.x = canvas.width;
        }

        if(this.y >= canvas.height) {
            this.y = 0;
        }

        if(this.y < 0) {
            this.y = canvas.height -10;
        }
    }

    var prevDirection;

    this.changeDirection = function(direction){
        switch(direction){
            case 'Up':
                if (prevDirection == 'Down') break;
                this.xSpeed = 0;
                this.ySpeed = -scale * 1;
                prevDirection = direction;
                break;
            case 'Down':
                if (prevDirection == 'Up') break;
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
                prevDirection = direction;
                break;
            case 'Left':
                if (prevDirection == 'Right') break;
                this.xSpeed = -scale * 1;
                this.ySpeed = 0;
                prevDirection = direction;
                break;
            case 'Right':
                if (prevDirection == 'Left') break;
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
                prevDirection = direction;
                break;
        }
    }

    this.eat = function(){
        if (this.x === fruit.x && this.y === fruit.y){
            this.total++;
            this.maxSpeed *= .895;
            return true;
        }

        return false;
    }

    this.checkCollision = function() {
        for(var i=0; i<this.tail.length; i++){
            if(this.x === this.tail[i].x && this.y === this.tail[i].y){
                this.total = 0;
                this.maxSpeed = 250;
                this.tail = [];
                ui.state.playing = 0;
                startBtn.disabled = false;

            }
        }
    }
}