/**
 * ★★★★★
 * filter
 * 배열의 값을 순회하여 콜백함수를 적용하고, 그 결과를 배열객체로 리턴한다.
 * - 배열.filter(콜백함수);
 */

let objects = [
    {name: '홍길동', age: 10},
    {name: '이순신', age: 20},
    {name: '김유신', age: 30}
];

let fruits = ['🍎', '🍊', '🍋', '🍏', '🍑', '🍋'];

// objects 요소 중 이름이 '이순신'인 객체(object literal)를 새로운 배열객체로 생성,
// 결과 --> [{name: '이순신', age: 20}]
let obj = objects.filter((item) => item.name === '이순신');
console.log(obj);

const searchCount = (array, item) => {
    // let result = array.filter((sitem) => sitem === item);
    // return result.length;
    return array.filter((sitem) => sitem === item).length;
}

console.log(`count => ${searchCount(fruits, '🍋')}`);
