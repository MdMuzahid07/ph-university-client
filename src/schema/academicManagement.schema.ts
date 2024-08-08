import { z } from "zod";

export const academicSemesterSchema = z.object({
    name: z.string({ required_error: "This field this required" }),
    year: z.string({ required_error: "This field this required" }),
    startMonth: z.string({ required_error: "This field this required" }),
    endMonth: z.string({ required_error: "This field this required" })
});


export const FacultySchema = z.object({
    name: z.string({ required_error: "This field is required" })
});