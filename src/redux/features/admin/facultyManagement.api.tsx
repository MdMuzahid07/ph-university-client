import { baseApi } from "../../api/baseApi";

const facultyManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        addFaculty: builder.mutation({
            query: (data) => ({
                url: "/academic-faculties/create-academic-faculty",
                method: "POST",
                body: data
            })
        }),

    })
});


export const { useAddFacultyMutation } = facultyManagementApi;