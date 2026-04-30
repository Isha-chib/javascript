let arr = [1,2,3,4,5];
 // count even numbers 
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
        count++;// count =count +1;
    }
}
console.log("Count of odd numbers: " + count);
//[1,2,3,4,5]
 // count = 0 +1=1+1=2
 //arr[0]= 1 => 1 %2 =1 it means it is not even numberso count is not increased
 //i+1=2=2%2=0 so count ++ 
 //i+1=3=3%2=1 so count is not increased
 //i+1=4=4%2=0 so count ++
 //i+1=5=5%2=1 so count is not increased
//henc count == 2 ;
//output will be 2 



