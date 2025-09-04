/**
 * 자바스크립트 렉시컬 스코프 (https://meetup.nhncloud.com/posts/86)
 */

{
    const a = 1;    // 전역 변수
    const b = 100;
    console.log(a);
    
    {
        const a = 2;    // 지역 변수
        console.log(a);

        {
            const a = 3;
            const c = 1000;
            console.log(a);
            console.log(b);
        }

        // console.log(c);  // 에러
        
    }
}
