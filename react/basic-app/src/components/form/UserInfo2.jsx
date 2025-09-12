import { TextInput } from './TextInput.jsx';
import { useState } from 'react';

export function UserInfo2() {
    const forms = [
        {"label":"이름", "type":"text", "name":"name", "msg":"이름을 입력해주세요"},
        {"label":"나이", "type":"text", "name":"age", "msg":"나이를 입력해주세요"},
        {"label":"주소", "type":"text", "name":"address", "msg":"주소를 입력해주세요"},
        {"label":"이메일", "type":"text", "name":"email", "msg":"이메일을 입력해주세요"},
        {"label":"취미", "type":"text", "name":"hobby", "msg":"취미를 입력해주세요"}
        // 입력할 필드가 늘어나면 아래에 계속 추가하면 됨 (ex. + 이메일, 취미...)
    ];

    const initForm = {name:"", age:"", address:"", email:"", hobby:""};
    // 입력할 필드가 늘어나면 요소 추가하기 (ex. + email:"", hobby:"", ...)
    const [formData, setFormData] = useState({name:"", age:"", address:"", email:"", hobby:""});

    
    const handleChangeForm = (e) => {
        const {name, value} = e.target;
        console.log(name, value);
        
        setFormData({...formData, [name]:value});
    }

    const handleFormReset = () => { setFormData(initForm); }

    return (
        <>
            <h1>UserInfo2</h1>
            <form>
                <ul>
                    {!forms || forms.map((item, index) => // map으로 돌리는 방법도 있음!
                        <li key={index}>
                            <label>{item.label}</label>
                            <TextInput  item={item}
                                        value={formData[item.name]} // formData. 과 같음
                                        handleChange={handleChangeForm}
                            />
                            {/* <TextInput  type={item.type}
                                        name={item.name}
                                        msg={item.msg}
                            /> */}
                        </li>
                        
                    )}
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