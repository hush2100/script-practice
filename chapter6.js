//prototype
/*
const fruits = new Array('Apple', 'Banana', 'Cherry')
console.log(fruits)
console.log(fruits.length)
console.log(fruits.includes('Apple'))

Array.prototype.myArray = function(){
  console.log(this)
}
fruits.myArray()
const arr = []
arr.myArray()

const poo = {
  firstName:'Poo',
  lastName:'Disney',
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}
const neo ={
  firstName:'Neo',
  lastName:'Anderson'
}
console.log(poo.getFullName())
console.log(poo.getFullName.call(neo))

function User(first, last){
  this.firstName = first;
  this.lastName = last;
}
User.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`
}
const neo = new User('Neo', 'Anderson');
const arial = new User('Arial', 'Princess');
console.log(neo)
console.log(arial.getFullName())
*/
//ES6 Classes
/*
class User{
  constructor(first, last) {
    this.firstName = first    
    this.lastName = last    
  }
  getFullName(){
    return `${this.firstName} ${this.lastName}`
  } 
}
const neo = new User('Neo', 'Anderson');
const arial = new User('Arial', 'Princess');

console.log(neo.getFullName())
*/
//getter,setter
/*
class User{
  constructor(first, last){
    this.firstName = first
    this.lastName = last
  }
  get fullName(){ //값을 받아오는
    console.log('getting fullname!')
    return `${this.firstName} ${this.lastName}`
  }
  set fullName(value){ //값을 지정하는
    console.log(value);
    [this.firstName,this.lastName] = value.split('')
  }
}
const neo = new User('Neo', 'Anderson');
const arial = new User('Arial', 'Princess');

console.log(neo.fullName)
neo.fullName = ('Arial Princess')
console.log(neo)
*/
//정적메소드
/*
class User{
  constructor(first, last){
    this.firstName = first
    this.lastName = last
  }
  getFullName(){
    return `${this.firstName} ${this.lastName}`
  }
  static isUser(user){
    if(user.firstName && user.lastName){
      return true
    }
    return false
  }
}
const neo = new User('Neo', 'Anderson');
const arial = new User('Arial', 'Princess');

console.log(neo.getFullName())
console.log(arial.getFullName())
console.log(User.isUser(neo))
*/
//상속
/*
class Vehicle{
  constructor(acceleration = 1){
    this.speed = 0
    this.acceleration = acceleration
  }
  accelerate(){
    this.speed += this.acceleration
  }
  decelerate(){
    if(this.speed <= 0){
      console.log('정지')
      return
    }
    this.speed -= this.acceleration
  }
}
class Bicycle extends Vehicle{
  constructor(price=100,acceleration){
    super(acceleration)
    this.price = price
    this.wheel = 2
  }
}
const bicycle = new Bicycle(300, 2)
bicycle.accelerate()
console.log(bicycle)
console.log(bicycle instanceof Bicycle)
console.log(bicycle instanceof Vehicle)

class Car extends Bicycle{
  constructor(license,price,acceleration){
    super(price,acceleration)
    this.license = license
    this.wheel = 4
  }
  //오버라이팅
  accelerate(){
    if(!this.license){
      console.log('무면허')
      return
    }
    this.speed += this.acceleration
    console.log('가속', this.speed)
  }
}
const carA =  new Car(true, 7000, 10)
const carB =  new Car(false, 4000, 6)
carA.accelerate()
carA.accelerate()
carB.accelerate()
console.log(carA)
console.log(carB)
console.log(carA instanceof Bicycle)
console.log(carB instanceof Car)

class Boat extends Vehicle{
  constructor(price,acceleration){
    super(acceleration)
    this.price = price
    this.motor = 1
  }
}
const boat = new Boat(10000,5)
console.log(boat)
console.log(boat instanceof Boat)
console.log(boat instanceof Bicycle)
*/
class A{
  constructor(){}
}
class B extends A{
  constructor(){
    super()
  }
}
class C extends B{
  constructor(){
    super()
  }
}
const a = new A()
const b = new B()
const c = new C()

console.log(a instanceof A)
console.log(b instanceof A)

console.log(c.constructor === A)
console.log(c.constructor === B)

const fruits =['Apple', 'Banana','Cherry']
console.log(fruits.constructor === Array)