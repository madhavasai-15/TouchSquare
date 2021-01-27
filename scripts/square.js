class Square{
    constructor(){
        this.x = random(displayWidth-displayWidth/1.1, displayWidth-displayWidth/5);
        this.y = displayHeight-displayHeight-50;
        this.width = 100;
        this.height = 100;
        this.color = rgb(0, 255, 0);
    };

    update(){
        this.y += 5;
    };

    touched(){
        if(mouseX > this.x-this.width/2 && mouseX < this.x+this.width/2 && mouseY > this.y-this.height/2 && mouseY < this.y+this.height/2){
            this.x = random(displayWidth-displayWidth/1.1, displayWidth-displayWidth/5);
            this.y = displayHeight-displayHeight-50;
            score++;
            popS.play();
        }
    };

    over(object){
        if(this.y > object.y-object.height/2){
            GameState = "Game Over";
        }
    };

    show(){
        fill(this.color);
        rect(this.x, this.y, this.width, this.height);
    };
}