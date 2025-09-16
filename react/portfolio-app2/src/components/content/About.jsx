import { Title, Description } from '../base/Title.jsx';
import { Majors } from './Majors.jsx';
import { Jobs } from './Jobs.jsx';

export function About() {
    return (
        <section id="about" className="section container">
            <Title title="About me"/>
            {/* <h2 className="title">About me</h2> */}
            <Description text="Hi, I'm a passionate developer who loves turning ideas into code.
                                I'm always eager to learn new technologies and build meaningful projects."/>
            {/* <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Quisquam vitae, totam a ipsa necessitatibus rem illum exercitationem, 
                doloremque aliquam dolor cupiditate quo quasi quae magnam dicta aperiam, 
                vero recusandae adipisci?</p> */}
            <Majors />
            {/* <ul className="majors">
                <li className="major">
                    <i className="fa-brands fa-html5 major-icon"></i>
                    <p>Front-end</p>
                    <p>HTML, CSS, JavaScript, TypeScript, React, WebAPIs</p>
                </li>
                <li className="major">
                    <i className="fa-solid fa-mobile major-icon"></i>
                    <p>Mobile</p>
                    <p>Android Studio, React Native, iOS, Swift, Java, Kotlin</p>
                </li>
                <li className="major">
                    <i className="fa-solid fa-server major-icon"></i>
                    <p>Back-end</p>
                    <p>Java, JavaScript, Go, Kotlin, Spring, Spring Boot</p>
                </li>
            </ul> */}
            <Jobs />
            {/* <ul className="jobs">
                <li className="job">
                    <img src="images/jobs/google.png" alt="google" />
                    <div>
                        <p  className="job-name">Google as Junior Software Engineer</p>
                        <p  className="job-period">2019 Oct - Until now</p>
                    </div>
                </li>
                <li className="job">
                    <img src="images/jobs/samsung.png" alt="samsung" />
                    <div>
                        <p className="job-name">Samsung as Junior Software Engineer</p>
                        <p className="job-period">2010 Oct - 2019 Oct</p>
                    </div>
                </li>
            </ul> */}
        </section>
    );
}