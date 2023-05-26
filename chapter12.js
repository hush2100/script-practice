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
/*
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
*/
//이밴트 버블(전파) 정지
/*
const parentEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')
const anchorEl = document.querySelector('a')
window.addEventListener('click', event => {
  console.log('window!')
})
document.body.addEventListener('click', event => {
  console.log('body!')
},{capture:true}) //capture 먼저 동작
parentEl.addEventListener('click', event => {
  console.log('parent!')
  event.stopPropagation() //버블링 정지
})
childEl.addEventListener('click', event => {
  console.log('child!') 
})
anchorEl.addEventListener('click', event => {
  console.log('anchor!')
})

const parentEl = document.querySelector('.parent')
const handler = () => {
  console.log('Parent!')
}
parentEl.addEventListener('click', handler,{
  capture: true
})
parentEl.removeEventListener('click', handler)
*/
//addEventListener를 한 번만 실행
/*
const parentEl = document.querySelector('.parent')
parentEl.addEventListener('click', event => {
  console.log('Parent')
}, {
  once: true
})
*/
//기본동작과 핸들러 실행 분리
/*
const parentEl = document.querySelector('.parent')
parentEl.addEventListener('wheel', () => {
  for(let i=0;i < 10000;i+=1){
    console.log(i)
  }
}, {
  passive: true
})
*/
//이벤트 위임(Event Delegation)
//비슷한 패턴의 여러 요소에서 이벤트를 핸들링해야 하는 경우
//단일 조상 요소에서 제어하는 이벤트 위임 패턴을 사용 
/*
const parentEl = document.querySelector('.parent')
const childEls = document.querySelectorAll('.child')

//모든 대상요소에 이벤트 등록
// childEls.forEach(el => {
//   el.addEventListener('click', event => {
//     console.log(event.target.textContent)
//   })
// })
//조상요소에 이벤트 위임
parentEl.addEventListener('click', event => {
  const childEl = event.target.closest('.child')
  if(childEl){
    console.log(childEl.textContent)
  }
})
*/
//Mouse & Pointer 이벤트 종류
//click: 클릭했을 때
//dblclick: 더블클릭했을 때
//mousedown: 버튼을 눌렀을 때
//mouseup: 버튼을 뗄 때
//mouseenter: 포인터가 요소 위로 들어갈 때
//mouseleave: 포인터가 요소 밖으로 나올 때
//mousemove: 포인터가 움직일 때
//contextmenu: 마우스 오른쪽 클릭
//wheel: 휠버튼이 회전할 때
/*
const parentEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')
// childEl.addEventListener('dblclick', () => {
//   childEl.classList.toggle('active')
// })
childEl.addEventListener('mousedown', () => {
  childEl.classList.add('active')
})
childEl.addEventListener('mouseup', () => {
  childEl.classList.remove('active')
})
childEl.addEventListener('mousemove', event => {
  console.log(event.offsetX, event.offsetY)
})
childEl.addEventListener('contextmenu', event => {
  event.preventDefault()
  console.log(event)
})
parentEl.addEventListener('wheel', event => {
  console.log(event)
})
*/
/*
//Keyboard 이벤트
//keydown: 키보드를 누를때
//keyup: 키보드를 뗄 때
const inputEl = document.querySelector('input')
inputEl.addEventListener('keydown', event => {
  if(event.key === 'Enter' && !event.isComposing){
    console.log(event.isComposing) //CJK문자를 가지고 있는지확인
    console.log(event.target.value)
  }
})
*/
//focus & form event
//focus : 요소가 포커스를 얻었을때
//blur : 요소가 포커스를 잃었을때
//input : 값이 변경 되었을때
//change : 상태가 변경 되었을때
//submit : 제출버튼을 선택했을 때
//reset : 리셋버튼을 선택했을 때
/*
const formEl = document.querySelector('form')
const inputEls = document.querySelectorAll('input')
inputEls.forEach(el => {
  el.addEventListener('focus', () => {
    formEl.classList.add('active')
  })
  el.addEventListener('blur', () => {
    formEl.classList.remove('active')
  })
  el.addEventListener('change', event => {
    console.log(event.target.value)
  })
})
formEl.addEventListener('submit', event => {
  event.preventDefault()
  const data = {
    id: event.target[0].value,
    pw: event.target[1].value
  }
  console.log('제출', data)
})
formEl.addEventListener('reset', event => {
  console.log('리셋')
})
*/
//커스텀이벤트와 디스패치
const child1 = document.querySelector('.child:nth-child(1)')
const child2 = document.querySelector('.child:nth-child(2)')

child1.addEventListener('hello-world', event => {
  console.log('이벤트')
  console.log(event.detail)
})
child2.addEventListener('click', () => {
  child1.dispatchEvent(new CustomEvent('hello-world', {
    detail:123
  }))
})
/*
child1.addEventListener('click', event => {
  //강제로 이벤트 발생
  child2.dispatchEvent(new Event('click'))
  child2.dispatchEvent(new Event('wheel'))
  child2.dispatchEvent(new Event('keydown'))
  console.log(event.target)
})

child2.addEventListener('click', event => {
  console.log('child2 click')
})
child2.addEventListener('wheel', event => {
  console.log('child2 wheel')
})
child2.addEventListener('keydown', event => {
  console.log('child2 keydown')
})
*/