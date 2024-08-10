import { baseApi } from "../../api/baseApi";



const departmentManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        addDepartment: builder.mutation({
            query: (data) => ({
                url: "academic-departments/create-academic-department",
                method: "POST",
                body: data
            })
        })


    })
});


export const { useAddDepartmentMutation } = departmentManagementApi;