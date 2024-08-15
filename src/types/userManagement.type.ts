import { TAcademicSemester } from "./academicManagement.type";

export type TStudent = {
    _id: string;
    id: string;
    user: TUser;
    name: TName;
    gender: string[];
    dateOfBirth: string;
    email: string;
    contactNumber: string;
    emergencyContactNo: string;
    bloodGroup: string[];
    presentAddress: string;
    permanentAddress: string;
    guardian: TGuardian;
    localGuardian: TLocalGuardian;
    profileImage: string;
    admissionSemester: TAcademicSemester;
    isDeleted: boolean;
    academicDepartment: TAcademicDepartment;
    academicFaculty: TAcademicFaculty;
};

export type TUser = {
    _id: string;
    id: string;
    email: string;
    needsPasswordChange: boolean;
    role: string;
    status: string;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number
}

export type TName = {
    firstName: string;
    middleName: string;
    lastName: string;
    _id: string
}

export type TGuardian = {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOccupation: string;
    motherContactNo: string;
    _id: string
}

export type TLocalGuardian = {
    name: string;
    occupation: string;
    contactNo: string;
    address: string;
    _id: string
}

// export type TAdmissionSemester = {
//     _id: string;
//     name: string;
//     year: string;
//     code: string;
//     startMonth: string;
//     endMonth: string;
//     createdAt: string;
//     updatedAt: string;
//     __v: number
// }

export type TAcademicDepartment = {
    _id: string;
    name: string;
    academicFaculty: string;
    createdAt: string;
    updatedAt: string;
    __v: number
}

export type TAcademicFaculty = {
    _id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    __v: number
}
