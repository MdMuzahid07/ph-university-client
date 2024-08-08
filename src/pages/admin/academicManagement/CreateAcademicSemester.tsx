/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm"
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { semesterOptions } from "../../../constants/semester";
import { monthOptions } from "../../../constants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schema/academicManagement.schema";
import { useAddAcademicSemestersMutation } from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";



const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
    value: String(currentYear + number),
    label: String(currentYear + number)
}));


const CreateAcademicSemester = () => {

    const [addAcademicSemester] = useAddAcademicSemestersMutation();


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {

        const toastId = toast.loading("Creating...");

        const name = semesterOptions[Number(data?.name) - 1]?.label;

        const semesterData = {
            name,
            code: data.name,
            year: data.year,
            startMonth: data.startMonth,
            endMonth: data.endMonth
        };
        try {
            console.log(semesterData);
            const res = await addAcademicSemester(semesterData);

            if (res.data.errorSources) {
                toast.error(res.data.errorSources[0].message, { id: toastId });
            } else {
                toast.success("Semester created", { id: toastId })
            }

        } catch (error) {
            toast.error("something went wrong!")
        }
    }


    return (
        <Flex justify="center" align="center">
            <Col span={6}>
                <PHForm onSubmit={onSubmit} resolver={zodResolver(academicSemesterSchema) as any}>
                    <PHSelect label="Name" name="name" options={semesterOptions} />
                    <PHSelect label="Year" name="year" options={yearOptions} />
                    <PHSelect label="Start Month" name="startMonth" options={monthOptions} />
                    <PHSelect label="End Month" name="endMonth" options={monthOptions} />
                    <Button htmlType="submit">Submit</Button>
                </PHForm>
            </Col>
        </Flex >
    )
};

export default CreateAcademicSemester;