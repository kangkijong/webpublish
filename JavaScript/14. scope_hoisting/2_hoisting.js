/**
 * 호이스팅(Hoisting) : 파일이 호출되면 실행 전 객체를 메모리에 생성하고 로드하는 작업
 * - function 키워드로 정의된 함수
 */
test1();
console.log(test1); // stack frame에 저장되는 변수명(객체 주소 저장)

function test1() {  // 호이스팅 작업이 선행됨!! : function 키워드가 붙은 함수들은 미리 메모리에 생성되기 때문에 test1()이 위에 작성되어도 실행 가능
    console.log('-----> test1');
}

/**
 * ECMAScript 기준으로 let, const로 정의된 함수는
 * 호이스팅 작업이 선행되지 않음!!
 */
// test2();    // 에러 발생
// 변수형 함수
let test2 = () => {   // 호이스팅 작업이 선행 안됨!!
    console.log('-----> test2');
}
test2();    // 정상 호출

let test3 = function() {
    console.log('-----> test3');
}
test3();    // 정상 호출