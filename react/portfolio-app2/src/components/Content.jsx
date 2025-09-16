import { Home } from './content/Home.jsx';
import { About } from './content/About.jsx';
import { Skill } from './content/Skill.jsx';
import { MyWork } from './content/MyWork.jsx';
import { Testimonial } from './content/Testimonial.jsx';


export function Content() {
    const homeData = {
        "img": "/images/favicon.ico",
        "name": "Judy",
        "title": "Junior Developer",
        "description": "A software engineer currently residing in Seoul, South Korea"
    }

    return (
        <>
            <Home data={homeData} />
            <About />
            <Skill />
            <MyWork />
            <Testimonial />
        </>
    );
}