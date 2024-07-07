import { useAppSelector } from "../../redux/hooks"
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { selectCurrentToken } from "../../redux/features/auth/authSlice";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const token = useAppSelector(selectCurrentToken);


    if (!token) {
        return <Navigate to="/login" replace={true} />
    }

    return children
}

export default ProtectedRoute