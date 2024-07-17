import { Button, Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAcademicSemester, TQueryParam } from "../../../types";
import { useState } from "react";

type TTableData = Pick<TAcademicSemester, "name" | "startMonth" | "endMonth" | "year">;

const AcademicSemester = () => {
    const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
    const { data: academicSemesterData, isFetching } = useGetAllSemestersQuery(params);

    const tableData = academicSemesterData?.data?.map(({ _id, name, endMonth, startMonth, year }) => ({
        key: _id,
        name,
        endMonth,
        startMonth,
        year
    }))



    const columns: TableColumnsType<TTableData> = [
        {
            title: 'Name',
            key: "name",
            dataIndex: 'name',
            filters: [
                {
                    text: 'Autumn',
                    value: 'Autumn',
                },
                {
                    text: 'Summer',
                    value: 'Summer',
                },
                {
                    text: 'Fall',
                    value: 'Fall',
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


    const onChange: TableProps<TTableData>['onChange'] = (_pagination, filters, _sorter, extra) => {
        if (extra.action === "filter") {
            const queryParams: TQueryParam[] = [];

            filters.name?.forEach((item) => (
                queryParams.push({ name: "name", value: item })
            ));

            setParams(queryParams);
        }
    };

    return (
        <Table
            columns={columns}
            loading={isFetching}
            dataSource={tableData}
            onChange={onChange}
            showSorterTooltip={{ target: 'sorter-icon' }}
        />
    )
}

export default AcademicSemester

