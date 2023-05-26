//심볼(Symbol)
//변경이 불가한 데이터로, 유일한 식별자를 만들어 데이터를 보호하는 용도로 사용할 수 있음
//Symbold('설명')
//'설명' 값은 단순 디버깅을 위한 용도, 심볼 값과는 관계가 없음
/*
const sKey = Symbol('Hello')
const user = {
  key: '일반정보', 
  [sKey]: '민감한 정보'
}

console.log(user.key)
console.log(user['key'])
console.log(user[sKey])
console.log(user[Symbol('Hello')])
console.log(typeof sKey)
*/
/*
import { birthKey, emailsKey } from './keys.js'
import heropy from './symbol.js'
console.log(heropy)
console.log(Object.keys(heropy))
for(const key in heropy){
  console.log(heropy[key])
}
console.log(heropy[birthKey])
console.log(heropy[emailsKey])
*/
//BigInt
//BigInt는 길이제한이 없는 정수(Intiger)
//숫자(number) 데이터가 안정적으로 표시할 수 있는 
//최대치('2^53 - 1')보다 큰 정수를 표현할 수 있다
//함수 뒤에 'n'을 붙이거나 'BigInt()'를 호출해 생성
/*
console.log(123456789131456789123456789n)
console.log(BigInt(123456789131456789123456789))

const a = 11n
const b = 22
//숫자를 BinInt
console.log(a + BigInt(b))
console.log(typeof (a + BigInt(b)))
//BigInt를 숫자로
console.log(Number(a) + b)
console.log(typeof (Number(a) + b))
*/
//불변성 & 가변성
//불변성은 생성된 데이터가 메모리에서 변경되지 않고
//가변성은 생성된 데이터 메모리에서 변경될 수 있음을 의미
//자바스크스립트 원시형은 불변성을 참조형은 가변성을 가지고 있다
/*
let a = {x :1}
let b = a
b.x = 2
console.log(b)
console.log(a)

a.x = 7
console.log(b)
console.log(a)

b.x = 1
console.log(b)
console.log(a)

console.log(a === b)
*/
/*
let a = {x:1}
let b = {x:1}
b.x = 2
console.log(b)
console.log(a)
*/
/*
let a = [1,2,3]
let b = a

b[0] = 4
console.log(b)
console.log(a)
*/

//얕은복사 & 깊은 복사
//참조형은 가변성으로 인해 데이터를 복사할 때 주의가 필요
//얕은 복사(Shallow Copy) : 참조형의 1차원 데이터만 복사 
//깊은 복사(Deep Copy) : 참조형의 모든 자원 데이터 복사 
/*
let a = 1
let b = a
b=2
console.log(b)
console.log(a)

b=3
console.log(b)
console.log(a)
*/
/*
let a = {x:1}
// let b = Object.assign({},a)
let b = {...a}//얕은 복사
b.x = 3
console.log(b)
console.log(a)
*/
/*
import  cloneDeep from "lodash/cloneDeep"

let a = {x: {y:1}}
let b = cloneDeep(a) //깊은 복사
b.x.y = 2
console.log(b)
console.log(a)
*/
import  cloneDeep from "lodash/cloneDeep"
let a = [[1,2],[3]]
// let b = a.concat([])
// let b = [...a]
let b = cloneDeep(a)
b[0][0] = 4
console.log(b)
console.log(a)