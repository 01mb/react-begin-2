import Restaurantcards from "./Restaurantcards";
import restData from "../utils/Data";
import { useState } from "react";

const Mainbody = () => {
    const [listRestData, setlistRestData] = useState(restData)
  return (
    <div className="mainbody">
      <div className="filter-btn">
        <button
          className="filter"
          onClick={() => {
            filterList = restData.filter((res) => res.rating > 3);
            setlistRestData(filterList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="rest-container">
        {listRestData.map((restaurant) => (
          <Restaurantcards key={restaurant.id} listRestData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Mainbody;
