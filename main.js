//addEventListener()
//대상에 이벤트 청취(Listen)를 등록
//대상에 지정된 이벤트가 발생했을 때 지정된 함수를 호출
/*
const parentEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')

parentEl.addEventListener('click', () => {
  console.log('parent')
})
childEl.addEventListener('click', () => {
  console.log('child')
})
*/
//.removeEventListener()
//대상에 등록했던 이벤트 청취를 제거
//메모리 관리를 위해 등록된 이벤트를 제거하는 과정이 필요
/*
const parentEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')
const handler = () => {
  console.log('parent')
}
parentEl.addEventListener('click', handler)
childEl.addEventListener('click', () => {
  parentEl.removeEventListener('click', handler)
})
*/
//이벤트객체
//이벤트 객체는 대상에서 발생한 이벤트 정보를 담음
/*
const parentEl = document.querySelector('.parent')
parentEl.addEventListener('click', event => {
  console.log(event.target, event.currentTarget)//이벤트가 발생한 요소, 이벤트가 등록된 요소
  console.log(event)
})
parentEl.addEventListener('wheel', event => {
  console.log(event)
})
const inputEl = document.querySelector('input')
inputEl.addEventListener('keydown', event => { //키를누를때마다
  console.log(event.key)
})
*/
//기본동작방지
//마우스 휠의 스크롤 동작방지
const parentEl = document.querySelector('.parent')
parentEl.addEventListener('wheel', event => {
  event.preventDefault()
  console.log('wheel')
})
//a태그 페이지 이동 방지
const anchorEl = document.querySelector('a')
anchorEl.addEventListener('click', event => {
  event.preventDefault()
  console.log('click')
})