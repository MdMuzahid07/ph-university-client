import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { logout, selectCurrentToken } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";

type TProtectedRoute = {
    children: ReactNode,
    role: string | undefined
};


const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
    const token = useAppSelector(selectCurrentToken);
    let user;
    const dispatch = useAppDispatch();

    if (token) {
        user = verifyToken(token);
    }

    if (role !== undefined && role !== user?.role) {
        dispatch(logout());
        return <Navigate to="/login" replace={true} />;
    }

    if (!token) {
        return <Navigate to="/login" replace={true} />
    }

    return children
}

export default ProtectedRoute