// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";

import { HomePage } from "../../src/components/pages/index.js";

function Home({ LoadingComponent }) {
    const { authState, authService } = useOktaAuth();
    const [userInfo, setUserInfo] = useState(null);
    useEffect(() => {
        if (!authState.isAuthenticated) {
            // When user isn't authenticated, forget any user info
            // Our router will redirect back to login anyway.
            setUserInfo(null);
        } else {
            authService.getUser().then((info) => {
                // if user is authenticated we can use the authService to snag some user info.
                setUserInfo(info);
            });
        }
    }, [authState, authService]);

    return (
        <>
            {authState.isAuthenticated && !userInfo && (
                <LoadingComponent message="... Fetching user profile" />
            )}
            {authState.isAuthenticated && userInfo && (
                <HomePage userInfo={userInfo} />
            )}
        </>
    );
}

export default Home;
