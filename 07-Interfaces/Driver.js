"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CricketCoach_1 = require("./CricketCoach");
var GolfCoach_1 = require("./GolfCoach");
var myCricket = new CricketCoach_1.CricketCoach();
var myGolf = new GolfCoach_1.GolfCoach();
//declare an array of coaches
var theCoaches = [];
theCoaches.push(myCricket);
theCoaches.push(myGolf);
for (var _i = 0, theCoaches_1 = theCoaches; _i < theCoaches_1.length; _i++) {
    var temp = theCoaches_1[_i];
    console.log(temp.getDailyWorkout());
}
