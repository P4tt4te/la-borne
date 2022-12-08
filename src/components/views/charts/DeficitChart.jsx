import React from "react";

const DeficitChart = ({ deficitData }) => {
    return (
        <div className="jauge-div">
            <div className="jauge-ext"> </div>
            
            <div  className="jauge-int"> 
                <div style={{ height: "100%" }} className="jauge-int-active"></div>
            </div>
        </div>
    )
}

export default DeficitChart;