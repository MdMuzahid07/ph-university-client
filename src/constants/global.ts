const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

export const genders = ['male', 'female', 'other'];

export const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export const monthOptions = months?.map((month) => ({
    value: month,
    label: month
}));


export const genderOptions = genders.map((item) => ({
    value: item.toLowerCase(),
    label: item,
}));

export const bloodGroupOptions = bloodGroups.map((item) => ({
    value: item,
    label: item,
}));