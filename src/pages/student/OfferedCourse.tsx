/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Row } from "antd";
import { useEnrollCourseMutation, useGetAllOfferedCoursesQuery } from "../../redux/features/student/student.course.management.api"


type TCourse = {
    [index: string]: any
};

const OfferedCourse = () => {
    const { data: allOfferedCourses } = useGetAllOfferedCoursesQuery(undefined);
    const [enrollCourse] = useEnrollCourseMutation();


    const singleObject = allOfferedCourses?.data?.result?.reduce((accumulator: TCourse, item: any) => {
        const key = item.course.title;

        accumulator[key] = accumulator[key] || {
            courseTitle: key,
            sections: []
        };

        accumulator[key].sections.push({
            section: item.section,
            _id: item._id,
            days: item.days,
            startTime: item.startTime,
            endTime: item.endTime
        });

        return accumulator;
    }, {});

    const modifiedData = Object.values(singleObject ? singleObject : {});

    if (!modifiedData.length) {
        return <p>No available courses</p>
    }



    const handleEnroll = async (id: string) => {

        const enrollData = {
            offeredCourse: id
        };

        const res = await enrollCourse(enrollData)
        console.log(res);
    };

    return (
        <Row gutter={[0, 20]}>
            {
                modifiedData.map(item => {
                    return <Col span={24}
                        style={{ borderTop: "solid #d4d4d4 2px" }}
                    >
                        <div style={{ padding: "10px" }}>
                            <h2> {item?.courseTitle}</h2>
                        </div>
                        <div>
                            {
                                item.section.map((section) => {

                                    return <Row justify="space-between"
                                        align="middle"
                                        style={{ borderTop: "solid #d4d4d4 2px", padding: "10px" }}
                                    >
                                        <Col span={5}>Section:{section.section}</Col>
                                        <Col span={5}>days:{section.days.map((day) => <span>{day}</span>)}</Col>
                                        <Col span={5}> Start Time{item?.startTime}</Col>
                                        <Col span={5}>End Time {item?.endTime}</Col>
                                        <Button onClick={() => handleEnroll(section._id)}>Enroll</Button>
                                    </Row>
                                })
                            }
                        </div>
                    </Col>
                })
            }
        </Row >
    )
}

export default OfferedCourse