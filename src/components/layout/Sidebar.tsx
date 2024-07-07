import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { Layout, Menu } from "antd";
import { FacultyPaths } from "../../routes/faculty.routes";
import { StudentPaths } from "../../routes/student.routes";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
const { Sider } = Layout;



const userRole = {
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "student",
}


const Sidebar = () => {
    const user = useAppSelector(selectCurrentUser);

    let sidebarItems;

    switch (user!.role) {
        case userRole.ADMIN:
            sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
            break;
        case userRole.FACULTY:
            sidebarItems = sidebarItemsGenerator(FacultyPaths, userRole.FACULTY);
            break;
        case userRole.STUDENT:
            sidebarItems = sidebarItemsGenerator(StudentPaths, userRole.STUDENT);
            break;
        default:
            break;
    }



    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div style={{
                color: "white",
                height: "4rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <h1>PH University</h1>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
        </Sider>
    )
}

export default Sidebar