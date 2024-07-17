import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
}

const AcademicSemester = () => {
    const { data: academicSemesterData } = useGetAllSemestersQuery(undefined);

    const tableData = academicSemesterData?.data?.map(({ _id, name, endMonth, startMonth, year }) => ({
        _id,
        name,
        endMonth,
        startMonth,
        year
    }))



    const columns: TableColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            showSorterTooltip: { target: 'full-header' },
            filters: [
                {
                    text: 'Joe',
                    value: 'Joe',
                },
                {
                    text: 'Jim',
                    value: 'Jim',
                },
                {
                    text: 'Submenu',
                    value: 'Submenu',
                    children: [
                        {
                            text: 'Green',
                            value: 'Green',
                        },
                        {
                            text: 'Black',
                            value: 'Black',
                        },
                    ],
                },
            ],
        },
        {
            title: 'Year',
            dataIndex: 'year',
        },
        {
            title: 'Start Month',
            dataIndex: 'startMonth',
        },
        {
            title: 'End Month',
            dataIndex: 'endMonth',
        }
    ];


    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <Table
            columns={columns}
            dataSource={tableData}
            onChange={onChange}
            showSorterTooltip={{ target: 'sorter-icon' }}
        />
    )
}

export default AcademicSemester

