import { Button, Pagination, Space, Table, TableColumnsType, TableProps } from "antd";
import { TQueryParam, TStudent } from "../../../types";
import { useState } from "react";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userMangement.api";
import { Link } from "react-router-dom";

type TTableData = Pick<TStudent, "name" | "id" | "contactNumber", "email">;

const StudentData = () => {
    const [params, setParams] = useState<TQueryParam[]>([]);
    const [page, setPage] = useState(1);
    const { data: studentData, isFetching } = useGetAllStudentsQuery([
        { name: "page", value: page },
        { name: "sort", value: "id" },
        ...params,
    ]);

    const metaData = studentData?.meta;

    console.log(studentData)


    const tableData = studentData?.data?.res?.map(({ _id, name, id, email, contactNumber }) => ({
        key: _id,
        name: name?.firstName,
        contactNumber,
        email,
        id
    }))


    const columns: TableColumnsType<TTableData> = [
        {
            title: 'Name',
            key: "name",
            dataIndex: 'name'
        },
        {
            title: 'Role No',
            key: "id",
            dataIndex: 'id'
        },
        {
            title: 'Contact No',
            key: "contactNo",
            dataIndex: 'contactNumber'
        },
        {
            title: 'Email',
            key: "email",
            dataIndex: 'email'
        },
        {
            title: "Action",
            key: "X",
            render: (item) => {
                console.log(item)
                return (
                    <Space>
                        <Button>Block</Button>
                        <Button>Update</Button>
                        <Link to={`/admin/student-data/${item?.key}`}>
                            <Button>Details</Button>
                        </Link>
                    </Space>
                )
            },
            width: "1%"
        }
    ];


    const onChange: TableProps<TTableData>['onChange'] = (_pagination, filters, _sorter, extra) => {
        if (extra.action === "filter") {
            const queryParams: TQueryParam[] = [];

            filters.name?.forEach((item) => (
                queryParams.push({ name: "name", value: item })
            ));

            filters.year?.forEach((item) =>
                queryParams.push({ name: 'year', value: item })
            );

            setParams(queryParams);
        }
    };

    return (
        <>
            <Table
                columns={columns}
                loading={isFetching}
                dataSource={tableData}
                onChange={onChange}
                pagination={false}
            />
            <Pagination
                current={page}
                onChange={(value) => setPage(value)}
                pageSize={metaData?.limit}
                total={metaData?.total}
            />
        </>
    )
}

export default StudentData;

