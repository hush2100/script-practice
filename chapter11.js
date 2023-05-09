//DOM (Document Object Model) 
//DOM 이란 HTML문서를 객체로 표현
//JS에서 HTML을 제어할 수 있게 해줌
/*
const h1Ele = document.querySelector('h1')
console.log(h1Ele.textContent)
*/
//Node vs Element
//-노드:HTML요소, 텍스트, 주석 등 모든 것을 의미
//-요소(Element): HTML 요소를 의미
/*
const parent = document.querySelector('.parent')
//부모 요소의 모든 자식노드 반환
console.log(parent.childNodes)
//부모요소의 모든 자식요소 확인
console.log(parent.children)
console.dir(parent)

class N{}
class E extends N{}

console.dir(N)
console.dir(E)
console.dir(E.__proto__)
console.dir(Node)
console.dir(Element)
console.dir(Element.__proto__)
*/
//document.getElementById
//HTML 'id' 속성 값으로 검색된 요소를 반환
//여러개의 요소가 검색되면 가장 먼저 검색된 요소를 반환 
//검색된 요소가 없으면 null 값을 반환
/*
const el =document.getElementById('child2')
console.log(el)
*/
//document.querySelector
//'CSS선택자'로 검색된 요소를 반환
//여러개의 요소가 검색되면 가장 먼저 검색된 요소를 반환 
//검색된 요소가 없으면 null 값을 반환
/*
const el = document.querySelector('.child:first-child')
console.log(el)
*/
//document.querySelectorAll
//'CSS선택자'로 검색한 모든 요소를 'NodeList'로 반환
//'NodeList' 객체는 .forEach()를 사용할 수 있다
/*
const nodeList = document.querySelectorAll('.child')
console.log(nodeList)
nodeList.forEach(el => console.log(el.textContent))
console.log(Array.from(nodeList).reverse())
*/
//N.parentElement
//노드의 부모요소를 반환
/*
const el = document.querySelector('.child')
console.log(el.parentElement)
*/
//E.closest()
//자신을 포함한 조상요소 중 'CSS선택자'와 일치하는
//가장 가까운 요소를 반환
//요소를 찾지못하면 null값을 반환
/*
const el = document.querySelector('.child')
console.log(el.closest('div'))
console.log(el.closest('body'))
console.log(el.closest('.hello'))
*/
//N.previousSibling/N.nextSibling
//노드의 이전 형제 혹은 다음 형제 노드를 반환
/*
const el = document.querySelector('.child')
console.log(el.previousSibling)
console.log(el.nextSibling)
*/
//E.previousElementSibling / E.nextElementSibling
//요소의 이전 형제 혹은 다음 형제 요소를 반환
/*
const el = document.querySelector('.child')
console.log(el.previousElementSibling)
console.log(el.nextElementSibling)
*/
//E.children
//요소의 모든 자식 요소를 반환
/*
const el = document.querySelector('.parent')
console.log(el.children)
console.log(Array.from(el.children))
*/
//E.firstElementChild / E.lastElementChild
//요소의 첫번째 자식 혹은 마지막 자식요소를 반환
/*
const el = document.querySelector('.parent')
console.log(el.firstElementChild)
console.log(el.lastElementChild)
*/
//document.createElement()
//메모리에만 존재하는 새로운 HTML 요소를 반환
/*
const divEl = document.createElement('div')
console.log(divEl)

const inputEl = document.createElement('input')
console.log(inputEl)
*/
//E.prepend() / E.append()
//노드를 요소의 첫번째 혹은 마지막 자식으로 삽입
/*
const parentEl = document.querySelector('.parent');
const el = document.createElement('div')
el.textContent = 'Hello'

parentEl.prepend(new Comment('주석'))
parentEl.append(el, 'Text!')
*/
//E.remove()
//요소를 제거
/*
const el = document.querySelector('.child')
el.remove()
*/
//E.insertAdjacentElement()
//'대상요소'의 지정된 위치에 '새로운요소'를 삽입
//대상요소.insertAdjacentElement(위치, 새로운요소)
/* HTML 
<!-- 'beforebegin' //-->
<div class="target">
<!-- 'afterbegin' //-->
Content!
<!-- 'beforeend' //-->
</div>
<!-- 'afterend' //-->
*/
/*
const childEl = document.querySelector('.child')
const newEl = document.createElement('span')
newEl.textContent = 'Hello!'
//childEl.insertAdjacentElement('beforebegin', newEl)
childEl.insertAdjacentElement('afterbegin', newEl)
*/
//N.insertBefore()
//'부모노드'의 자식인 '참조노드'의 이전형제로 노드를 삽입
//부모노드.insertBefore(노드,참조노드)
/*
const parentEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')
const newEl = document.createElement('span')
newEl.textContent = 'Hello'
parentEl.insertBefore(newEl, childEl)
*/
//N.contains()
//주어진노드가 노드의 자신을 포함한 후손인지 확인
//노드.contains(주어진노드)
/*
const parentEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')

console.log(parentEl.contains(childEl))
console.log(document.body.contains(parentEl))
console.log(document.body.contains(childEl))
console.log(document.body.contains(document.body))
console.log(parentEl.contains(parentEl))
console.log(parentEl.contains(document.body))
console.log(childEl.contains(document.body))
*/
//N.textContent
//노드의 모든 텍스트를 얻거나 변경
/*
const el = document.querySelector('.child')
console.log(el.textContent)
el.textContent = '7'
console.log(el.textContent)
*/
//E.innerHTML
//요소의 모든 HTML 내용을 하나의 문자로 얻거나
//새로운 HTML로 저장
/*
const el = document.querySelector('.parent')
console.log(el.innerHTML)
el.innerHTML = 
`
<div style="border:4px solid #000">
  <span style="color:red">Hello</span>
  <span style="color:red">Hello</span>
</div>`
*/
//E.dataset
//요소의 'data~' 속성값을 얻거나 지정
/*
const el = document.querySelector('.child')
const str = 'Hello World'
const obj = {a:1, b:2}
el.dataset.helloworld = str;
el.dataset.object = JSON.stringify(obj)//문자화
console.log(el.dataset.helloworld)
console.log(el.dataset.obj)
console.log(JSON.parse(el.dataset.obj))
*/
//E.tagName
//요소의 태그네임을 반환
/*
const parentEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')
const el = document.createElement('span')
console.log(parentEl.tagName)
console.log(childEl.tagName)
console.log(el.tagName)
console.log(document.body.tagName)
*/
//E.id
//요소의 id값을 얻거나 지정
/*
const el = document.querySelector('.child')
console.log(el.id)
el.id = 'child1'
console.log(el.id)
console.log(el)
*/
//E.className
//요소의 class값을 얻거나 지정
/*
const el = document.querySelector('.child')
console.log(el.className)
el.className += ' child1 active'
console.log(el.className)
console.log(el)
*/
//E.classList
//요소의 'class'속성 값을 제어
//.add():값을 추가
//.remove():값을 제거
//.toggle(): 값을 토글
//.contains():  값을 확인
/*
const el = document.querySelector('.child')
el.classList.add('active')
console.log(el.classList.contains('active'))
el.classList.remove('active')
console.log(el.classList.contains('active'))
el.addEventListener('click', () => {
  el.classList.toggle('active')
  console.log(el.classList.contains('active'))
})
*/
//E.style
//요소의 style속성(인라인스타일)의 값을 얻거나 지정
//개별지정
/*
const el = document.querySelector('.child')
el.style.width = '100px'
el.style.fontSize = '28px'
el.style.backgroundColor = '#ff6600'
el.style.position = 'absolute'

//한번에지정
Object.assign(el.style, {
  width: '100px',
  fontSize: '28px',
  backgroundColor: '#ff6600',
  position: 'absolute'
})

console.log(el.style)
console.log(el.style.width)
console.log(el.style.fontSize)
console.log(el.style.backgroundColor)
console.log(el.style.position)
*/
//window.getCompetedStyle()
//요소에 적용된 스타일객체를 반환
/*
const el = document.querySelector('.child')
const styles = window.getComputedStyle(el)

console.log(styles.width)
console.log(styles.fontSize)
console.log(styles.backgroundColor)
console.log(styles.position)
*/
//E.getAttribute() /E.setAttribute()
//요소에서 특정 속성값을 얻거나 지정합니다.
/*
const el = document.querySelector('.child')
el.setAttribute('title','Hello World')
console.log(el.getAttribute('title'))
*/
//E.hasAttribute() / E.removeAttribute
//요소에서 특정 속성값을 확인하거나 제거
/*
const el = document.querySelector('.child')
console.log(el.hasAttribute('class'))

el.removeAttribute('class')
console.log(el.hasAttribute('class'))
console.log(el)
*/
//window.innerWidth / window.innerHeight
//현재화면(Viewport)의 크기를 얻음
/*
console.log(window.innerWidth)
console.log(window.innerHeight)
*/
//window.scrollX, window.scrollY
//페이지의 좌상단기준 현재화면(Viewport)의 수평 혹은 수직의 스크롤 위치값
//console.log(window.scrollX, window.scrollY)

