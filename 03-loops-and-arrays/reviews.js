var reviews = [5, 5, 4, 1, 1.7];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var avg = total / reviews.length;
console.log("Average rating is:" + avg);
