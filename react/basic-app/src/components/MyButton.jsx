export function MyButton({name, type, style, handleProps}) {  // props = {name: "회원가입"}
    const handleClick = () => {
        console.log(`버튼 클릭! -----> ${name}`);
        handleProps(`버튼 클릭! -----> ${name}`);
    }

    return (
        // <button type="button" style={{background: "yellow"}}>클릭 해주세요!!</button>
        <button type={type} className={style} onClick={handleClick}>{name}</button>
    );
}