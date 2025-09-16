export function Category({categoryName, count}) {
    return (
        <>
            <button className="category">
                {categoryName}
                <span className="category-count selected">{count}</span>
            </button>  
        </>
    );
}

export function Categories() {
    const category = [
        {
            "categoryName": "All",
            "count": 8,
        },
        {
            "categoryName": "Front-end",
            "count": 4,
        },
        {
            "categoryName": "Back-end",
            "count": 2,
        },
        {
            "categoryName": "Mobile",
            "count": 2,
        }
    ];

    return (
        <ul className="categories">
            {category && category.map(cate =>
                <li>
                    <Category   categoryName={cate.categoryName}
                                count={cate.count}
                    />
                </li>
            )}
        </ul>
    );
}