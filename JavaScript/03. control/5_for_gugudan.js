/**
 * 구구단 출력 : 2 ~ 9단
 */
for(let i=1; i<10 ; i++) {
    let rows = '';
    for(let j=2 ; j<10 ; j++) {
        rows += `${j}*${i} = ${i*j} `
    }
    console.log(rows);
}
// for(let i=2 ; i<=9 ; i++) {
//     for(let j=1 ; j<=9 ; j++) {
//         console.log(`${i}x${j} = ${i*j}`);
//     }
// }


/**
 * 별 찍기
 * 
 ** 
 ***
 ****
 ***** 
 */
for(let i=1 ; i<=5 ; i++) {
    let output = '';
    for(let j=1 ; j<=i ; j++) {
        output += '*';
    }
    console.log(output);
}

/**
 * 초록사과 찍기, 3행 줄만 빨간사과 출력
 */
for(let i=1 ; i<=5 ; i++) {
    let output = '';
    for(let j=1 ; j<=i ; j++) {
        if(i===3) {
            output += '🍎';
        } else {
            output += '🍏';
        }
    }
    console.log(output);
}