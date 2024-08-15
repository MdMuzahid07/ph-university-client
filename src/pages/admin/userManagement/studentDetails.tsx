import { useParams } from "react-router-dom"

const StudentDetails = () => {
    const { studentId } = useParams();


    return (
        <div>studentDetails of{studentId}</div>
    )
}

export default StudentDetails;