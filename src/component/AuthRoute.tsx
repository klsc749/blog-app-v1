import { Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserServiceApi } from "../service/admin/UserServiceApi";

function AuthRoute() {
    const token = localStorage.getItem("token") || "";
    const username = localStorage.getItem("username") || "";
    const [auth, setAuth] = useState<boolean | null>(null);

    useEffect(() => {
        async function checkLogin() {
            try {
                const res = await UserServiceApi.checkToken(username, token);
                setAuth(res.data);
            } catch (error) {
                setAuth(false);
            }
        }

        if (auth === null) {
            checkLogin();
        }
    }, []);

    if (auth === null) {
        return <div>Loading...</div>;
    }

    return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default AuthRoute;