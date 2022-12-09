import React, { useEffect, useState } from "react";

const ReviewsChart = ({ reviewsData }) => {
    const [styleOptions, setStyleOptions] = useState({ height: "95%", borderRadius: "0 0 24px 24px" });

    const changeStyle = () => {
        const bottomRadius = '24px 24px';
        let topRadius = 0;
        let newBorderRadius = topRadius.toString() + " " + topRadius.toString() + " " + bottomRadius;
        if (reviewsData >= 95) {
            let spaceLeft = reviewsData - 95;
            topRadius = ((24 / 5) * spaceLeft).toFixed()
            newBorderRadius = topRadius.toString() + "px " + topRadius.toString() + "px " + bottomRadius;
        }
        const newHeight = reviewsData.toString() + "%"
        setStyleOptions({ height: newHeight, borderRadius: newBorderRadius })
    }

    useEffect(() => {
        changeStyle()
    }, [reviewsData])

    return (
        <div style={{ display: 'flex', marginTop: 120 }}>
            <div className="jauge-div">
                <div className="jauge-reviews-ext"> </div>

                <div className="jauge-int">
                    <div style={styleOptions} className="jauge-reviews-int-active"></div>
                </div>
                <div>
                </div>
            </div>
            <div className="jauge-label reviews-label">
                <p><b>{reviewsData}%</b> des films regardés ont des avis positifs </p>
            </div>
        </div>
    )
}

export default ReviewsChart;