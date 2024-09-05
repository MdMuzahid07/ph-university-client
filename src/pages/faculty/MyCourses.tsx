/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex } from "antd";
import PHForm from "../../components/form/PHForm";
import PHSelect from "../../components/form/PHSelect";
import { useGetAllFacultyCoursesQuery } from "../../redux/faculty/facultyManagement.api"
import { useNavigate } from "react-router-dom";
import { FieldValues, SubmitErrorHandler } from "react-hook-form";

const MyCourses = () => {
    const navigate = useNavigate();
    const { data: facultyCoursesData } = useGetAllFacultyCoursesQuery(undefined);


    const semesterOptions = facultyCoursesData?.data?.data.map((item) => ({
        label: `${item.academicSemester.name} ${item.academicSemester.year}`,
        value: item.semesterRegistration._id
    }));

    const courseOptions = facultyCoursesData?.data?.data.map((item) => ({
        label: item.course.title,
        value: item.course._id
    }));


    const onSubmit: SubmitErrorHandler<FieldValues> = (data) => {
        navigate(`/faculty/courses/${data.semesterRegistration}/${data.course}`)
    };


    return (
        <Flex justify="center" align="center">
            <Col span={6}>
                <PHForm onSubmit={onSubmit}>
                    <PHSelect options={semesterOptions} name="SemesterRegistration" label="Semester" />

                    <PHSelect options={courseOptions} name="course" label="Course" />
                    <Button htmlType="submit">Submit</Button>
                </PHForm>
            </Col>
        </Flex>
    )
};

export default MyCourses;