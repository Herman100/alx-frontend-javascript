/* eslint-disable */
export default function createIteratorObject(report) {
  let employee = [];
  for (let [departments, employees] of Object.entries(report.allEmployees)) {
    for (let an_employee of employees) {
      employee.push(an_employee);
    }
  }
  return employee;
}
