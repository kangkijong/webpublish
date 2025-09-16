import { Title, Description } from '../base/Title.jsx';
import { Majors } from './Majors.jsx';
import { Jobs } from './Jobs.jsx';

export function About() {
    return (
        <section id="about" className="section container">
            <Title title="About me"/>
            <Description text="Hi, I'm a passionate developer who loves turning ideas into code.
                                I'm always eager to learn new technologies and build meaningful projects."/>
            <Majors />
            <Jobs />
        </section>
    );
}