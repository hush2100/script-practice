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
/*
localStorage.setItem('a', 'Hello')
localStorage.setItem('b', JSON.stringify({x:1, y:2}))
localStorage.setItem('c', JSON.stringify(123))

console.log(localStorage.getItem('a'))
console.log(JSON.parse(localStorage.getItem('b')))
console.log(JSON.parse(localStorage.getItem('c')))
localStorage.removeItem('a')
localStorage.clear()
*/
//Location
//현재 페이지의 정보를 변환하거나 제어
//.href 전체 URL 주소
//.protocol 프로토콜
//.hostname 도메인이름
//.pathname 도메인이후 경로
//.host 포트번호를 포함한 도메인 이름
//.port 포트
//.assign(주소) 해당 주소로 페이지 이동
//.replace(주소) 해당 주소로 페이지 이동, 현재 페이지 히스토리 제거
//.reload(강력) 페이지 새로고침 true 인수는 강력 새로고침
//console.log(location)

//History
//브라우저 히스토리(세션기록) 정보를 반환하거나 제어
//.length 등록된 히스토리 개수
//.scrollRestoration 히스토리 탐색시 스크롤 위치 복원 여부 확인 및 지정
//.state 현재 히스토리에 등록된 데이터(상태)

//.back() 뒤로가기
//.forward() 앞으로가기
//.go(위치) 현재 페이지 기준 특정 히스토리 위치로 이동
//.pushState(상태, 제목, 주소) 히스토리 상태 및 주소를 추가
//.replaceState(상태, 제목, 주소) 현재 히스토리 상태 및 주소를 교체
//모든 브라우저(사파리 제외)는 제목 옵션을 무시
// console.log(history)

const page1 = /* html */`
  <section class="page1">
    <h1>Page1</h1>
  </section>`
const page2 = /* html */`
  <section class="page2">
    <h1>Page2</h1>
  </section>`
const page3 = /* html */`
 <section class="page3">
   <h1>Page3</h1>
 </section>`   
 const pageNotFound = /* html */`
 <section>
   <h1>Page Not Found</h1>
 </section>`
 const pages = [
  {path: '#/page1', template: page1},
  {path: '#/page2', template: page2},
  {path: '#/page3', template: page3}
 ]
 const appEl = document.querySelector('#app')
 const render = () => {
  console.log(history)
  const page = pages.find(page => page.path === location.hash)
  appEl.innerHTML = page 
  ? page.template
  : pageNotFound
 }
 window.addEventListener('popstate', render)
 render()

 const pagePush = num => {
    history.pushState(`전달할 데이터 -${num}`, '', `#/page${num}`)
    render()
 }

 const inputEl = document.querySelector('nav input')
 inputEl.addEventListener('keydown', event => {
  if(event.key === 'Enter'){
    pagePush(event.target.value)
  }
 })