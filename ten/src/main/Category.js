import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFiltredCategory } from "../api";
import Preloader from "../components/preloader/Preloader";
import MealList from "../components/MealList";
import './Category.css';

function Category(){
    const [meals, setMeals] = useState([]);
    const {name} = useParams();
    const navigate = useNavigate();
    let goBack = () => navigate(-1);

    useEffect(() => {
        getFiltredCategory(name).then(data => setMeals(data.meals))
    }, [name]);

    return (
        <div className="wrap">
            {
                !meals.length ? <Preloader /> : <MealList meals={meals} />                
            }
            <button className="btn" onClick={goBack}>Go Back</button>
        </div>
    )
}

export default Category;