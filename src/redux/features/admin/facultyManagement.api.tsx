import { baseApi } from "../../api/baseApi";

const facultyManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllFaculties: builder.query({
            query: (args) => ({
                url: "/academic-faculties",
                method: "GET",
            })
        }),
        addFaculty: builder.mutation({
            query: (data) => ({
                url: "/academic-faculties/create-academic-faculty",
                method: "POST",
                body: data
            })
        }),

    })
});


export const { useAddFacultyMutation, useGetAllFacultiesQuery } = facultyManagementApi;