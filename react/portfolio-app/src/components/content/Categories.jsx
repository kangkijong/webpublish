import { useState } from 'react';

export function Category({style, name, count}) {
    return (
        <>
            <button className={style}>
                {name}
                <span className="category-count selected">{count}</span>
            </button>  
        </>
    );
}

export function Categories({categories}) {
    const [name, setName] = useState('All');

    return (
            <ul className="categories">
                {categories && categories.map(category =>
                    <li>
                        <Category   name={category.name}
                                    count={category.count}
                                    style={name === category.name ? "category selected" : "category"}
                        />
                    </li>
                )}
            </ul>
        );
}