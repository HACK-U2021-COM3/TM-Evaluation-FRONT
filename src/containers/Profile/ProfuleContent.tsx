import React, {useContext} from "react";
import { UserContext } from "lib/contexts/AuthContext";
import ProfileHeaderComponent from "components/Profile/headers/ProfileHeader";
import PlanComponent from "components/Plan";
import ProfileContentComponent from "components/Profile/ProfileContent";


const ProfileContent: React.VFC = () => {
    // ここで処理書く
    const {user} = useContext(UserContext)
    return(
        <>
            <ProfileHeaderComponent user={user} />
            <>
                <ProfileContentComponent user={user} />
                <PlanComponent />
            </>
        </>
    );
}

export default ProfileContent;