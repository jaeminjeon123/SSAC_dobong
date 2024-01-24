class shape{
    constructor(width,height){
        this.width=width;
        this.height=height;
        
    
    }
     getarea() {
        let sum=this.width*this.height;
        return sum;
    }
    
    
    
}
let rect1=new shape(3,4);
console.log(rect1.getarea()); 