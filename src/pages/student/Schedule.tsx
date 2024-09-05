/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllEnrolledCourseQuery } from "../../redux/features/student/student.course.management.api"

const Schedule = () => {
    const { data } = useGetAllEnrolledCourseQuery(undefined);


    if (!data?.data?.result.length) {
        return <p>No data found!</p>
    }


    return (
        <div>
            {
                data?.data?.result?.map((item: any) => {
                    return <div>
                        <div>{item.course.title}</div>
                        <div>{item.offeredCourse.section}</div>
                        <div>{item.offeredCourse.days.map((item: any) => <span> {item} </span>)}</div>
                    </div>
                })
            }
        </div>
    )
}

export default Schedule;