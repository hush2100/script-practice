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
/*
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
*/
//Promise
/*
const a = () => {
 return new Promise(resolve => {
  setTimeout(() => {
    console.log(1)
    resolve()
  }, 1000)
 })
}
const b = () => {
  return new Promise(resolve => {
   setTimeout(() => {
     console.log(2)
     resolve()
   }, 1000)
  })
 }
 const c = () => {
  return new Promise(resolve => {
   setTimeout(() => {
     console.log(3)
     resolve()
   }, 1000)
  })
 }
const d = () => {console.log(4)}

a()
  .then(b)
  .then(c)
  .then(d)
  .then(() => {console.log('Done!')})
*/
/*
const getMovies = (movieName) => {
  return new Promise(resolve => {
    fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
    .then(res => res.json()) 
    .then(res => {
      console.log(res)
      resolve()
    })
  })
}  
getMovies('Frozen')
  .then(() => {
    console.log('겨울왕국')
    return getMovies('Avatar')
  })
  .then(() => {
    console.log('아바타')
    return getMovies('Avengers')
  })
  .then(() => {
    console.log('어벤저스')
  })
*/
//Async Await
/*
const a = () => {
  return new Promise(resolve => {
   setTimeout(() => {
     console.log(1)
     resolve()
   }, 1000)
  })
 }
const b = () => {console.log(2)}
// a().then(() => {b()})  
const wrap = async() => {
  await a()
  b()
}
wrap()
*/
/*
const getMovies = (movieName) => {
  return new Promise(resolve => {
    fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
    .then(res => res.json()) 
    .then(res => {
      console.log(res)
      resolve()
    })
  })
}
const wrap = async() => { 
  await getMovies('Frozen')
  console.log('겨울왕국')
  await getMovies('Avatar')
  console.log('아바타')
  await getMovies('Avengers')
  console.log('어벤저스')
}
wrap()
*/
//Resolve, Reject 그리고 에러핸들링
/*
const delayAdd = (index) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(index > 10){
        reject(`${index}는 10보다 클 수 없습니다`)
        return
      }
      console.log(index)
      resolve(index + 1)
    }, 1000)
  })
}
delayAdd(12)
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log('Done!'))//마지막에 항상 실행
const wrap = async() => {
  try{
    const res = await delayAdd(12)
    console.log(res)
  }catch(err){
    console.log(err)
  }finally{ //마지막에 항상 실행
    console.log('Done!!')
  }

}
wrap()

const getMovies = (movieName) => {
  return new Promise((resolve, reject) => {
    fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
    .then(res => res.json()) 
    .then(json => {
      //console.log(json)
      if(json.Response === 'false'){
        reject(json.Error)
      }
      resolve(json)
    })
    .catch(error => {
      reject(error)
    })
  })
}
let loading = true

getMovies('Avengers')
  .then(movies => console.log('영화목록:', movies))
  .catch(error => console.log('에러발생:', error))
  .finally(() => loading = false)

const wrap = async() => {
  try{
    const movies = await getMovies('avengers')
    console.log('영화목록:', movies)
  }catch(error){
    console.log('에러발생:', error)
  }finally{
    loading = false
  }
}  
wrap()
*/
//반복문에서 비동기처리
/*
const getMovies = (movieName) => {
  return new Promise(resolve => {
    fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
    .then(res => res.json()) 
    .then(res => {
      console.log(res)
      resolve()
    })
  })
}
const titles = ['frozen', 'avengers', 'avatar']

//titles.forEach(async title => {
//  const movies = await getMovies(title)
//  console.log(title, movies)
//})
const wrap = async() => {
  for (const title of titles){
    const movies = await getMovies(title)
    console.log(title, movies)
  }
}
wrap()
*/
//fetch(주소,옵션)
//네트워크를 통해 리소스의 응답(Response) 및 요청(Request)을 처리
//Promise인스턴스를 반환
fetch('https://www.omdbapi.com/?apikey=7035c60c&s=Avatar', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(
    {
      name : 'Poo',
      age : 12,
      email: 'poo@naver.com'
    }
  )
})
  .then(res => res.json())
  .then(json => console.log(json))

const wrap = async() => {
  const res = await fetch('https://www.omdbapi.com/?apikey=7035c60c&s=Avatar')
  const json = await res.json()
  console.log(json)
}
wrap()