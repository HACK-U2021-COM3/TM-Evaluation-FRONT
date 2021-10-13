import React, { useContext } from "react";
import { UserContext } from "lib/contexts/AuthContext";
import { SearchProvider } from "lib/contexts/SearchContext";
import HomeGuestContent from "./HomeGuestContent";
import HomeLoginContent from "./HomeLoginContent";
import { RouteProviver } from "lib/contexts/RouteContext";


const HomeContent: React.VFC = () => {
    const {user} = useContext(UserContext)
    return (
            !user ? (
                <>
                    <SearchProvider>
                        <RouteProviver>
                            <HomeGuestContent/>
                        </RouteProviver>
                    </SearchProvider>
                </>

            ) : (
                <SearchProvider>
                    <RouteProviver>
                        <HomeLoginContent />
                    </RouteProviver>
                </SearchProvider>
            )
    )
}

export default HomeContent;