//window.scrollTo, E.scrollTo
//지정된 좌표로 대상(화면, 스크롤요소)을 스크롤한다
//대상.scrollTo(X좌표,Y좌표)
//대상.scrollTo({top: Y, left: X, behavior: 'smooth'})
/*
const parentEl = document.querySelector('.parent')
setTimeout(() => {
  // window.scrollTo(0, 500)
  parentEl.scrollTo({
    left: 0,
    top: 500,
    behavior: 'smooth'  
  })
} , 1000)
*/
//E.clientWidth / E.clientHeight
//테두리선(border)를 제외한 넓이나 높이 값을 얻음
/*
const parentEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')
console.log(parentEl.clientWidth, parentEl.clientHeight)
console.log(childEl.clientWidth, childEl.clientHeight)
*/
//E.offsetWidth / E.offsetHeight
//테두리선(border)를 포함한 요소의 넓이와 높이 값을 얻음
/*
const parentEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')

console.log(parentEl.offsetWidth, parentEl.offsetHeight)
console.log(childEl.offsetWidth, childEl.offsetHeight)
*/
//E.scrollLeft, E.scrollTop
//스크롤요소의 좌상단기준, 현재 요소의 수평 혹은 수직 스크롤의 위치를 얻음
/*
window.parentEl = document.querySelector('.parent')
console.log(parentEl.scrollLeft, parentEl.scrollTop)
*/
//E.offsetLeft ,E.offsetTop
//페이지의 최상단 기준 요소의 위치를 얻음
/*
const parentEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')
console.log(parentEl.offsetLeft, parentEl.offsetTop)
console.log(childEl.offsetLeft, childEl.offsetTop)
*/
//E.getBoundingClientRect()
//테두리선을 포함한 요소의 크기와 화면에서의 상대위치 정보를 얻음
/*
const parentEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')
console.log(parentEl.getBoundingClientRect())
console.log(childEl.getBoundingClientRect())
*/