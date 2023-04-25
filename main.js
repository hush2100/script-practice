//getFullYear()와 setFullYear()
//날짜 인스턴스의 연도를 반환하거나 지정
/*
const date = new Date()
console.log(date)
const d1 = new Date(2023,5,12,11,35,58) //달은 제로베이스 6월로 출력
const d2 = new Date('Mon Jun 12 2023 11:35:58 GMT+0900 (한국 표준시)')
console.log(d1)
console.log(d2)
date.setFullYear(2024)
console.log(date.getFullYear())
console.log(date)
*/
//getMonth()와 setMonth()
//날짜 인스턴스의 월을 반환하거나 지정
//0부터 시작(zero base numbering)
/*
const date =  new Date()
console.log(date.getMonth())
console.log(date)

date.setMonth(0)
console.log(date.getMonth())
console.log(date)
*/
//getDate()와 setDate()
//날짜 인스턴스의 월을 반환하거나 지정
/*
const date =  new Date()
console.log(date.getDate())
console.log(date)

date.setDate(11)
console.log(date.getDate())
console.log(date)
*/

//getHours()와 setHours()
//날짜 인스턴스의 시간을 반환하거나 지정
/*
const date =  new Date()
console.log(date.getHours())
console.log(date)

date.setHours(22)
console.log(date.getHours())
console.log(date)
*/
//getMinutes()와 setMinutes()
//날짜 인스턴스의 분을 반환하거나 지정
/*
const date =  new Date()
console.log(date.getMinutes())
console.log(date)

date.setMinutes(12)
console.log(date.getMinutes())
console.log(date)
*/
//getSeconds()와 setSeconds()
//날짜 인스턴스의 초를 반환하거나 지정
/*
const date =  new Date()
console.log(date.getSeconds())
console.log(date)

date.setSeconds(56)
console.log(date.getSeconds())
console.log(date)
*/
//getDay()
//날짜 인스턴스의 요일을 반환
/*
const date =  new Date()
const day = date.getDay()
console.log(day)
console.log(getDayKor(day))

function getDayKor(day){
  switch(day){
    case 0: return '일요일'
    case 1: return '월요일'
    case 2: return '화요일'
    case 3: return '수요일'
    case 4: return '목요일'
    case 5: return '금요일'
    case 6: return '토요일'
  }
}
*/
//.getTime()과 .setTime()
//1970-01-01 00:00:00(유닉스타임)부터 경과한
//날짜 인스턴스의 밀리초(ms)로 반환하거나 지정
/*
const date = new Date()
console.log(date.getTime())
console.log(date)
date.setTime(1700000000000)
console.log(date.getTime())
console.log(date)

Date.prototype.isAfter =  function(date){
  const a = this.getTime()
  const b = date.getTime()
  return a > b
}
const d1 = new Date('Tue Apr 12 2023 11:35:58 GMT+0900 (한국 표준시)')
const d2 = new Date('Mon Jun 12 2023 11:35:58 GMT+0900 (한국 표준시)')

console.log(d1.isAfter(d2))
console.log(d2.isAfter(d1))
*/
//Date.now()
//1970-01-01 00:00:00(유닉스타임)부터 경과한
//메소드가 호출될 때의 밀리초를 반환
/*
const time = new Date().getTime()
console.log(Date.now())
console.log(time)

setTimeout(()=>{
  console.log(Date.now())
  console.log(time)
},1000)
*/
//.length
//배열의 길이(숫자)를 반환
//.at()
//대상 배열을 인덱싱
//음수 값을 사용하면 뒤에서 부터 인덱싱
/*
const arr = ['A','B','C']
console.log(arr.length)
console.log(arr[0])
console.log(arr.at(0))
console.log(arr[arr.length -1])
console.log(arr.at(-1))
*/
//concat()
//대상배열과 주어진 배열을 병합해 새로운 배열을 반환
/*
const arr1 = ['A','B','C']
const arr2 = ['D','E','F']
const arr3 = arr1.concat(arr2)
const arr4 = [...arr1,...arr2]
console.log(arr1)
console.log(arr2)
console.log(arr3)
console.log(arr4)
*/
//every()
//대상배열의 모든 요소가 콜백 테스트를 참으로 반환하는지 확인
/*
const arr = [1,2,3,4]
const inValid = arr.every(item => item < 5)

console.log(inValid)
*/
//.filter()
//주어진 콜백 테스트(참)을 통과하는 모든 요소를 새로운 배열로 반환
//모든요소가 테스트를 통과 하지 못하면 빈 배열을 반환
/*
const numbers = [2, 15, 24, 105, 53, 65, 0]
const filterNumbers = numbers.filter(number => number < 30)
console.log(filterNumbers)

const users = [
  {name: 'Neo', age: 85},
  {name: 'Alice', age: 22},
  {name: 'Tommy', age: 11}
]
const adults = users.filter(user => user.age >= 19)
console.log(adults)
*/
//.find()
//대상배열에서 콜백테스트를 통과하는 첫번째 요소를 반환
/*
const arr = [5,8,130,12,44]
const foundItem = arr.find(item => item > 10)
console.log(foundItem)
const users = [
  {name:'Neo', age: 85},
  {name:'Alice', age: 22},
  {name:'Tommy', age: 11}
]
const foundUser = users.find(user => user.name === 'Alice')
console.log(foundUser)
*/
//.findIndex()
//대상배열에서 콜백테스트를 통과하는 첫번째 요소의 인덱스를 반환
/*
const numbers = [2, 15, 24, 105, 53, 65, 0]
const index = numbers.findIndex(number => number > 30)
console.log(index)
*/
//.flat()
// 대상배열의 모든 하위배열을 지정한 깊이(depth)까지 이어붙인 새로운 배열
//깊이의 기본값은 1
/*
const arr = [1,2,[3,4,[5,6,[7,8]]]]
console.log(arr.flat())
console.log(arr.flat(2))
console.log(arr.flat(Infinity))
console.log(arr)
*/
//.forEach()
//대상배열의 길이만큼 주어진 콜백을 실행
/*
const arr = ['A','B','C']
arr.forEach(item => console.log(item))
for(let i=0;i<arr.length;i+=1){
  if(i>1){
    break
  }
  console.log(arr[i])
}
*/
//.includes()
//대상배열이 특정요소를 포함하고 있는지 확인
/*
const arr =[1, 2, 3]
console.log(arr.includes(2))
const fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits.includes('Apple'))
console.log(fruits.includes('cherry'))
const users = [
  {name:'Neo', age: 85},
  {name:'Alice', age: 22},
  {name:'Tommy', age: 11}
]
console.log(users.includes({name:'Neo', age: 85}))
const neo = users[0]
console.log(users.includes(neo))
*/
//join()
//대상배열의 모든 요소를 구분자로 연결한 문자를 반환
/*
const arr = ['Apple', 'Banana', 'Cherry']
console.log(arr.join())
console.log(arr.join(', '))
console.log(arr.join(' / '))
*/
//.map()
//대상배열의 길이만큼 주어진 콜백을 실행하고, 콜백의 반환값을 모아 새로운 배열은 반환
/*
const numbers = [1,2,3,4]
const newNumbers = numbers.map(number => number * 2)
console.log(newNumbers)
console.log(numbers)
const users = [
  {name:'Neo', age: 85},
  {name:'Alice', age: 22},
  {name:'Tommy', age: 11}
]
const newUsers = users.map(user => {
  return{
    ...user,
    inValid: true,
    email:null
  }  
})
console.log(newUsers)
*/
//.pop()
//대상배열에서 마지막 요소를 제거하고 그 요소를 반환
//대상배열 원본이 변경
/*
const fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits.pop())
console.log(fruits)
*/
//.push()
//대상배열 마지막에 하나 이상을 추가하고 새로운 배열을 반환
//대상배열의 원본 변경
/*
const fruits = ['Apple', 'Banana', 'Cherry']
const newFruits = fruits.push('Orange')

console.log(newFruits)
console.log(fruits)
fruits.push('Mango', 'Strawberry')
console.log(fruits)
*/
//.reduce()
//대상배열의 길이만큼 주어진 콜백을 실행하고, 마지막에 호출되는 콜백의 반환값을 반환
//각 콜백의 반환값은 다음 콜백으로 전달
const numbers = [1,2,3] 
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue 
},0)
console.log(sum)