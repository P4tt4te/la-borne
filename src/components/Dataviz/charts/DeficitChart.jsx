import React, { useEffect, useState } from "react";

const DeficitChart = ({ deficitData }) => {

    const [styleOptions, setStyleOptions] = useState({ height: "95%", borderRadius: "0 0 24px 24px" });

    const changeStyle = () => {
        const bottomRadius = '24px 24px';
        let topRadius = 0;
        let newBorderRadius = topRadius.toString() + " " + topRadius.toString() + " " + bottomRadius;
        if (deficitData >= 95) {
            let spaceLeft = deficitData - 95;
            topRadius = ((24 / 5) * spaceLeft).toFixed()
            newBorderRadius = topRadius.toString() + "px " + topRadius.toString() + "px " + bottomRadius;
        }
        const newHeight = deficitData.toString() + "%"
        setStyleOptions({ height: newHeight, borderRadius: newBorderRadius })
    }

    useEffect(() => {
        changeStyle()
    }, [deficitData])

    return (
        <div style={{ display: "flex", marginTop: 120 }}>
            <div className="jauge-div">
                <div className="jauge-deficit-ext"> </div>
                <div className="jauge-int">
                    <div style={styleOptions} className="jauge-deficit-int-active"></div>
                </div>
            </div>
            <div className="jauge-label deficit-label">
                <p><b>{deficitData}%</b> des films regardés sont déficitaires</p>
            </div>
        </div>
    )
}

export default DeficitChart;