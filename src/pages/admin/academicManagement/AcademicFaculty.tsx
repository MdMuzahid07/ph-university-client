import { useGetAllFacultiesQuery } from "../../../redux/features/admin/facultyManagement.api";


const AcademicFaculty = () => {
    const { data, isError, isLoading } = useGetAllFacultiesQuery();

    console.log(data, "data %%%%%%%%%%%%%%%%")
    console.log(isError, "error ====================")

    return (
        <div>
            Academic Faculty
        </div>
    )
};

export default AcademicFaculty