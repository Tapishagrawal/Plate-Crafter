import { useState, useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const AuthContext = createContext();

const getAuthenticatedUser = JSON.parse(localStorage.getItem("authentication")) || [];
const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [authdata, setAuthdata] = useState(getAuthenticatedUser);

    useEffect(() => {
        const authenticatedUser = authdata.find(user => user.isAuthenticated === true);
        setIsAuth(Boolean(authenticatedUser));
    }, [authdata]);

    const login = (userName, password) => {
        const match = authdata.find(
            (user) => user.userName === userName && user.password == password
        );

        if (match) {
            // Mark the matched user as authenticated
            const updatedAuthData = authdata.map(user => ({
                ...user,
                isAuthenticated: user.userName === userName,
            }));

            localStorage.setItem("authentication", JSON.stringify(updatedAuthData));
            setIsAuth(true);
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Wrong User Name and Password",
            });
        }
    };

    const logout = () => {
        // Mark all users as not authenticated
        const updatedAuthData = authdata.map(user => ({
            ...user,
            isAuthenticated: false,
        }));

        localStorage.setItem("authentication", JSON.stringify(updatedAuthData));
        setIsAuth(false);
    };

    return (
        <AuthContext.Provider value={{ isAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
