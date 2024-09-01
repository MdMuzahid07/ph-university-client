/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex } from "antd";
import PHInput from "../../../components/form/PHInput";
import PHSelect from "../../../components/form/PHSelect";
import PHForm from "../../../components/form/PHForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { DepartmentSchema } from "../../../schema/academicManagement.schema";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useAddDepartmentMutation } from "../../../redux/features/admin/departmentManagement.api";
import { toast } from "sonner";
import { useGetAllAcademicFacultiesQuery } from "../../../redux/features/admin/facultyManagement.api";

const CreateAcademicDepartment = () => {
    const { data: allFaculties } = useGetAllAcademicFacultiesQuery(undefined);
    const [addDepartment] = useAddDepartmentMutation();

    const options = allFaculties?.data?.map(({ _id, name }) => ({
        value: _id,
        label: name
    }));

    const submitHandler: SubmitHandler<FieldValues> = async (data) => {

        const createDepartmentToastId = toast.loading("Creating...");

        console.log(data)
        const departmentData = {
            name: data.name,
            academicFaculty: data.academicFaculty
        };

        try {
            const res = await addDepartment(departmentData);

            if (res && res?.data?.success) {
                toast.success("Department created", { id: createDepartmentToastId });
            } else {
                toast.error("Department not created!", { id: createDepartmentToastId });
            }

        } catch (error) {
            toast.error("something went wrong!", { id: createDepartmentToastId });
        }
    };

    return (
        <Flex justify="center" align="center">
            <Col span={6}>
                <PHForm onSubmit={submitHandler} resolver={zodResolver(DepartmentSchema) as any}>
                    <PHInput name="name" type="text" label="Department Name" />
                    <PHSelect name="academicFaculty" label="Academic Faculty" options={options} />
                    <Button htmlType="submit">Submit</Button>
                </PHForm>
            </Col>
        </Flex>
    )
}

export default CreateAcademicDepartment;