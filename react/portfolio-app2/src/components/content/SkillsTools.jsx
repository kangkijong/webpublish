export function SkillsTool({skillName}) {
    return (
        <>
            {skillName}
        </>
    );
}

export function SkillsTools() {
    const skills = [
        {
            "skillName": "Visual Studio Code"
        },
        {
            "skillName": "IntelliJ"
        },
        {
            "skillName": "Android Studio"
        },
        {
            "skillName": "Eclipse"
        },
        {
            "skillName": "MySQL Workbench"
        }
    ];

    return (
        <article className="skills-tools">
            <h3 className="skill-title">Tools</h3>
            <ul>
                {skills && skills.map(skill =>
                    <li>
                        <SkillsTool skillName={skill.skillName}/>
                    </li>
                )}
            </ul>
        </article>
    );
}