import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Title, Description } from "./base/Title";

export function Footer() {
    return (
        <footer id="contact" class="container">
            <Title title="Let's talk" />
            {/* <h2 class="title">Let's talk</h2> */}
            <Description text="jeon.developer.judy@gmail.com"/>
            {/* <p class="description">jeon.developer.judy@gmail.com</p> */}
            <ul class="contact-links">
                <li>
                    <a class="contact-link" href="#">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li>
                    <a class="contact-link" href="#">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
            </ul>
            <p>Dream Software Engineer Judy - All right reserved</p>
        </footer>
    );
}