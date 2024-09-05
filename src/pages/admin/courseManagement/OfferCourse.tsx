import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import { useGetAllAcademicFacultiesQuery } from "../../../redux/features/admin/facultyManagement.api";
import PHSelectWithWatch from "../../../components/form/PHSelectWithWatch";
import { useState } from "react";
import PHSelect from "../../../components/form/PHSelect";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { useGetAllDepartmentsQuery } from "../../../redux/features/admin/departmentManagement.api";
import { useGetAllCoursesQuery, useGetCourseFacultiesQuery } from "../../../redux/features/admin/courseManageApi";
import PHInput from "../../../components/form/PHInput";
import PHDatePicker from "../../../components/form/PHDatePicker";
import moment from "moment";
import PHTimePicker from "../../../components/form/PHTimePicker";


const days = [
    {
        "id": 1,
        "name": "Monday"
    },
    {
        "id": 2,
        "name": "Tuesday"
    },
    {
        "id": 3,
        "name": "Wednesday"
    },
    {
        "id": 4,
        "name": "Thursday"
    },
    {
        "id": 5,
        "name": "Friday"
    },
    {
        "id": 6,
        "name": "Saturday"
    },
    {
        "id": 7,
        "name": "Sunday"
    }
]

const OfferCourse = () => {
    const [selectedCourseId, setSelectedCourseId] = useState(" ");
    const { data: academicFacultyData } = useGetAllAcademicFacultiesQuery(undefined);
    const { data: semesterData } = useGetAllSemestersQuery(undefined);
    const { data: academicDepartmentData } = useGetAllDepartmentsQuery(undefined);
    const { data: selectedCourseFacultyData } = useGetCourseFacultiesQuery(selectedCourseId, { skip: !selectedCourseId });
    const { data: courseData } = useGetAllCoursesQuery(undefined);
    console.log("from parent component", selectedCourseId);

    const academicFacultyOptions = academicFacultyData?.data?.map((item) => ({
        value: item._id,
        label: item.name
    }));

    const semesterOptions = semesterData?.data?.result?.map((item) => ({
        value: item._id,
        label: item.name
    }));

    const academicDepartmentOptions = academicDepartmentData?.data?.map((item) => ({
        value: item._id,
        label: item.name
    }));

    const courseOptions = courseData?.data?.result?.map((item) => ({
        value: item._id,
        label: item.title
    }));

    const courseFacultyOptions = selectedCourseFacultyData?.data?.faculties?.map((item) => ({
        value: item._id,
        label: item?.name?.firstName
    }));

    const dayOptions = days?.map((item) => ({
        value: item.name,
        label: item?.name
    }));


    const onSubmit = (data) => {
        const startH = data.startTime.$H;
        const endH = data.endTime.$H;
        const startM = data.startTime.$m;
        const endM = data.endTime.$m;

        const offerCourseData = {
            ...data,
            startTime: moment({ hour: startH, minute: startM }).format('HH:mm'),
            endTime: moment({ hour: endH, minute: endM }).format('HH:mm')
        }

        console.log(offerCourseData, "Offer Course Data 🤖🤖🤖🤖🤖🤖🤖🤖");
    }

    //* when course selected then faculty input will enable otherwise disabled

    return (
        <Flex justify="center" align="center">
            <Col span={6}>
                <PHForm onSubmit={onSubmit}>
                    {/* // semester registration */}
                    <PHSelect
                        label="Semester Registration"
                        name="semesterRegistration"
                        options={semesterOptions}
                    />

                    {/* // academic faculty  */}
                    <PHSelect
                        label="Academic Faculty"
                        name="academicFaculty"
                        options={academicFacultyOptions}
                    />
                    {/* // academic department  */}
                    <PHSelect
                        label="Academic Department"
                        name="academicDepartment"
                        options={academicDepartmentOptions}
                    />

                    {/* // course */}
                    <PHSelectWithWatch
                        label="Course"
                        name="course"
                        onValueChange={setSelectedCourseId}
                        options={courseOptions}
                    />

                    {/* faculty depends on selected course  */}
                    <PHSelect
                        label="Faculty"
                        name="faculty"
                        disabled={!selectedCourseId}
                        options={courseFacultyOptions}
                    />

                    <PHInput name="section" type="text" label="Section" />
                    <PHInput name="maxCapacity" type="text" label="Max Capacity" />

                    {/* days  */}
                    <PHSelect
                        mode="multiple"
                        label="Days"
                        name="days"
                        options={dayOptions}
                    />

                    <PHTimePicker name="startTime" label="Start Time" />
                    <PHTimePicker name="endTime" label="End Time" />

                    <Button htmlType="submit">Submit</Button>
                </PHForm>
            </Col>
        </Flex>
    )
}

export default OfferCourse;