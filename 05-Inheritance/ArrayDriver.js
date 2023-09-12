"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myShape = new Shape_1.Shape(10, 15);
var myCircle = new Circle_1.Circle(10, 15, 20);
var myRecatngle = new Rectangle_1.Rectangle(10, 15, 20, 25);
//Declare an arrays of shape
var theShapes = [];
//add the shapes to the array
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRecatngle);
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var temp = theShapes_1[_i];
    console.log(temp.getInfo());
}
