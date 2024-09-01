import { baseApi } from "../../api/baseApi";

const facultyManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllAcademicFaculties: builder.query({
            query: (args) => {
                const params = new URLSearchParams();

                if (args) {
                    args.forEach((item) => {
                        params.append(item.name, item.value as string)
                    })
                }

                return {
                    url: "/academic-faculties",
                    method: "GET",
                    params: params
                }
            }
        }),
        addAcademicFaculty: builder.mutation({
            query: (data) => ({
                url: "/academic-faculties/create-academic-faculty",
                method: "POST",
                body: data
            })
        }),

    })
});


export const { useAddAcademicFacultyMutation, useGetAllAcademicFacultiesQuery } = facultyManagementApi;