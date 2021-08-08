const Shape =require('./shape')

class Circle extends Shape{
    constructor(){
        super();
    }
    calculateArea(r){
        return (3.14 * r * r );
    }
}
module.exports=Circle;