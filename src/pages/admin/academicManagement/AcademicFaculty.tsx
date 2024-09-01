import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllAcademicFacultiesQuery } from "../../../redux/features/admin/facultyManagement.api";

interface DataType {
    name: string;
}


const AcademicFaculty = () => {
    const { data: facultyData, isFetching } = useGetAllAcademicFacultiesQuery(undefined);

    const columns: TableColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
        }
    ];

    const data = facultyData?.data?.map(({ _id, name }) => ({
        key: _id,
        name
    }));

    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };


    return (
        <Table
            columns={columns}
            loading={isFetching}
            dataSource={data}
            onChange={onChange}
            showSorterTooltip={{ target: 'sorter-icon' }}
        />
    )
};

export default AcademicFaculty