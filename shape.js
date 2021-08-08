class Shape{
    constructor(){
        this.color="blue";
    }
    drawShape(){
        console.log("Draw function");
    }
    calculateArea(param){
        return param*param;
    }
}
module.exports=Shape;