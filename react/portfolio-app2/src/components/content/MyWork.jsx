import { Title, Description } from '../base/Title.jsx';
import { Categories } from './Categories.jsx';
import { Projects } from './Projects.jsx';

export function MyWork() {
    return (
        <section id="work" className="section container">
            <Title title="My Work" />
            <Description text="Projects" />
            <Categories />
            <Projects />
        </section>
    );
}