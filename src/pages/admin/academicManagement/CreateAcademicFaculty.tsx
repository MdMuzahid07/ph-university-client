/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex } from "antd"
import PHForm from "../../../components/form/PHForm"
import PHInput from "../../../components/form/PHInput"
import { FacultySchema } from "../../../schema/academicManagement.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAddFacultyMutation } from "../../../redux/features/admin/facultyManagement.api"
import { toast } from "sonner"
import { FieldValues, SubmitHandler } from "react-hook-form"

const CreateAcademicFaculty = () => {
    const [addFaculty] = useAddFacultyMutation();


    const handleSubmit: SubmitHandler<FieldValues> = async (data) => {

        const facultyToastId = toast.loading("Creating...")

        const facultyData = {
            name: data.name
        };

        try {
            const res = await addFaculty(facultyData);

            if (res.data.errorSources) {
                toast.error(res.data.errorSources[0].message, { id: facultyToastId });
            }
            else {
                toast.success("Faculty created", { id: facultyToastId });
            }
        } catch (error) {
            toast.error("something went wrong!");
        }
    };


    return (
        <Flex justify="center" align="center">
            <Col span={6}>
                <PHForm onSubmit={handleSubmit} resolver={zodResolver(FacultySchema) as any}>
                    <PHInput type="text" name="name" label="Add Faculty" />
                    <Button htmlType="submit">Submit</Button>
                </PHForm>
            </Col>
        </Flex >
    )
}

export default CreateAcademicFaculty