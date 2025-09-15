import { Cpp } from "./subjects/Cpp";
import { Java } from "./subjects/Java";
import { React } from "./subjects/React";
import { Teacher } from "./subjects/Teacher";

// Create constants for each subject
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Create a Teacher object with experienceTeachingC = 10
export const cTeacher: Teacher = {
  firstName: "Guillaume",
  lastName: "Salva",
  experienceTeachingC: 10
};

// C++ Subject
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java Subject
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React Subject
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
