import {Link} from 'react-router-dom';
import './CategoryItem.css';

function CategoryItem({strCategory, strCategoryThumb, strCategoryDescription}){
    return(
        <div className="card">
            <img src={strCategoryThumb} alt="" />
            <h2>{strCategory}</h2>
            <p>{strCategoryDescription.slice(0, 80)}...</p>

            <div className="card-action">
                <Link to={`/category/${strCategory}`}>Watch Category</Link>
            </div>
        </div>
    )
}

export default CategoryItem;