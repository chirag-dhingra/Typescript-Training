import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle"

let myShape = new Shape(10, 15);
let myCircle = new Circle(10, 15, 20);
let myRecatngle = new Rectangle(10, 15, 20, 25);
//Declare an arrays of shape
let theShapes : Shape[] = [];

//add the shapes to the array
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRecatngle);

for(let temp of theShapes){
    console.log(temp.getInfo());
}

