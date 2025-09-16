export function Testi({img, msg, ment, manager, company}) {
    return (
        <>
            <img class="testimoinal-img" src={img} alt={msg} />
            <div class="testimoinal-text">
                <p>{ment}</p>
                <p><a href="#" class="testimoinal-text-name">{manager}</a> / {company}</p>
            </div>
        </>
    );
}

export function Testimonials() {
    const testimonial = [
        {
            "img": "/images/testimonials/people1.webp",
            "msg": "testimoinal-img",
            "ment": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo excepturi atque, laboriosam deleniti illum doloremque laudantium molestiae aliquid, debitis repellat repudiandae dolorum perferendis. Voluptate maxime magnam, aperiam vel libero esse?",
            "manager": "James Kim",
            "company": "Google"
        },
        {
            "img": "/images/testimonials/people2.webp",
            "msg": "testimoinal-img",
            "ment": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo excepturi atque, laboriosam deleniti illum doloremque laudantium molestiae aliquid, debitis repellat repudiandae dolorum perferendis. Voluptate maxime magnam, aperiam vel libero esse?",
            "manager": "Smith Park",
            "company": "Samsung"
        },
        {
            "img": "/images/testimonials/people2.webp",
            "msg": "testimoinal-img",
            "ment": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo excepturi atque, laboriosam deleniti illum doloremque laudantium molestiae aliquid, debitis repellat repudiandae dolorum perferendis. Voluptate maxime magnam, aperiam vel libero esse?",
            "manager": "Anna Jin",
            "company": "Samsung"
        }
    ];

    return (
        <ul class="testimoinals">
            {testimonial && testimonial.map(test =>
                <li class="testimoinal">
                    <Testi  img={test.img}
                            msg={test.msg}
                            ment={test.ment}
                            manager={test.manager}
                            company={test.company}
                            />
                </li>
            )}
        </ul>
    );
}