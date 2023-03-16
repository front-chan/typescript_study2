export {};

// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; // 튜플 타입
// } = {
//     name: "Chan",
//     age: 30,
//     hobbies: ["Sports", "Cooking"],
//     role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// enum(열거형) 타입
enum Role {
    ADMIN = "ADMIN",
    READ_ONLY = 100,
    AUTHOR = "AUTHOR",
}

const person = {
    name: "Chan",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};

if (person.role === Role.AUTHOR) {
    console.log("is admin");
}

// person.role.push("admin");
// person.role[1] = 10;

// person.role = [0, 'admin']
// person.role = [0, 'admin', 'user'] // !!! ERROR !!!

// any 타입
// let favoriteActivities: any; // 에러 발생하지 않음
// favoriteActivities = ['Sports', 5]

// let favoriteActivities: any[];
// favoriteActivities = 5; // !!! ERROR !!!
// any[] 배열로 설정했으나 한 가지 값만 입력할 경우 에러 발생

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby);
    // console.log(hobby.map()); // !!! ERROR !!!
}
