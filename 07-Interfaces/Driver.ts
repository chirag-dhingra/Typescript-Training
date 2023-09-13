import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricket = new CricketCoach();
let myGolf = new GolfCoach();

//declare an array of coaches

let theCoaches: Coach[] = [];
theCoaches.push(myCricket);
theCoaches.push(myGolf);

for(let temp of theCoaches){
    console.log(temp.getDailyWorkout());
}