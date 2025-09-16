import { Title, Description } from '../base/Title.jsx';
import { Testimonials } from './Testimonials.jsx';

export function Testimonial() {
    return (
        <section id="testimonial" class="section container">
            <Title title="Testimonial" />
            {/* <h2 class="title">Testimonial</h2> */}
            <Description text="See what they say about me" />
            {/* <p class="description">See what they say about me</p> */}
            <Testimonials />
            {/* <ul class="testimoinals">
                <li class="testimoinal">
                    <img class="testimoinal-img" src="images/testimonials/people1.webp" alt="testimoinal-img" />
                    <div class="testimoinal-text">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo excepturi atque, laboriosam deleniti illum doloremque laudantium molestiae aliquid, debitis repellat repudiandae dolorum perferendis. Voluptate maxime magnam, aperiam vel libero esse?</p>
                        <p><a href="#" class="testimoinal-text-name">James Kim</a> / Google</p>
                    </div>
                </li>
                <li class="testimoinal">
                    <img class="testimoinal-img" src="images/testimonials/people2.webp" alt="testimoinal-img" />
                    <div class="testimoinal-text">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo excepturi atque, laboriosam deleniti illum doloremque laudantium molestiae aliquid, debitis repellat repudiandae dolorum perferendis. Voluptate maxime magnam, aperiam vel libero esse?</p>
                        <p><a href="#" class="testimoinal-text-name">Smith Park</a> / Samsung</p>
                    </div>
                </li>
                <li class="testimoinal">
                    <img class="testimoinal-img" src="images/testimonials/people3.webp" alt="testimoinal-img" />
                    <div class="testimoinal-text">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo excepturi atque, laboriosam deleniti illum doloremque laudantium molestiae aliquid, debitis repellat repudiandae dolorum perferendis. Voluptate maxime magnam, aperiam vel libero esse?</p>
                        <p><a href="#" class="testimoinal-text-name">Anna Jin</a> / Samsung</p>
                    </div>
                </li>
            </ul> */}
        </section>
    );
}