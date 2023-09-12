import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle"

let myShape = new Shape(10, 15);
console.log(myShape.getInfo());

let myCircle = new Circle(10, 15, 20);
console.log(myCircle.getInfo());

let myRecatngle = new Rectangle(10, 15, 20, 25);
console.log(myRecatngle.getInfo());