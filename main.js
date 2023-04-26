//동기 (Synchronous)와 비동기(Asynchronous) 
//동기 -순차적으로 코드를 실행 O
//비동기 -순차적으로 코드를 실행 X

/*
console.log(1)
setTimeout(() => {console.log(2)}, 1000)
console.log(3)
*/
/*
const btnEl = document.querySelector('h1')
btnEl.addEventListener('click', () => {console.log('click')})
console.log('Hello')
*/
/*
fetch('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')//요청(request)
  .then(res => res.json()) //res(response)응답
  .then(res => console.log(res))

console.log(1)  
console.log(2)
console.log(3)
*/
//Callback 패턴
/*    
const a = (callback) => {
  setTimeout(() => {
    console.log(1)
    callback()
  }, 1000)
}
const b = (callback) => {
  setTimeout(() => {
    console.log(2)
    callback()
  }, 1000)
}
const c = () => {
  setTimeout(() => {
    console.log(3)
  },1000)
}
//콜백지옥
a(() => {
  b(() => {
    c()
  })
})
*/
const getMovies = (movieName, callback) => {
  fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
  .then(res => res.json()) 
  .then(res => {
    console.log(res)
    callback()
  })
}
getMovies('Shrek', () => {
  console.log('슈렉')
  getMovies('Frozen', () => {
    console.log('겨울왕국')
    getMovies('Avatar', () => {
      console.log('아바타')
    })
  })
})

