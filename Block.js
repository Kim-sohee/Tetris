class Block extends GameObject{
    constructor(container, x, y, width, height, velX, velY, color){
        super(container, x, y, width, height, velX, velY, color);
    }

    //메서드 오버라이딩
    tick(){
        this.x += this.velX;
        this.y += this.velY;
    }

    render(){
        //여기서 충돌 검사?

        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    }
}