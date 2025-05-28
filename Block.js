class Block extends GameObject{
    constructor(container, x, y, width, height, velX, velY, color){
        super(container, x, y, width, height, velX, velY, color);

        this.div.style.borderRadius = 0+"px";
    }

    //메서드 오버라이딩
    tick(){
        this.x += this.velX;
        this.y += this.velY;
    }

    render(){
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    }

    //블럭 삭제
    remove(){
        this.container.removeChild(this.div);
    }
}