import { Title, SubTitle, BottomDescription } from "./base/Title";
import { ContactLink } from './footer/ContactLink';

export function Footer({data}) {
    return (
        <footer id="contact" className="container">
            <Title title="Let's talk" />
            <SubTitle title="jeon.developer.judy@gmail.com"/>
            <ContactLink links={data.links}/>
            <BottomDescription description="Dream Software Engineer Judy - All right reserved"/>
        </footer>
    );
}