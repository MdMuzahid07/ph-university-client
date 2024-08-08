import AdminDashboard from "../pages/admin/AdminDashboard";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
import CreateAcademicFaculty from "../pages/admin/academicManagement/CreateAcademicFaculty";
import AcademicFaculty from "../pages/admin/academicManagement/AcademicFaculty";
import CreateAcademicDepartment from "../pages/admin/academicManagement/CreateAcademicDepartment";
import AcademicDepartment from "../pages/admin/academicManagement/AcademicDepartment";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
// import { ReactNode } from "react";
// import { NavLink } from "react-router-dom";


// type TRoute = {
//     path: string,
//     element: ReactNode
// };

// type TSidebarItem = {
//     key: string,
//     label: ReactNode,
//     children?: TSidebarItem[]
// };



export const adminPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <AdminDashboard />
    },
    {
        name: "Academic Management",
        children: [
            {
                name: "Create A. Semester",
                path: "create-academic-semester",
                element: <CreateAcademicSemester />
            },
            {
                name: "Academic Semester",
                path: "academic-semester",
                element: <AcademicSemester />
            },
            {
                name: "Create A. Faculty",
                path: "create-academic-faculty",
                element: <CreateAcademicFaculty />
            },
            {
                name: "Academic Faculty",
                path: "academic-faculty",
                element: <AcademicFaculty />
            },
            {
                name: "Create A. Department",
                path: "create-academic-department",
                element: <CreateAcademicDepartment />
            },
            {
                name: "Academic Department",
                path: "academic-department",
                element: <AcademicDepartment />
            }
        ]
    },
    {
        name: "User Management",
        children: [
            {
                name: "Create Admin",
                path: "create-admin",
                element: <CreateAdmin />
            }, {
                name: "Create Faculty",
                path: "create-faculty",
                element: <CreateFaculty />
            }, {
                name: "Create Student",
                path: "create-student",
                element: <CreateStudent />
            },
        ]
    }
];


//* sidebar items generator

// export const adminSidebarItems = adminPaths.reduce((acc: TSidebarItem[], item) => {

//     if (item.path && item.name) {
//         acc.push({
//             key: item.name,
//             label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
//         })
//     }

//     if (item.children) {
//         acc.push({
//             key: item.name,
//             label: item.name,
//             children: item.children.map((child) => ({
//                 key: child.name,
//                 label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
//             }))
//         })
//     }

//     return acc;
// }, []);









//* pragmatical way

// export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {

//     if (item.path && item.element) {
//         acc.push({
//             path: item.path,
//             element: item.element
//         })
//     }

//     if (item.children) {
//         item.children.forEach((child) => {
//             acc.push({
//                 path: child.path,
//                 element: child.element
//             })
//         })
//     }

//     return acc;
// }, []);




//! hard coded way

// export const adminPaths = [
//     {
//         path: "dashboard",
//         element: <AdminDashboard />
//     },
//     {
//         path: "create-student",
//         element: <CreateStudent />
//     },
//     {
//         path: "create-admin",
//         element: <CreateAdmin />
//     },
//     {
//         path: "create-faculty",
//         element: <CreateFaculty />
//     },
// ];
