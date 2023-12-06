import { Teacher } from './Teacher';
import { Cpp } from './Cpp';
import { Java } from './Java';
import { React } from './React';

export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

export const cTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10
};

cpp.teacher = cTeacher;
console.log('C++');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

java.teacher = cTeacher;
console.log('Java');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

react.teacher = cTeacher;
console.log('React');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

