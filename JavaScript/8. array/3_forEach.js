/**
 * forEach 메소드는 Iterator 심볼 객체를 상속한 객체에서 제공됨
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * - 배열.forEach(callbackFn);
 */
let fruits = ['🍎', '🍊', '🍋', '🍏', '🍑'];
// fruits.forEach((item, index, array) => {
//     console.log(item, index, array);
// });
fruits.forEach((item) => console.log(item));

// 🍋을 🍇로 교체
fruits.forEach((item, index) => {
    if(item === '🍋') {
        fruits.splice(index, 1, '🍇');
    }
});
console.log(fruits);
