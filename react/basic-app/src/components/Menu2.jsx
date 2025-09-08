/**
 * 메뉴 컴포넌트
 */
export function Menu2({data}) {   // data: {title:"..."}
    const {title, href, color, bg} = data;
    return (
        <a href={data.href} className="menu" style={{color:data.color, background:data.bg}}>{data.title}</a>
    );
}