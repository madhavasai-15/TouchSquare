class Ground{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = displayWidth;
        this.height = displayWidth/10;
    };

    show(){
        fill(255);
        rect(this.x, this.y, this.width, this.height);
    };
}