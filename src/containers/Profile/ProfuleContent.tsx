import React from "react";
import ProfileHeaderComponent from "components/Profile/headers/ProfileHeader";
import PlanComponent from "components/Plan";
import ProfileContentComponent from "components/Profile/ProfileContent";


const ProfileContent: React.VFC = () => {
    // ここで処理書く
    return(
        <>
            <ProfileHeaderComponent />
            <>
                <ProfileContentComponent />
                <PlanComponent />
            </>
        </>
    );
}

export default ProfileContent;