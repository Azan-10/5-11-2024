"use strict";
// enum store values and also use as data type 
// in const enum we cant use [3] method.
var color;
(function (color) {
    color[color["red"] = 2] = "red";
    color[color["yellow"] = 3] = "yellow";
    color[color["green"] = 4] = "green";
})(color || (color = {}));
let trafficLight = color.red;
console.log(color.red); // this will print index number 
console.log(color[3]); // print value
console.log(color["green"]); // index
// loop
for (let i = 10; i > 0; i--) {
    console.log(i);
}
;
// while loop
let BusArrivesInMinutes = 5;
while (BusArrivesInMinutes > 0) {
    console.log(`bus arrives in ${BusArrivesInMinutes} minutes`);
    BusArrivesInMinutes--;
}
;
//lopp in array
let car = ["corola", "ford", "cultus", "mehran", "civic"];
for (let i = 0; i < car.length; i++) {
    console.log(car[i]);
}
