// export function TextInput({type, name, msg}) {
export function TextInput({item, value, handleChange}) {
    const {type, name, msg} = item;

    return (
        <input  type={type} 
                name={name}
                value={value}
                placeholder={msg}
                onChange={(e) => {handleChange(e)}} // 변경되는 값이 생길 때마다 부모에게 전달
        />
    );
}