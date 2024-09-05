import OfferedCourse from "../pages/student/OfferedCourse";
import StudentDashboard from "../pages/student/StudentDashboard";
import Schedule from "../pages/student/Schedule";


export const StudentPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <StudentDashboard />
    },
    {
        name: "Offered Course",
        path: "offered-course",
        element: <OfferedCourse />
    },
    {
        name: "My Schedule",
        path: "schedule",
        element: <Schedule />
    },
];