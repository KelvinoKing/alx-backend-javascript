export const cpp = {
    subject: "C++",
    teacher: null as any,
    getRequirements: () => "Here are the requirements for C++",
    getAvailableTeacher: function() {
        return this.teacher ? `Available Teacher: ${this.teacher.name}` : "No teacher available";
    }
};

export const java = {
    subject: "Java",
    teacher: null as any,
    getRequirements: () => "Here are the requirements for Java",
    getAvailableTeacher: function() {
        return this.teacher ? `Available Teacher: ${this.teacher.name}` : "No teacher available";
    }
};

export const react = {
    subject: "React",
    teacher: null as any,
    getRequirements: () => "Here are the requirements for React",
    getAvailableTeacher: function() {
        return this.teacher ? `Available Teacher: ${this.teacher.name}` : "No teacher available";
    }
};

export const cTeacher = {
    name: "cTeacher",
    experienceTeachingC: 10
};

cpp.teacher = cTeacher;
console.log(cpp.subject);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

java.teacher = cTeacher;
console.log(java.subject);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

react.teacher = cTeacher;
console.log(react.subject);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());