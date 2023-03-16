"use strict";
exports.__esModule = true;
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
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Chan",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
if (person.role === Role.AUTHOR) {
    console.log("is admin");
}
// person.role.push("admin");
// person.role[1] = 10;
// person.role = [0, 'admin']
// person.role = [0, 'admin', 'user'] // !!! ERROR !!!
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
    // console.log(hobby.map()); // !!! ERROR !!!
}
