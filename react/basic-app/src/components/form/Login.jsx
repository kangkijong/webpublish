import { useState, useRef } from 'react';

export function Login() {
    // const DOM객체의 참조변수 = useRef(null);
    const idRef = useRef(null);
    const passwordRef = useRef(null);

    const initForm = {id:"", password:""};
    const [form, setForm] = useState(initForm);

    const handleChangeForm = (event) => {   // 많이쓰는 형식(외우기!)
        const {name, value} = event.target; //
        setForm({...form, [name]: value});  //
    }

    const handleFormReset = () => { setForm(initForm); }

    const handleSubmit = (event) => {
        event.preventDefault(); // submit 후 ID, Password가 URL에 노출되는 것을 방지 

        // useRef를 활용한 밸리데이션(Validation) 체크
        if(idRef.current.value === "") {                // 아이디 입력 검사
            alert("아이디를 입력해주세요");
            idRef.current.focus();  // 아이디 값이 없으면 아이디 입력창으로 포커스
        } else if(passwordRef.current.value === "") {   // 패스워드 입력 검사
            alert("패스워드를 입력해주세요");
            passwordRef.current.focus();
        } else {                                        // 모두 입력 시 로그 출력
            console.log('서버연동 전송데이터 --> ', form);
        }
        // const id  = document.querySelector("#id").value;
        // console.log('id ---> ', id);
        // if(id === "") { // 아이디 미입력 상태로 로그인 버튼 클릭 시 alert 창 출력 후 아이디 입력란으로 커서 이동
        //     alert('아이디를 입력해주세요!');
        //     document.querySelector("#id").focus();
        // }
    }

    return (
        <>
            <h1>Login</h1>
            <form   name="login-form"
                    onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>아이디</label>
                        <input  type="text"
                                name="id"
                                value={form.id}
                                ref={idRef}
                                placeholder='아이디를 입력해주세요'
                                onChange={handleChangeForm}/>
                    </li>
                    <li>
                        <label>패스워드</label>
                        <input  type="password"
                                name="password"
                                value={form.password}
                                ref={passwordRef}
                                placeholder='비밀번호를 입력해주세요'
                                onChange={handleChangeForm}/>
                    </li>
                    <li>
                        <button type="submit">로그인</button>
                        <button type="reset"
                                onClick={handleFormReset}>다시쓰기</button>
                    </li>
                </ul>
            </form>
        </>
    );
}