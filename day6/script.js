let arr =[1,23,4,8,6,33,2];
// let newary =arr.map((x)=> x*2);
// console.log(newary);
// let sum=arr.reduce((x,y)=>x+y,0);
// console.log(sum);
let sum = arr.filter((x) => x%2==0).reduce((x,y)=>x+y,0);
console.log(sum);