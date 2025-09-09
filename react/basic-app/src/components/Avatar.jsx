/**
 * AvatarImage 컴포넌트를 반복시키는 컨테이너 컴포넌트
 */
export function AvatarImageList({imgList}) {
    return (
        <div>
            { imgList.map((item, i) =>
                <img key={i} src={item.img} className={item.style} alt="" />) }
        </div>
    );
}

/**
 * Avatar 이미지
 */
export function AvatarImage({img, style}) {
    return (
        // <div>
            <img src={img} className={style} alt="" />
        // </div>
    );
}

/**
 * Avatar 컴포넌트 리스트
 */
export function AvatarList({list, className}) {
    return (
        <div className={className}>
            { list.map((item, i) => <Avatar key={i} img={item.img} name={item.name} />) }
        </div>
    );
}

/**
 * Avatar 이미지 + 이름 컴포넌트
 */
export function Avatar({img, name}) {
    return (
        <div className="avatar">
            <AvatarImage img={img} style="avatar-img-circle"/>
            <p>{name}</p>
        </div>
    );
}