import { Title, Description } from '../base/Title.jsx';
import { Testimonials } from './Testimonials.jsx';

export function Testimonial() {
    return (
        <section id="testimonial" class="section container">
            <Title title="Testimonial" />
            <Description text="See what they say about me" />
            <Testimonials />
        </section>
    );
}