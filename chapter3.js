const string1 = "Hello";
const string2 = 'Hello';
const string3 = `Hello ${string1} ?`;
console.log(string3);

const num = 123;
const pI = 3.14;
console.log(typeof(num + undefined))

const a = 0.1;
const b = 0.2;
console.log(Number((a + b).toFixed(1)))

// Boolean
const t = true;
const f = false;
if(t){
  console.log('true');
}

let age;
console.log(age);
setTimeout(function(){
  age = 85;
  console.log(age)
},1000)

const user = {
  name: "푸우",
  age:41,
  email:null
}
console.log(user.name);
console.log(user.age);
console.log(user.email);

//Array(배열)
// const fruits = new Array('Cherry', 'Apple', 'Banana');
const fruits = ['Cherry', 'Apple', 'Banana'];
console.log(fruits[1]);
console.log(fruits.length);
console.log(fruits[fruits.length - 1]);

//object(객체)
/*
const person = new Object();
person.name = "앨리스";
person.age = 43;
*/
/*
function Person(){
  this.name = "앨리스";
  this.age = 43;
}
const person = new Person();
*/
/*
const person = {
  name: "앨리스",
  age:43
}
const key = 'name';
console.log(person.name);
console.log(person[key]);
*/
const personA = {
  name:"한나",
  age:52
}
const personB = {
  name:"유진",
  age:12,
  parent: personA
}
//console.log(personB.parent.name);
//console.log(personB['parent']['name']);

const users = [personA, personB];
console.log(users[0].name)

//function(함수)
function hello(){
  console.log('hello');
}
hello(); //Call

/*
function getNumber() {
  return 123;
}
*/
const getNumber = function(){ //익명함수
  return 123;
}
console.log(typeof getNumber())

const funcA = function(){
  console.log('a');
}
const funcB = function(c){
  console.log(c);
  c();
}
funcB(funcA);

//형변환(type conversion)
//const x = 1;
//const y= '1';
const x = 0;
const y= false;
console.log(x==y);
//===일치연산자
//==동등연산자

//참과 거직(true & false)
//1)false
//2)0
//3)null
//4)undefined
//5)NaN
//6)''
//7)0n
if(true){
  console.log('true')
}
if(fruits){
  console.log('아이템이 들어있어요')
}

//데이터 타입확인
console.log(typeof 'Hello' === 'string');
console.log(typeof null === 'object');
console.log(typeof [] === 'object');
console.log(typeof function(){} === 'function');
console.log([].constructor === Array);
console.log({}.constructor === Object);
console.log(Object.prototype.toString.call(null).slice(8,-1));

function checkType(data){
  return Object.prototype.toString.call(data).slice(8,-1);
}
console.log(checkType(null));
console.log(checkType([]));