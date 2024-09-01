import { Button, Dropdown, Table, TableColumnsType, Tag } from "antd";
import { TSemester, } from "../../../types";
import { useGetAllRegisteredSemestersQuery, useUpdateRegisteredSemesterMutation } from "../../../redux/features/admin/courseManageApi";
import moment from "moment";
import { useState } from "react";

const items = [
    {
        label: "Upcoming",
        key: "UPCOMING"
    },
    {
        label: "Ongoing",
        key: "ONGOING"
    },
    {
        label: "Ended",
        key: "ENDED"
    },
];



type TTableData = Pick<TSemester, "startDate" | "endDate" | "status">;

const RegisteredSemester = () => {
    const [semesterId, setSemesterId] = useState(" ");
    // const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
    const { data: academicSemesterData, isFetching } = useGetAllRegisteredSemestersQuery(undefined);
    const [updateRegisteredSemester] = useUpdateRegisteredSemesterMutation();

    const handleStatusUpdate = (data) => {
        const updateData = {
            id: semesterId,
            data: {
                status: data.key
            }
        };
        updateRegisteredSemester(updateData);
    };

    const menuProps = {
        items,
        onClick: handleStatusUpdate
    };


    const tableData = academicSemesterData?.data?.map((
        { _id, startDate, endDate, status }
    ) => ({
        key: _id,
        startDate: moment(new Date(startDate)).format("MMMM"),
        endDate: moment(new Date(endDate)).format("MMMM"),
        status
    }))



    const columns: TableColumnsType<TTableData> = [
        {
            title: 'Name',
            key: "name",
            dataIndex: 'name',
        },
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status',
            render: (item) => {
                let color;
                if (item === "UPCOMING") {
                    color = 'blue';
                }
                if (item === "ONGOING") {
                    color = 'green';
                }
                if (item === "ENDED") {
                    color = 'red';
                }
                return <Tag color={color}>{item}</Tag>
            }
        },
        {
            title: 'Start Date',
            key: 'startDate',
            dataIndex: 'startDate',
        },
        {
            title: 'End Date',
            key: 'endDate',
            dataIndex: 'endDate',
        },
        {
            title: "Action",
            key: "X",
            render: (item) => {
                return (
                    <Dropdown menu={menuProps} trigger={["click"]}>
                        <Button onClick={() => setSemesterId(item.key)}>Update</Button>
                    </Dropdown>
                )
            }
        }
    ];


    // const onChange: TableProps<TTableData>['onChange'] = (_pagination, filters, _sorter, extra) => {
    //     if (extra.action === "filter") {
    //         const queryParams: TQueryParam[] = [];

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

export default RegisteredSemester;

