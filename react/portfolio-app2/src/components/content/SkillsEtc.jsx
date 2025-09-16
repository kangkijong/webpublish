export function SkillEtc({skillName}) {
    return (
        <>
            {skillName}
        </>
    );
}

export function SkillsEtc() {
    const skills = [
        {
            "skillName" : "Git"
        },
        {
            "skillName" : "Scrum Master"
        },
        {
            "skillName" : "SVN"
        }
    ]

    return (
        <article className="skills-etc">
            <h3 className="skill-title">Etc</h3>
            <ul>
                {skills && skills.map(skill =>
                    <li>
                        <SkillEtc skillName={skill.skillName}/>
                    </li>
                )}
            </ul>
        </article>
    );
}