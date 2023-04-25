//.length
//문자의 길이를 반환
//.includes
//대상문자에 주어진 문자가 포함되어 있는지 확인(대소문자 구별)
//.indexOf
//대상문자에서 주어진 문자와 일치하는 첫번째 인덱스를 반환 
//일치하는 문자가 없으면 '-1'을 반환 
//.padEnd()
//대상문자의 길이가 지정한 길이보다 작으면
//주어진 문자를 지정된 길이까지 끝에 붙여 새로운 문자를 반환
//.padStart()
//대상문자의 길이가 지정한 길이보다 작으면
//주어진 문자를 지정된 길이까지 앞에 붙여 새로운 문자를 반환
/*
const str ='Hello World';
const str2 ='1234567';
console.log(str.length)
console.log(str.includes('Hello', 0))
console.log(str.indexOf('Hello'))
console.log(str.indexOf('world'))
if(str.indexOf('Apple') === -1){
  console.log('해당 글자가 없습니다')
}
if(!str.includes('Apple')){
  console.log('해당 글자가 없습니다')
}
console.log(str2.padEnd(10,'0'))
console.log(str2.padStart(10,'0'))
*/
//.replace()
//대상문자에서 패턴(문자, 정규식)과 일치하는 부분을 교체한 새로운 문자를 반환
/*
const str = 'Hello, Hello?'
console.log(str.replace('Hello','H1'))
console.log(str.replace(/Hello/g,'H1'))
*/
//.slice()
//대상문자에서 일부를 추출해 새로운 문자를 반환
//두번째 인수 직전까지 추출하고 두번째 인수가 없으면 끝까지 추출
/*
const str = 'Hello world!'
//           012345678901
//          -210987654321
console.log(str.slice(0,5))
console.log(str.slice(6,-1))
console.log(str.slice(6))
*/
//.split()
//주어진 문자를 구분자로 나누어 반환
//.toLowerCase()
//대상문자를 영어소문자로 변환
//.toUpperCase()
//대상문자를 영어대문자로 변환
/*
const str = 'Apple, Banana, Cherry'
const str2 = 'Apple / Banana / Cherry'
console.log(str.split(', '))
console.log(str.split('').reverse().join(''))
console.log(str2.split(' / '))

console.log(str.toLowerCase())

console.log(str.toUpperCase())
*/
//.trim()
//대상문자의 앞뒤 공백문자(tab,space)를 제거하여 반환
/*
const str = '     He ll o     ' 
console.log(str)
console.log(str.trim())
*/
//.toFixed()
//숫자를 지정된 고정소수점까지 표현하는 문자로 반화
/*
const num = 3.1438655666
console.log(num.toFixed(2))
console.log(parseFloat(num.toFixed(2)))//문자를 숫자로
console.log(typeof num.toFixed(2))
console.log(typeof parseFloat(num.toFixed(2)))//문자를 숫자로
*/
//.toLocaleString()
//숫자를 현지 언어 형식으로 변환
/*
const num = 1000000
console.log(num.toLocaleString())
console.log(`${num.toLocaleString()}원`)
*/
//Number.isInteger()
//숫자가 정수(integer)인지 확인
/*
const num = 123
const pI = 3.14

console.log(Number.isInteger(num))
console.log(Number.isInteger(pI))
*/
//Number.isNaN()
//주어진 값이 NaN인지 확인
/*
const num1 = NaN
const num2 = 123
const str = 'Hello'
const nul = null
console.log(Number.isNaN(num1))
console.log(Number.isNaN(num2))
console.log(Number.isNaN(str))
console.log(Number.isNaN(nul))
*/
//Number.parseInt() 또는 parseInt()
//주어진 값(숫자,문자)를 파싱(분석)해 특정 진수(radix)의 정수로 반환
//Number.parseFloat() 또는 parseFloat()
//주어진 값(숫자,문자)를 파싱(분석)해 부동소수점의 실수로 반환
/*
const str = '3.141592656'
const num = 3.141592656

console.log(Number.parseInt(str,10))
console.log(Number.parseInt(num,10))
console.log(Number.parseFloat(str))
console.log(Number.parseFloat(num))
*/
//Math.abs()
//주어진 숫자의 절대값을 반환
/*
console.log(Math.abs(2))
console.log(Math.abs(-2))
*/
//Math.ceil()
//주어진 숫자를 올림처리해서 정수로 반환
//Math.floor()
//주어진 숫자를 내림처리해서 정수로 반환
//Math.round()
//주어진 숫자를 반올림해서 정수로 반환
const num = 3.1423566
const num1 = 3.141
const num2 = 3.768
console.log(Math.ceil(num))
console.log(Math.floor(num))
console.log(Math.round(num1))
console.log(Math.round(num2))

//Math.max()
//주어진 숫자들 중 가장 큰 숫자를 반환
//Math.min()
//주어진 숫자들 중 가장 작은 숫자를 반환
/*
console.log(Math.max(2,7,12,89,1569))
console.log(Math.min(-2,7,12,89,1569))
*/
//Math.pow()
//주어진 숫자에서 거듭제곱한 값을 반환
/*
console.log(Math.pow(5,2))
console.log(Math.pow(7,3))
*/
//Math.random()
//숫자 0이상 1미만의 난수를 반환
/*
console.log(Math.random())
function random(min=0,max=10){
  return Math.floor(Math.random() * (max - min)) + min
}
console.log(random())
console.log(random(11,20))
console.log(random(101,999))
*/