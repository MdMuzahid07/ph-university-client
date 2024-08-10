import { baseApi } from "../../api/baseApi";



const departmentManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllDepartments: builder.query({
            query: (args) => {
                const params = new URLSearchParams();

                if (args) {
                    args.forEach((item) => {
                        params.append(item.name, item.value as string)
                    })
                }

                return {
                    url: "/academic-departments",
                    method: "GET",
                    params: params
                }
            }
        }),
        addDepartment: builder.mutation({
            query: (data) => ({
                url: "academic-departments/create-academic-department",
                method: "POST",
                body: data
            })
        })

    })
});


export const { useAddDepartmentMutation, useGetAllDepartmentsQuery } = departmentManagementApi;