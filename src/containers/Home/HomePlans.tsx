import React from "react";
import HomePlanRouteComponent from "components/Home/plans/HomePlanRouteContent";
import HomeTimelineComponent from "components/Home/plans/HomeTimeline";

const HomePlansContent: React.VFC = () => {
    // ここで処理
    return(
        <>
            <HomePlanRouteComponent>
                <HomeTimelineComponent />
            </HomePlanRouteComponent>
        </>
    )
}

export default HomePlansContent;

