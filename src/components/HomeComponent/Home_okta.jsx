// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";

import { HomePage } from "../pages";

function Home() {
    const { authState, authService } = useOktaAuth();
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        if (!authState.isAuthenticated) {
            // When user isn't authenticated, forget any user info
            setUserInfo(null);
        } else {
            authService.getUser().then((info) => {
                setUserInfo(info);
            });
        }
    }, [authState, authService]);

    if (authState.isPending) return <div>...loading login</div>;
    return (
        <>
            {authState.isAuthenticated && !userInfo && (
                <div>Loading user information...</div>
            )}
            {authState.isAuthenticated && userInfo && <HomePage />}
        </>
    );
    // Authstate is the prop we want to use to check if users are authenticated.
    // We can perform these checks on the front end, but ought to make sure we perform them on the backend.
}

export default Home;
