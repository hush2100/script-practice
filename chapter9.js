//모듈이란 특정 데이터들의 집합
//모듈 가져오기(import),내보내기(export)
/*
import { hello } from './module.js'
console.log(hello)
*/
// import abc, {str as xyz, arr, hello as h} from './module.js'
//as는 이름을 바꿀 때
/*
console.log(abc)
console.log(xyz)
console.log(arr)
console.log(h)
*/
//import * as abc from './module.js' 
//console.log(abc)
/*
setTimeout(async() => {
  //import('./module.js').then(abc => {
  //  console.log(abc)
  //})
  const abc = await import('./module.js')
  console.log(abc)
},1000)
*/
import {a, b} from './util.js'

console.log(a())
console.log(b())