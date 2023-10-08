"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(id, name, cgpa) {
        this.id = id;
        this.name = name;
        this.cgpa = cgpa;
    }
    getIds() {
        return this.id;
    }
}
exports.default = Student;
