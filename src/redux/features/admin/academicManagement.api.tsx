import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSemesters: builder.query({
            query: () => ({
                url: "/academic-semesters",
                method: "GET",
            })
        }),
        addAcademicSemesters: builder.mutation({
            query: (data) => ({
                url: "/academic-semesters/create-academic-semester",
                method: "POST",
                body: data
            })
        }),
    })
});


export const { useGetAllSemestersQuery, useAddAcademicSemestersMutation } = academicManagementApi;

