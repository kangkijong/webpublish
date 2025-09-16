import { Title, Description } from '../base/Title.jsx';
import { Lorem } from './Lorem.jsx';
import { SkillsCoding } from './SkillsCoding.jsx';
import { SkillsTools } from './SkillsTools.jsx';
import { SkillsEtc } from './SkillsEtc.jsx';

export function Skill() {
    return (
        <section id="skill" className="section container">
            <Title title="My Skills"/>
            {/* <h2 className="title">My Skills</h2> */}
            <Description text="Skills & Attributes"/>
            {/* <p className="description">Skills & Attributes</p> */}
            <Lorem />
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Veritatis eum dolorem impedit cumque quas, cupiditate 
                temporibus sed vero ab illum blanditiis, ipsa minus animi quis eaque. 
                Excepturi vitae tempore ea!</p> */}
            <div className="skills">
                <SkillsCoding />
                {/* <article className="skills-coding">
                    <h3 className="skill-title">Coding Skills</h3>
                    <ul>
                        <li className="bar">
                            <div className="bar-title"><span>HTML</span><span>98%</span></div>
                            <div className="bar-bg"><div className="bar-value" style={{width:"98%"}}></div></div>
                        </li>
                        <li className="bar">
                            <div className="bar-title"><span>CSS</span><span>90%</span></div>
                            <div className="bar-bg"><div className="bar-value" style={{width:"98%"}}></div></div>
                        </li>
                        <li className="bar">
                            <div className="bar-title"><span>JavaScript</span><span>90%</span></div>
                            <div className="bar-bg"><div className="bar-value" style={{width:"98%"}}></div></div>
                        </li>
                        <li className="bar">
                            <div className="bar-title"><span>TypeScript</span><span>85%</span></div>
                            <div className="bar-bg"><div className="bar-value" style={{width:"85%"}}></div></div>
                        </li>
                        <li className="bar">
                            <div className="bar-title"><span>React</span><span>80%</span></div>
                            <div className="bar-bg"><div className="bar-value" style={{width:"80%"}}></div></div>
                        </li>
                        <li className="bar">
                            <div className="bar-title"><span>NodeJS</span><span>68%</span></div>
                            <div className="bar-bg"><div className="bar-value" style={{width:"68%"}}></div></div>
                        </li>
                    </ul>
                </article> */}
                <SkillsTools />
                {/* <article className="skills-tools">
                    <h3 className="skill-title">Tools</h3>
                    <ul>
                        <li>Visual Studio Code</li>
                        <li>IntelliJ</li>
                        <li>Android Studio</li>
                        <li>Eclipse</li>
                        <li>MySQL Workbench</li>
                    </ul>
                </article> */}
                <SkillsEtc />
                {/* <article className="skills-etc">
                    <h3 className="skill-title">Etc</h3>
                    <ul>
                        <li>Git</li>
                        <li>Scrum Master</li>
                        <li>SVN</li>
                    </ul>
                </article> */}
            </div>
        </section>
    );
}