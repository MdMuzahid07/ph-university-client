import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm"
import PHInput from "../../../components/form/PHInput"
import { Button, Col, Divider, Row } from "antd";

const studentDummyData = {
    "password": "student123",
    "student": {
        "id": "92654524324",
        "name": {
            "firstName": "Mr",
            "middleName": " student",
            "lastName": "John"
        },
        "gender": "male",
        "dateOfBirth": "1990-01-01",
        "bloodGroup": "A+",

        "email": "student2@gmail.com",
        "contactNumber": "+1234567890",
        "emergencyContactNo": "+9876543210",
        "presentAddress": "123 Main Street, New York",
        "permanentAddress": "456 Elm Street, New York",

        "guardian": {
            "fatherName": "Peter Doe",
            "fatherOccupation": "Software Engineer",
            "fatherContactNo": "+1234567891",
            "motherName": "Jane Doe",
            "motherOccupation": "Teacher",
            "motherContactNo": "+1234567892"
        },
        "localGuardian": {
            "name": "John Smith",
            "occupation": "Doctor",
            "contactNo": "+9876543212",
            "address": "789 Oak Street, New York"
        },
        "admissionSemester": "6689273cae39531aa4a8be72",
        "academicDepartment": "66892605ae39531aa4a8be6f"
    }
}

const CreateStudent = () => {

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);

        const formData = new FormData();
        formData.append("data", JSON.stringify(data));
    };


    return (
        <Row >
            <Col span={24}>
                <PHForm onSubmit={onSubmit}>
                    <Divider>Personal Info</Divider>
                    <Row gutter={8}>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput type="text" name="name.firstName" label="First Name" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput type="text" name="name.middleName" label="Middle Name" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput type="text" name="name.lastName" label="Last Name" />
                        </Col>

                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput type="text" name="gender" label="Gender" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput type="text" name="dateOfBirth" label="Date Of Birth" />
                        </Col>
                        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                            <PHInput type="text" name="bloodGroup" label="Blood Group" />
                        </Col>
                    </Row>
                    <Button htmlType="submit">Submit</Button>
                </PHForm>
            </Col>
        </Row>
    )
}

export default CreateStudent