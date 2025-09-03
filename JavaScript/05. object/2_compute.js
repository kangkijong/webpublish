import {setObject, getObject, updateObjectObject, deleteObjectObject} from '../commons/util.js';

const person = {
    name: '홍길동',
    age: 20,
    job: '개발자'
}

const fruits = {
    name: 'apple',
    emoji: '🍎'
}

// person 객체를 이용하여 CRUD 작업을 진행하는 함수 정의
// setObject, getObject, updateObject, deleteObject는 commons > util.js에서 import
setObject(person, 'address', '강남구'); // 추가할 프로퍼티 = 키: 값
let job = getObject(person, 'job');
updateObjectObject(person, 'age', 32);
deleteObjectObject(person, 'name');
console.log(person);

setObject(fruits, 'color', 'red');
let e = getObject(fruits, 'emoji');
updateObjectObject(fruits, 'color', 'green');
deleteObjectObject(fruits, 'emoji');
console.log(fruits, e);
