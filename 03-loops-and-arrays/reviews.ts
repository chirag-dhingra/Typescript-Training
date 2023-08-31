let reviews: number[] = [5,5,4,1, 1.7];
let total = 0;
for(let i = 0; i < reviews.length; i++){
    console.log(reviews[i]);
    total += reviews[i];
}
let avg : number =  total/reviews.length;
console.log("Average rating is:"  + avg);

  