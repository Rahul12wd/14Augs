function sum_square(array) {
    var sum = 0; 
    for(let i=0; i<array.length; i++)
     sum += Math.pow(array[i], 2);
    return sum;
  }
   
  console.log(sum_square([0,1,2,3,4,5,6]));