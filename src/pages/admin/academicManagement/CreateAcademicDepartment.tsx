/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex } from "antd";
import PHInput from "../../../components/form/PHInput";
import PHSelect from "../../../components/form/PHSelect";
import { useGetAllFacultiesQuery } from "../../../redux/features/admin/facultyManagement.api";
import PHForm from "../../../components/form/PHForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { DepartmentSchema } from "../../../schema/academicManagement.schema";
import { FieldValues, SubmitHandler } from "react-hook-form";

const CreateAcademicDepartment = () => {
    const { data: allFaculties } = useGetAllFacultiesQuery();

    const options = allFaculties?.data?.map(({ _id, name }) => ({
        value: _id,
        label: name
    }));

    const submitHandler: SubmitHandler<FieldValues> = (data) => {
        console.log(data, "academic Department");
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