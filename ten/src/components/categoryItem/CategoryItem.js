import './CategoryItem.css';

function CategoryItem({strCategory, strCategoryThumb, strCategoryDescription}){
    return(
        <div className="card">
            <img src={strCategoryThumb} alt="" />
            <h2>{strCategory}</h2>
            <p>{strCategoryDescription.slice(0, 80)}...</p>

            <div className="card-action">
                <a href="#1">Watch Category</a>
            </div>
        </div>
    )
}

export default CategoryItem;