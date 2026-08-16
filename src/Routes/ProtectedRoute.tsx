import { useContext, type JSX } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: {children: JSX.Element}) => {
    const { isLoggedon } = useContext(AuthContext);

    if (!isLoggedon) {
        return <Navigate to="/login" replace />;
    }

    return children;
}
