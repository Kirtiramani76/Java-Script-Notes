//   JS CLASS -:01
// console.log('JS Basic knowledge');
// console.log('JS Basic knowledge 1');

// if(true)
// {
// var a=5;
// var a=5;
//     console.log(a);
// }

// let a=5;
// let b=10;
// console.log((++a)*(--b));
// console.log((a++)*(--b));
// console.log((a++)*(b--));
// console.log((++a)*(b--));

// let age=25;
// let statusVote=(age>=18)?'You are eligible for vote':'Not eligible for vote';
// console.log(statusVote);

// let num=5;
// switch(num){
//     case 1:console.log('a');
//     break;
//     case 2:console.log('b');
//     break;
//     case 3:console.log('c');
// break;
// default:console.log('d');
// }

//   JS CLASS:-02
console.log('Creation of Object in JS');

// to create object properties
// let rectangle = {
//     length: 5,
//     breadth: 6,
//     //  to create object behaviors
//     draw: function () {
//         console.log('creating object');
//     }
// };
// Factory Function 
// function Rectangle(len,bre){
// let rectangle = {
//     length: len,
//     breadth: bre,
//     draw() { 
//         console.log('creating object');
//     }
// };
// return rectangle;
// }
// let rectObj=Rectangle(2,3);

// CamelCase Notation: numberOfStudents
// Pascal Notation: NumberOfstudents

// Constructor Function
// function Rectangle(){
//     this.length=1;
//     this.breadth=2;
//     this.draw=function(){
//         console.log("Drawing rectangle");
//     }
// }
// let rectObj1=new Rectangle();
// rectObj1.color='voilet';  
// console.log(rectObj1);
// delete rectObj1.color;
// console.log(rectObj1);

// Primitive Data Type
// let c=5;
// let d=c;
// c++;
// console.log(c);
// console.log(d);

// Reference Data Type
// let a={value:3};
// let b=a;
// a.value++;
// console.log(a.value);
// console.log(b.value);

// let a=5;
// b(a);
// console.log(a);
// function b(a){
//     a++;
// }

// let a={value:5};
// b(a);
// console.log(a.value);
// function b(a){
// a.value++;
// }

//  let rectangle={
//     length:25,
//     breadth:45
//  };
// for-in loop
//for(let key in rectangle)
// key are reflected through key variables;
// value are reflected through rectangle[key];
//console.log(key,rectangle[key]);

// for-of loop
// for(let key of Object.entries(rectangle))
// console.log(key);

// Check the property exists or not
// if('length'in rectangle){
//     console.log('Present');
// }
// else{
//     console.log('Not Present');
// }

// Object Clone:Iteration,Assign,Spread;
//no clone used
// let a={value:11};
// b=a;
// a.value++;
// console.log(a.value);
// console.log(b.value);
// eg- making clone: //iteration clone used;

// let src={a:6,b:7,c:8};
// let destn={};
// for(let key in src)
// destn[key]=src[key];
// // src.b++;
// console.log(destn);

//assign clone used;

let src={a:3,b:4,c:5};
let src2={d:7};
let destn=Object.assign({},src,src2);
  console.log(destn);

// spread clone used;

// let src={a:1,b:2,c:3};
// let src2={value:6};
// let destn={...src,src2};
// src.a++;
// console.log(destn);











