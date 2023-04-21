//산술연산자

/*console.log(1 + 2);
console.log(5 - 7);
console.log(3 * 4);
console.log(10 / 2);
console.log(7 % 5);

function isEven(num){
  return num % 2 === 0
}
console.log(isEven(157))
*/
//할당 연산자
/*
let a = 3;
a += 2;
console.log(a);
*/
//증감연산자
/*
let b = 3;
console.log(b--);
console.log(b);
*/
//부정연산자
/*
console.log(!true);
console.log(!0);
*/
//비교연산자
/*
const a = 1;
const b = 3;
//동등연산자
console.log(a == b); //false
//부등연산자
console.log(a != b); //true
//일치연산자
console.log(a === b) //false
//불일치
console.log(a !== b) //true
//큼
console.log(a > b) //false
//크거나 같음
console.log(a >= b) //false
//작음
console.log(a < b) //true
//작거나 같음
console.log(a <= b) //true
*/
//논리연산자
/*
const a = true;
const b = false;

//And 연산자
if(a && b){
  console.log('모두 참');
}
console.log(true && false);
console.log(1 && 0);
console.log(1 && 0 && 2);
console.log(0 && 1 && 2);
console.log('A' && 'B' && '');
console.log('A' && 'B' && 'C');
//Or 연산자
if(a || b){
  console.log('하나이상 참');
}
console.log(false || true);
console.log(0 || 1);
console.log(false || 0 || {});
console.log(false || [] || null);
console.log(false || 0 || NaN);
*/
//Nullish 병합
/*
const n = 0;
//OR 연산자
const num1 = n || 7;
console.log(num1)
//Nullish(null과 undefined만 제외)
const num2 = n ?? 7;
console.log(num2);
console.log(null ?? 1);
console.log(undefined ?? 2);
console.log(null ?? undefined);
console.log(null ?? 1 ?? 2);
*/
//삼항연산자
/*
const a = 1;
if(a < 2){
  console.log('참');
}else{
  console.log('거짓')
}
console.log(a < 2 ? '참' : '거짓');
function getAlert(message){
  return message ? message : '메세지가 없음';
}
console.log(getAlert('AAA'));
console.log(getAlert(null));
*/
//전개연산자 (Spread Operator)
/*
const a = [1,2,3]
const b = [4,5,6]
console.log(...a) //1,2,3

const c = a.concat(b); //병합
console.log(c);
const d = [...a, ...b];
console.log(d);

const a = {x: 1, y: 2};
const b = {y: 3, z: 5};

const c = Object.assign({},a, b);
console.log(c)

const d = {...a,...b}
console.log(d);

function fn(x, y, z){
  console.log(x, y, z)
}

fn(1, 2, 3)
const e = [1, 2, 3];
fn(...e)
*/

//구조분해할당
/*
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
let a = 0;
let b = 0;
let c = 0;
const arr = [1,2,3];

[,b,c] = arr;
console.log(b,c)

const arr1 = [1,2,3];
const[e,...rest] = arr1;
console.log(e,rest)

const obj = {
  x: 1,
  y: 2,
  z: 3,
  m: 7,
  n: 100
}
// const { m = 5, x: poo, n:rabbit = 10} = obj;
const {z, ...rest} = obj;
console.log(z, rest)
*/
//선택적 체이닝
/*
const userA = {
  name: "Poo",
  age: 12,
  address: {
    contry : "England",
    city: "London"
  }
}
const userB = {
  name: "Piglet",
  age: 10
}
function getCity(user){
  return user.address?.city || '주소없음';
}
console.log(getCity(userA));
console.log(getCity(userB));
*/
//if조건문
/*
function isPositive(number){
  if(number > 0){
    return '양수'
  }else if(number < 0){
    return '음수'
  }else{
    return '0'
  }
}
console.log(isPositive(15));
console.log(isPositive(-9));
console.log(isPositive(0));
*/
//switch 조건문(특정한 조건으로 떨어질때)
/*
function Price(fruit){
  let p;
  switch(fruit){
    case 'Apple':
      p = 1000
      break
    case 'Banana':
      p = 3000
      break
    case 'Cherry':
      p = 9000
    break   
      
    default :
      p = 0
  }
  return p
}
console.log(Price('Apple'));
console.log(Price('Hello'));
*/
//for반복문
//for(초기화; 조건; 증감){
  //반복 증감될 코드
//}
/*
for(let i = 9; i > -1; i-=1){
  if(i % 2 === 0){
    continue //현재 반복을 종료후 다음 반복진행
  }
  console.log(i)
}
*/
//for of 반복문
/*
const fruits = ['Apple','Banana','Cherry'];
// for(let i = 0;i < fruits.length;i+=1){
//   console.log(fruits[i]);
// }
for(const fruit of fruits){
  console.log(fruit)
}

const users = [
  {
    name: 'Poo',
    age:12
  },
  {
    name: 'Piglet',
    age:10
  },
  {
    name: 'Peter',
    age:7
  }
]
for(let i = 0;i < users.length; i+=1){
  console.log(users[i].name)
}
for(const user of users){
  console.log(user.name)
}
*/
//for in 반복문
/*
const user = {
  name: 'Poo',
  age:12,
  inValid: true,
  email: 'poo@gmail.com'
}
for(const key in user){
  console.log(key)
  console.log(user[key])
}
*/
//while반복문
/*
let n = 0;
while(n < 4){
  console.log(n)
  n+=1;
}
*/
//do while 반복문
/*
let n = 0
do{
  console.log(n)
  n+=1
} 
while(n < 4)
*/