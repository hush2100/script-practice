import {birthKey, emailsKey} from './keys.js'
export default {
  firstName: 'Yun',
  lastName: 'park',
  age :38,
  [birthKey]: new Date(1985,11,16,17,35),
  [emailsKey]: ['abc@gmail.com','dfd@daum.net']
}