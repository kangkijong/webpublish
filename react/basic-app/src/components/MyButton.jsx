export function MyButton({name, type, style}) {  // props = {name: "회원가입"}
    return (
        // <button type="button" style={{background: "yellow"}}>클릭 해주세요!!</button>
        <button type={type} className={style}>{name}</button>
    );
}