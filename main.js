//console
//log(), warn(), error(), dir()
//콘솔에 메세지나 객체를 출력
//-log:일반메세지
//-warn:경고메세지
//error:에러메세지
//dir:속성을 볼 수 있는 객체를 출력
/*
console.log(document.body)
console.warn(document.body)
console.error(document.body)
console.dir(document.body)
*/
//.count() .countReset()
//콘솔에 메소드 호출의 누적획수를 출력하거나 초기화
//console.count('이름')
//console.countReset('이름')
/*
console.count('a')
console.count('a')
console.count('b')
console.count('a')
console.log('리셋 a')
console.countReset('a')
console.count('a')
console.count('b')
*/
//.time() .timeEnd()
//콘솔에 타이머가 시작해서 종료되기까지의 시간(ms)을 출력
/*
console.time('반복문')
for(let i = 0;i < 1000;i += 1){
  console.log(i)
}

console.timeEnd('반복문')
*/
//trace()
//콘솔에 호출스택(call stack)을 추적해 출력
/*
function a(){
  function b(){
    function c(){
      console.log('log')
      console.trace('trace')
    }
    c()
  }
  b()
}
a()
*/
//clear()
//콘솔에 기록된 메세지를 삭제
/*
console.log('a')
console.log('b')
console.log('c')
console.clear()
*/
//콘솔의 서식문자 치환
//%s: 문자로 치환
//%o: 객체로 치환
//%c: css로 치환
/*
const a = 'green tea'
const b = 3
const c = {
  g: 'green',
  t: 'tea'
}
console.log('%s of %s', a, b)
console.log('%o object', c)
console.log('%cbrown %cand %cgreen tea', 'color:orange;font-size:20px;', '','color:green')
*/
//Cookie
//도메인 단위로 지정
//표준안 기준 사이트 당 20개 및 4kb로 저장
//영구저장 불가능
//domain 유효도메인 설정
//path 유효경로 설정
//expires 만료날짜(UTC date) 설정
//max-age 만료 타이머(s) 설정
// document.cookie = 'a=1; domain=localhost; path=/abc'
/*
document.cookie = `a=1; max-age=${60 * 60 * 24 * 3}`
document.cookie = `b=2; expires=${new Date(2023, 11, 16)}`
document.cookie = 'a=3'
console.log(document.cookie)
function getCookie(name){
  const cookie = document.cookie
    .split('; ')
    .find(cookie => cookie.split('=')[0] === name)
  return cookie ? cookie.split('=')[1] : null
}
console.log(getCookie('a'))
*/
//Storage
//도메인 단위로 지정
//5MB 제한
//sessionStorage 브라우저 세션이 유지되어 있는 동안만 저장 
//localStorage 따로 제거하지 않으면 영구적으로 데이터 저장
//.getItem() 데이터조회
//.setItem() 데이터추가
//.removeItem() 데이터제거
//.clear() 스토리지 초기화 
localStorage.setItem('a', 'Hello')
localStorage.setItem('b', JSON.stringify({x:1, y:2}))
localStorage.setItem('c', JSON.stringify(123))

console.log(localStorage.getItem('a'))
console.log(JSON.parse(localStorage.getItem('b')))
console.log(JSON.parse(localStorage.getItem('c')))
localStorage.removeItem('a')
localStorage.clear()