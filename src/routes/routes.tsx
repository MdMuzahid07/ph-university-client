import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { adminPaths } from "./admin.routes";
import { routesGenerator } from "../utils/routesGenerator";
import { FacultyPaths } from "./faculty.routes";
import { StudentPaths } from "./student.routes";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/admin",
        element: <App />,
        children: routesGenerator(adminPaths),
    },
    {
        path: "/faculty",
        element: <App />,
        children: routesGenerator(FacultyPaths),
    },
    {
        path: "/student",
        element: <App />,
        children: routesGenerator(StudentPaths),
    },
    {
        path: "/Login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },

]);


export default router;