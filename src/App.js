import React from "react";
import ReactDom from "react-dom/client";

import Heading from "../componenet/Heading";
import Mainbody from "../componenet/Mainbody";
import Restaurantcards from "../componenet/Restaurantcards";



const Applayout = () => {
    return(
        <div className="app">
            <Heading/>
            <Mainbody/>
        </div>
    )
}


const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Applayout/>); 