import { useState } from "react";
import { TQueryParam } from "../../../types";
import { useGetAllDepartmentsQuery } from "../../../redux/features/admin/departmentManagement.api";
import { Button, Table } from "antd";

const AcademicDepartment = () => {
    // const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
    const { data: academicSemesterData, isFetching } = useGetAllDepartmentsQuery(params);

    const tableData = academicSemesterData?.data?.map(({ _id, name, academicFaculty }) => ({
        key: _id,
        name,
        academicFaculty: academicFaculty.name
    }))


    const columns = [
        {
            title: 'Name',
            key: "name",
            dataIndex: 'name',
            // filters: [
            //     {
            //         text: 'Autumn',
            //         value: 'Autumn',
            //     },
            //     {
            //         text: 'Summer',
            //         value: 'Summer',
            //     },
            //     {
            //         text: 'Fall',
            //         value: 'Fall',
            //     },
            // ],
        },
        {
            title: "Academic Faculty",
            name: 'academicFaculty',
            dataIndex: 'academicFaculty',
        },
        {
            title: "Action",
            key: "X",
            render: () => {
                return (
                    <div>
                        <Button>Update</Button>
                    </div>
                )
            }
        }
    ];


    // const onChange: TableProps<TTableData>['onChange'] = (_pagination, filters, _sorter, extra) => {
    //     if (extra.action === "filter") {
    //         const queryParams: TQueryParam[] = [];

    //         filters.name?.forEach((item) => (
    //             queryParams.push({ name: "name", value: item })
    //         ));

    //         setParams(queryParams);
    //     }
    // };

    return (
        <Table
            columns={columns}
            loading={isFetching}
            dataSource={tableData}
            // onChange={onChange}
            showSorterTooltip={{ target: 'sorter-icon' }}
        />
    )
}

export default AcademicDepartment