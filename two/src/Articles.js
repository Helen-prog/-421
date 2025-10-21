import Article from "./Article";
import mars from './icons/mars.png';
import female from './icons/female.png';

function Articles(props) {
    let { db } = props;
    let icon;

    return (
        <div className="app">
            {
                Object.keys(db).map((elem, index) => {
                    if(db[elem].pol === 'female'){
                        icon = female;
                    } else{
                        icon = mars;
                    }
                    // console.log(db[elem]);
                    
                    return(
                        <Article icon={icon} {...db[elem]}  key={index} />                    
                   
                    )
                })

            }

        </div>
    )
}

export default Articles;