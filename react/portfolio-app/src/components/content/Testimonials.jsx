import { Title, SubTitle } from '../base/Title.jsx';
import { AvatarImage } from '../base/Avatar.jsx';

export function Testimonials({testimonials}) {
    return (
        <section id="testimonial" className="section container">
            <Title title="Testimonial" />
            <SubTitle title="See what they say about me" />

            <ul className="testimoinals">
                {testimonials && testimonials.map(item =>
                    <li className="testimoinal">
                        <AvatarImage    img={item.img} 
                                        msg={item.alt} 
                                        style="testimoinal-img" 
                        />
                        <div className="testimoinal-text">
                            <p>{item.desc}</p>
                            <p><a href="#" className="testimoinal-text-name">{item.name}</a> / {item.company}</p>
                        </div>
                    </li>
                )}
            </ul>
        </section>
    );
}