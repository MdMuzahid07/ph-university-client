/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm"
import { Button, Col, Flex } from "antd";
import { toast } from "sonner";
import { useAddCourseMutation, useGetAllCoursesQuery } from "../../../redux/features/admin/courseManageApi";
import { TResponse } from "../../../types";
import PHInput from "../../../components/form/PHInput";
import PHSelect from "../../../components/form/PHSelect";

const CreateCourse = () => {
    const [addCourse] = useAddCourseMutation();
    const { data: courses } = useGetAllCoursesQuery(undefined);


    const coursesOptions = courses?.data?.result.map((item) => ({
        value: item._id,
        label: item.title
    }));


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {

        const toastId = toast.loading("Creating...");

        const courseData = {
            ...data,
            code: Number(data.Code),
            credits: Number(data.Credits),
            isDeleted: false,
            preRequisiteCourses: data?.preRequisiteCourses ? data?.preRequisiteCourses?.map(item => ({
                course: item,
                isDeleted: false
            })) : []
        };

        console.log(courseData, "🚀🚀🚀🚀🚀🚀");

        try {
            const res = (await addCourse(courseData)) as TResponse<any>;
            console.log(res);
            if (res.error) {
                toast.error(res.error.data.message, { id: toastId });
            } else {
                toast.success('Semester created', { id: toastId });
            }
        } catch (err) {
            toast.error('Something went wrong', { id: toastId });
        }
    };


    return (
        <Flex justify="center" align="center">
            <Col span={6}>
                <PHForm onSubmit={onSubmit}>


                    <PHInput type="text" name="title" label="Title" />
                    <PHInput type="text" name="prefix" label="Prefix" />
                    <PHInput type="text" name="Code" label="Code" />
                    <PHInput type="text" name="Credits" label="Credits" />
                    <PHSelect
                        options={coursesOptions}
                        mode="multiple"
                        name="preRequisiteCourses"
                        label="prerequisiteCourses"
                    />
                    <Button htmlType="submit">Submit</Button>
                </PHForm>
            </Col>
        </Flex>
    )
};

export default CreateCourse;