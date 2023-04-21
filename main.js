//호이스팅(유효범위 내에서 위로 끌어 올림)
/*
hello()
function hello(){
  console.log('hello!!')
}
//함수표헌식
const hello2 = function(){
  console.log('안녕!!')
} 
hello2()
*/
//반환 및 종료
/*
function hello(){
  return 'Hello'
}
console.log(hello())
*/
function plus(num){
  if(typeof num !== 'number'){
    console.log('숫자를 입력해주세요')
    return 0 //return 은 반환이거나 종료
  }
  return num + 1
}
console.log(plus(5))
console.log(plus())