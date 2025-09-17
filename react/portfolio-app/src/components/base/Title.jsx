export function Title({title}) {
    return (
        <h2 className="title">{title}</h2>
    );
}

export function SubTitle({title}) {
    return (
        <p className="description">{title}</p>
    );
}

export function Description({style}) {
    return (
        <p className={style}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Quisquam vitae, totam a ipsa necessitatibus rem illum exercitationem, 
            doloremque aliquam dolor cupiditate quo quasi quae magnam dicta aperiam, 
            vero recusandae adipisci?
        </p>
    );
}

export function BottomDescription({description}) {
    return (
        <p>{description}</p>
    );
}