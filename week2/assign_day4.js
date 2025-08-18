const dummyPrice=[333,99,22,499,200,100]        //dummy array of prices
 
console.log(dummyPrice.map(price=>price-(price/10))) //discount using map
 
console.log(dummyPrice.filter(price=>price>=100))  //filtering the prices less than 100
 
console.log(dummyPrice.reduce((sum,cur)=>sum+cur))      //sum of prices using reduce