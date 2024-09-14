import Restaurantcards from "./Restaurantcards";
import restData from "../utils/Data";


const Mainbody = () =>{
    return(
        <div className="mainbody">
            <div className="filter-btn">
                <button className="filter" onClick={()=>{console.log("clicked")}}>Top Rated</button>
            </div>
            <div className="rest-container">
                {
                    restData.map((restaurant)=>(<Restaurantcards key={restaurant.id} restData={restaurant}/>))
                }
            </div>
        </div>
    )
};

export default Mainbody;