//Reverse of given number

let result;
let sum=0;
let num=435;

 while(num > 0){

     result=num % 10;
    
     num=(num-result)/10;
    // num=Math.floor(num/10);
    // num=num/10;
    sum=(sum*10)+result;
 }
 console.log(sum);