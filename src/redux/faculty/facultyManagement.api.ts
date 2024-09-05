/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../api/baseApi";



const FacultyCourseApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getAllFacultyCourses: builder.query({
            query: (args) => {
                const params = new URLSearchParams();

                if (args) {
                    args.forEach((item: any) => {
                        params.append(item.name, item.value as string)
                    });
                }

                return {
                    url: "/enrolled-courses",
                    method: "GET",
                    params: params
                }
            },
            transformResponse: (response: any) => {

                return {
                    data: response.data,
                    meta: response?.meta
                }
            },
            providesTags: ["offeredCourse"]
        }),

        addMark: builder.mutation({
            query: (data) => ({
                url: "/enrolled-courses/update-enrolled-course-marks",
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ["offeredCourse"]
        }),

    })
});

export const { useGetAllFacultyCoursesQuery, useAddMarkMutation } = FacultyCourseApi;