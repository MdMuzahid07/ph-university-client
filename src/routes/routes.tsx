import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { adminPaths } from "./admin.routes";
import { routesGenerator } from "../utils/routesGenerator";
import { FacultyPaths } from "./faculty.routes";
import { StudentPaths } from "./student.routes";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import PasswordChange from "../pages/PasswordChange";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/admin",
        element:
            <ProtectedRoute role="admin">
                <App />
            </ProtectedRoute>,
        children: routesGenerator(adminPaths),
    },
    {
        path: "/faculty",
        element:
            <ProtectedRoute role="faculty" >
                <App />
            </ProtectedRoute >,
        children: routesGenerator(FacultyPaths),
    },
    {
        path: "/student",
        element:
            <ProtectedRoute role="student" >
                <App />
            </ProtectedRoute >,
        children: routesGenerator(StudentPaths),
    },
    {
        path: "/Login",
        element: <Login />
    },
    {
        path: "/change-password",
        element: <PasswordChange />
    },
    {
        path: "/register",
        element: <Register />
    },

]);


export default router;