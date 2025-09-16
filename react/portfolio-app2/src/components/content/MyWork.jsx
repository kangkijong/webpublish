import { Title, Description } from '../base/Title.jsx';
import { Categories } from './Categories.jsx';
import { Projects } from './Projects.jsx';

export function MyWork() {
    return (
        <section id="work" className="section container">
            <Title title="My Work" />
            {/* <h2 className="title">My Work</h2> */}
            <Description text="Projects" />
            {/* <p className="description">Projects</p> */}
            <Categories />
            {/* <ul className="categories">
                <li><button className="category">All<span className="category-count selected">8</span></button></li>
                <li><button className="category">Front-end<span className="category-count">4</span></button></li>
                <li><button className="category">Back-end<span className="category-count">2</span></button></li>
                <li><button className="category">Mobile<span className="category-count">2</span></button></li>
            </ul> */}
            <Projects />
            {/* <ul className="projects">
                <li className="project">
                    <img className="project-img" src="images/projects/project1.webp" alt="project #1" />
                    <div className="project-metadata">
                        <h3 className="project-metadata-title">Project #1</h3>
                        <p>Clone Coding with HTML, CSS</p>
                    </div>
                </li>
                <li className="project">
                    <img className="project-img" src="images/projects/project2.webp" alt="project #2" />
                    <div className="project-metadata">
                        <h3 className="project-metadata-title">Project #2</h3>
                        <p>Clone Coding with HTML, CSS</p>
                    </div>
                </li>
                <li className="project">
                    <img className="project-img" src="images/projects/project3.webp" alt="project #3" />
                    <div className="project-metadata">
                        <h3 className="project-metadata-title">Project #3</h3>
                        <p>Clone Coding with HTML, CSS</p>
                    </div>
                </li>
                <li className="project">
                    <img className="project-img" src="images/projects/project4.webp" alt="project #4" />
                    <div className="project-metadata">
                        <h3 className="project-metadata-title">Project #4</h3>
                        <p>Clone Coding with HTML, CSS</p>
                    </div>
                </li>                
                <li className="project">
                    <img className="project-img" src="images/projects/project5.webp" alt="project #5" />
                    <div className="project-metadata">
                        <h3 className="project-metadata-title">Project #5</h3>
                        <p>Clone Coding with HTML, CSS</p>
                    </div>
                </li>
                <li className="project">
                    <img className="project-img" src="images/projects/project6.webp" alt="project #6" />
                    <div className="project-metadata">
                        <h3 className="project-metadata-title">Project #6</h3>
                        <p>Clone Coding with HTML, CSS</p>
                    </div>
                </li>
                <li className="project">
                    <img className="project-img" src="images/projects/project7.webp" alt="project #7" />
                    <div className="project-metadata">
                        <h3 className="project-metadata-title">Project #7</h3>
                        <p>Clone Coding with HTML, CSS</p>
                    </div>
                </li>
                <li className="project">
                    <img className="project-img" src="images/projects/project8.webp" alt="project #8" />
                    <div className="project-metadata">
                        <h3 className="project-metadata-title">Project #8</h3>
                        <p>Clone Coding with HTML, CSS</p>
                    </div>
                </li>
            </ul> */}
        </section>
    );
}