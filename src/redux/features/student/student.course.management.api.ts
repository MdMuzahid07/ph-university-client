import { TQueryParam, TResponseRedux } from "../../../types";
import { baseApi } from "../../api/baseApi";


const StudentCourseApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllOfferedCourses: builder.query({
            query: (args) => {
                const params = new URLSearchParams();

                if (args) {
                    args.forEach((item: TQueryParam) => {
                        params.append(item.name, item.value as string)
                    });
                }

                return {
                    url: "/offered-courses/my-offered-courses",
                    method: "GET",
                    params: params
                }
            },
            transformResponse: (response: TResponseRedux<any>) => {

                return {
                    data: response.data,
                    meta: response?.meta
                }
            },
            providesTags: ["offeredCourse"]
        }),
        getAllEnrolledCourse: builder.query({
            query: (args) => {
                const params = new URLSearchParams();

                if (args) {
                    args.forEach((item: TQueryParam) => {
                        params.append(item.name, item.value as string)
                    });
                }

                return {
                    url: "/enrolled-courses/my-enrolled-course",
                    method: "GET",
                    params: params
                }
            },
            transformResponse: (response: TResponseRedux<any>) => {

                return {
                    data: response.data,
                    meta: response?.meta
                }
            },
            providesTags: ["offeredCourse"]
        }),

        enrollCourse: builder.mutation({
            query: (data) => ({
                url: "/enrolled-courses/create-enrolled-course",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["offeredCourse"]
        }),

    })
});

export const { useGetAllOfferedCoursesQuery, useEnrollCourseMutation, useGetAllEnrolledCourseQuery } = StudentCourseApi;