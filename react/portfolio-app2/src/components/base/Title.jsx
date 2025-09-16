export function Title({title}) {
    return (
        <h2 className="title">{title}</h2>
    );
}

export function Description({text}) {
    return (
        <p className="description">{text}</p>
        // <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        //     Quisquam vitae, totam a ipsa necessitatibus rem illum exercitationem, 
        //     doloremque aliquam dolor cupiditate quo quasi quae magnam dicta aperiam, 
        //     vero recusandae adipisci?
        // </p>
    );
}