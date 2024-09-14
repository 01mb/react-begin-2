import restData from "../utils/Data";

const Restaurantcards = (props) => { 
    const { restData } = props;
    const {name, dish, rating, time, img} = restData;
    return(
        <div className="rest-cards">
            <img className="rest-img" src={img}/>
            <h3>{name}</h3>
            <h4>{dish}</h4>
            <h4>{rating} stars</h4>
            <h4>{time} mins</h4>
        </div>
    )
};

export default Restaurantcards;