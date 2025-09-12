import { useState, useRef } from 'react';

export function UserInfo() {
    const refs = {  // 묶어서 선언하는 방법도 있음!
        nameRef: useRef(null),
        ageRef: useRef(null),
        addressRef: useRef(null)
    }

    const initForm = {name:"", age:"", address:""};
    const [formData, setFormData] = useState(initForm);
    
    const handleChangeForm = (e) => {               // 많이쓰는 형식(외우기!)
        const {name, value} = e.target;             //
        setFormData({...formData, [name]: value});  //
    }

    const handleFormReset = () => { setFormData(initForm); }

    const handleSubmit = (e) => {
        e.preventDefault();     // submit 후 ID, Password가 URL에 노출되는 것을 방지 
        
        if(refs.nameRef.current.value === "") {
            alert("이름을 입력해주세요");
            refs.nameRef.current.focus();
        } else if(refs.ageRef.current.value === "") {
            alert("나이를 입력하세요");
            refs.ageRef.current.focus();
        } else if(refs.addressRef.current.value === "") {
            alert("주소를 입력하세요");
            refs.addressRef.current.focus();
        } else {
            console.log('서버연동 전송데이터 ---> ', formData);
        }
    }

    return (
        <>
            <h1>UserInfo</h1>
            <form   name="userInfo" 
                    onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>이름</label>
                        <input  type="text" 
                                name="name"
                                value={formData.name}
                                ref={refs.nameRef}
                                placeholder='아이디를 입력해주세요'
                                onChange={handleChangeForm}/>
                    </li>
                    <li>
                        <label>나이</label>
                        <input  type="text" 
                                name="age"
                                value={formData.age}
                                ref={refs.ageRef}
                                placeholder='나이를 입력해주세요'
                                onChange={handleChangeForm}/>
                    </li>
                    <li>
                        <label>주소</label>
                        <input  type="text" 
                                name="address"
                                value={formData.address}
                                ref={refs.addressRef}
                                placeholder='주소를 입력해주세요'
                                onChange={handleChangeForm}/>
                    </li>
                    <li>
                        <button type="submit">전송</button>
                        <button type="button"
                                onClick={handleFormReset}>다시쓰기</button>
                    </li>
                </ul>
            </form>
        </>
    );
}