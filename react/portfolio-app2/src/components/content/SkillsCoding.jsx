export function SkillCoding({skillName, percent, style}) {
    return (
        <>
            <div className="bar-title"><span>{skillName}</span><span>{percent}</span></div>
            <div className="bar-bg"><div className="bar-value" style={style}></div></div>
        </>
    );
}

export function SkillsCoding() {
    const skills = [
        {
            "skillName": "HTML",
            "percent": "98%",
            "style": {width:"98%"},
        },
        {
            "skillName": "CSS",
            "percent": "98%",
            "style": {width:"98%"},
        },
        {
            "skillName": "JavaScript",
            "percent": "98%",
            "style": {width:"98%"},
        },
        {
            "skillName": "TypeScript",
            "percent": "85%",
            "style": {width:"85%"},
        },
        {
            "skillName": "React",
            "percent": "80%",
            "style": {width:"80%"},
        },
        {
            "skillName": "NodeJS",
            "percent": "68%",
            "style": {width:"68%"},
        }
    ];

    return (
        <article className="skills-coding">
            <h3 className="skill-title">Coding Skills</h3>
            <ul>
                {skills && skills.map(skill =>
                    <li className="bar">
                        <SkillCoding    skillName={skill.skillName}
                                        percent={skill.percent}
                                        style={skill.style}
                        />
                    </li>    
                )}
            </ul>
        </article>
    );
}