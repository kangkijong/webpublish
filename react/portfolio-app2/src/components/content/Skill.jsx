import { Title, Description } from '../base/Title.jsx';
import { Lorem } from './Lorem.jsx';
import { SkillsCoding } from './SkillsCoding.jsx';
import { SkillsTools } from './SkillsTools.jsx';
import { SkillsEtc } from './SkillsEtc.jsx';

export function Skill() {
    return (
        <section id="skill" className="section container">
            <Title title="My Skills"/>
            <Description text="Skills & Attributes"/>
            <Lorem />
            <div className="skills">
                <SkillsCoding />
                <SkillsTools />
                <SkillsEtc />
            </div>
        </section>
    );
}