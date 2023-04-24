//호이스팅(유효범위 내에서 위로 끌어 올림)
/*
hello()
function hello(){
  console.log('hello!!')
}
//함수표헌식
const hello2 = function(){
  console.log('안녕!!')
} 
hello2()
*/
//반환 및 종료
/*
function hello(){
  return 'Hello'
}
console.log(hello())

function plus(num){
  if(typeof num !== 'number'){
    console.log('숫자를 입력해주세요')
    return 0 //return 은 반환이거나 종료
  }
  return num + 1
}
console.log(plus(5))
console.log(plus())
*/
//매개변수
//기본값
/*
function sum(a,b =1){
  return a+b
}
console.log(sum(1,2))
console.log(sum(7))

const user={
  name:'Poo',
  age:12
}
function getName({name}){
  //const {name} = user
  return name
}
function getEmail({email = '이메일이 없습니다'}){
  return email
}
console.log(getName(user))
console.log(getEmail(user))
*/
//구조분해할당
/*
const fruits = ['Apple','Banana','Cherry'];
const numbers = [1,2,3,4,5,6,7]

function getBanana([,b]){
  return b
}
console.log(getBanana(fruits))
console.log(getBanana(numbers))
*/
//나머지 매개변수
/*
function sum(...rest){
  console.log(rest)
  console.log(arguments) //유사배열
  return rest.reduce(function(acc,cur){
    return acc + cur
  },0)
}
console.log(sum(1,2))
console.log(sum(1,2,3,4))
console.log(sum(1,2,3,4,5,6,7))
*/
//화살표 함수
/*
const sum = (a,b) => {
  return a + b
}
const sum2 = (a,b) => a + b
console.log(sum2(10,20))
const g = () => {return {a : 1}}
const h = () => ({a : 1})
const i = () => {return [1,2,3]}
const j = () => [1,2,3]
*/
//즉시실행함수
/*
const a = 7
const double = () => {
  console.log(a*2)
}
double();
(() => {
  console.log(a*4)
})();

(function(){})();
((function(){}));
!(function(){});
+(function(){});
((a,b) => {
  console.log(a.innerWidth)
  console.log(b.body)
})(window,document);
*/
//callback(함수를 실행할 때 인수로 들어가는 함수)
/*
const a = callback => {
  console.log('A')
  callback()
}
const b = () => {console.log('B')}
a(b)

const sum = (a,b,c) =>{
  setTimeout(() => {
    c(a + b);
    
  },1000)
}
sum(1,5,(value) => {console.log(value)})

const loadImage = (url, cb) => {
  const imgEl =  document.createElement('img');
  imgEl.src = url;
  imgEl.addEventListener('load', ()=>{
    setTimeout(()=>{cb(imgEl)},1000)
  })
}
const containerEl = document.querySelector('.container');
loadImage('https://kakaobrain-pathfinder2.com/@resources/images/schedule_object_01.svg', imgEl => {
  containerEl.innerHTML = '';
  containerEl.append(imgEl)
})
*/
//재귀함수(자기내부에서 호출)
/*
let i = 0
const a = () => {
  console.log('A')
  i += 1
  if(i < 4){
    a()
  }
}
a()

const userA = {name:'A', parent:null}
const userB = {name:'B', parent: userA}
const userC = {name:'C', parent: userB}
const userD = {name:'D', parent: userC}

const getRootUser = (user) => {
  if(user.parent){
    return getRootUser(user.parent)
  }
  return user
}
console.log(getRootUser(userB))
*/
//호출스케줄링
/*
const hello = () => {
  console.log('hello')
}
const timeout = setTimeout(hello, 2000)
const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearTimeout(timeout)
})
*/
//this
// 일반함수의 this는 호출범위에서 정의
// 화살표함수의 this는 자신이 선언한 함수범위에서 정의
/*
function user(){
  this.firstName = 'Arial'
  this.lastName = 'Pa'
  return{
    firstName : 'James',
    lastName : 'Bon',
    age:35,
    getFullName : function(){
      return `${this.firstName} ${this.lastName}` 
    }
  }
}
const Alice = {
  firstName : 'Alice',
  lastName : 'Mag'
}
const u = user()
console.log(u.getFullName())
console.log(u.getFullName.call(Alice))
*/
const timer = {
  title: "Timer",
  timeout: function(){
    console.log(this.title)
    setTimeout(()=>{
      console.log(this.title)
    },2000)
  }
}
timer.timeout()
