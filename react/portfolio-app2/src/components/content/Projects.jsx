export function Project({img, msg, prjNum, prjIntro}) {
    return (
        <>
            <img className="project-img" src={img} alt={msg} />
            <div className="project-metadata">
                <h3 className="project-metadata-title">{prjNum}</h3>
                <p>{prjIntro}</p>
            </div>
        </>
    );
}

export function Projects() {
    const project = [
        {
            "img": "/images/projects/project1.webp",
            "msg": "project #1",
            "prjNum": "Project #1",
            "prjIntro": "Clone Coding with HTML, CSS"
        },
        {
            "img": "/images/projects/project2.webp",
            "msg": "project #2",
            "prjNum": "Project #2",
            "prjIntro": "Clone Coding with HTML, CSS"
        },
        {
            "img": "/images/projects/project3.webp",
            "msg": "project #3",
            "prjNum": "Project #3",
            "prjIntro": "Clone Coding with HTML, CSS"
        },
        {
            "img": "/images/projects/project4.webp",
            "msg": "project #4",
            "prjNum": "Project #4",
            "prjIntro": "Clone Coding with HTML, CSS"
        },
        {
            "img": "/images/projects/project5.webp",
            "msg": "project #5",
            "prjNum": "Project #5",
            "prjIntro": "Clone Coding with HTML, CSS"
        },
        {
            "img": "/images/projects/project6.webp",
            "msg": "project #6",
            "prjNum": "Project #6",
            "prjIntro": "Clone Coding with HTML, CSS"
        },
        {
            "img": "/images/projects/project7.webp",
            "msg": "project #7",
            "prjNum": "Project #7",
            "prjIntro": "Clone Coding with HTML, CSS"
        },
        {
            "img": "/images/projects/project8.webp",
            "msg": "project #8",
            "prjNum": "Project #8",
            "prjIntro": "Clone Coding with HTML, CSS"
        }
    ];

    return (
        <ul className="projects">
            {project && project.map(prj =>
                <li className="project">
                    <Project    img={prj.img}
                                msg={prj.msg}
                                prjNum={prj.prjNum}
                                prjIntro={prj.prjIntro}
                    />
                </li>
            )}
        </ul>
    );
}