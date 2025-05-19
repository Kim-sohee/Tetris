class Block{
    constructor(container, x, y, width, height, color){
        this.container = container;
        this.div = document.createElement('div');
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;

        //style
        this.div.style.position = 'absolute';
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
        this.div.style.left = this.x + "px"; 
        this.div.style.top = this.y + "px"; 

        this.div.style.backgroundColor = this.color;
        this.div.classList.add('grid-cell', 'filled');

        this.container.appendChild(this.div);
        
    }
}